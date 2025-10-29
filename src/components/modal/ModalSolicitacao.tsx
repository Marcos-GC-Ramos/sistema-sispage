"use client";

import { useState, useRef } from "react";
import React from "react";
import Input from "../input/Input";
import Button from "../Button";
import api from "@/api/AxiosConfig";
import Cookies from "js-cookie";
import apiRoutes from "@/api/ApiRoutes";
import Alert from "../alert/Alert";
import { useInicioContext } from "@/context/InicioContext";

interface ModalSolicitacaoProps {
  titulo: string;
  idDashboard: number;
  onClose: () => void;
}

export default function ModalSolicitacao({
  titulo,
  onClose,
  idDashboard,
}: ModalSolicitacaoProps) {
  const [email, setEmail] = useState("");
  const [carregando, setCarregando] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const [alertMsg, setAlertMsg] = useState("");
  const [alertStatus, setAlertStatus] = useState<boolean | null>(null);
  const { fetchDashboards } = useInicioContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);
    
    try {
      const userId = Cookies.get("userID");
      if (!userId) throw new Error("Usuário não está logado");
      abortControllerRef.current = new AbortController();

      const response = await api.post(
        apiRoutes.permissao.create(Number(userId)),
        {
          dashboard_id: idDashboard,
          email_superior: email,
        },
        {
          signal: abortControllerRef.current.signal,
        }
      );

      console.log("Requisição bem-sucedida:", response.data);
      
      // sucesso
      setAlertMsg("Permissão solicitada com sucesso!");
      setAlertStatus(true);
      fetchDashboards();

      } catch (error: unknown) {
        if (error instanceof Error) {
          if (error.name === "CanceledError") {
            fetchDashboards();
            console.log("Requisição cancelada pelo usuário.");
          } else {
            setAlertMsg("Erro ao solicitar permissão.");
            setAlertStatus(false);
            console.error(error.message);
          }
        } else {
          // caso seja outro tipo inesperado
          setAlertMsg("Erro desconhecido ao solicitar permissão.");
          setAlertStatus(false);
          console.error(error);
        }
      } finally {
        setCarregando(false);
        abortControllerRef.current = null;
      }
  };

  // se tiver uma requisição em andamento, cancela
  const handleCancelar = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    onClose(); // fecha o modal
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-inter">
      <div className="flex flex-col justify-center gap-2">
        <h1 className="text-sm md:text-[15px] text-[#111827] font-regular">
          Informe o e-mail do superior responsável pelos dados do dashboard:
          <span className="font-[600]"> {titulo}</span> para solicitação.
        </h1>

        <Input
          id="email"
          uiSize="md"
          type="email"
          value={email}
          loading={carregando}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="exemplo@educacao.com.gov"
        />
      </div>

      <div className="flex flex-row flex-wrap justify-end items-center gap-2">
        <Button size="md" variant="white" className="min-w-[125px]" onClick={handleCancelar}>Cancelar</Button>
        <Button type="submit" loading={carregando} size="md" className="min-w-[125px]">Solicitar permissão</Button>
      </div>
    </form>

    {alertMsg && alertStatus !== null && (
      <Alert
        mensagem={alertMsg}
        status={alertStatus}
        onClose={() => {
          setAlertMsg("");
          setAlertStatus(null);
        }}
      />
    )}
    </>
  );
}
