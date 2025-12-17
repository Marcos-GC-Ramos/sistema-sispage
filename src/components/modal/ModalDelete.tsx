"use client";

import { useState, useRef } from "react";
import Button from "../buttons/Button";
import api from "@/api/AxiosConfig";
import { AxiosError } from "axios";

interface ModalDeleteProps {
  titulo: string;
  subtitulo: string;
  valor?: string;
  id: number | null;
  type: string;
  onClose: () => void;
  onSuccess: () => void;
  setFetch?: () => void;
}

export default function ModalDelete({
  titulo,
  subtitulo,
  valor,
  id,
  type,
  onClose,
  onSuccess,
  setFetch,
}: ModalDeleteProps) {
  const [carregando, setCarregando] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const handleDelete = async () => {
    if (!id) return;

    setCarregando(true);
    abortControllerRef.current = new AbortController();

    try {
      await api.delete(`/api/delete-${type}/${id}`, {
        signal: abortControllerRef.current.signal,
      });

      if (setFetch) setFetch();

      onSuccess(); // 🔥 só avisa o pai
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.code === "ERR_CANCELED") return;

        console.error(error.response?.data || error.message);
      } else {
        console.error(error);
      }
    } finally {
      setCarregando(false);
    }
  };

  const handleCancelar = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    onClose();
  };

  return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleDelete();
        }}
      >
        <div className="m-auto max-w-[313px] py-[25px] pt-[40px]">
          <h1 className="titulo-deletar text-[20px] text-[#001B38] mb-[18px]">
            Excluir {titulo} &quot;{valor}&quot;?
          </h1>

          <p className="leading-[25px] text-[18px] text-[#757575]">
            Você tem certeza que deseja excluir este(a){" "}
            <span className="font-medium">{subtitulo}</span>?
          </p>
        </div>

        <div className="py-[15px] bg-[#F2F2F2] rounded-b-xl">
          <div className="flex flex-wrap justify-between items-center gap-2 m-auto max-w-[290px]">
            <Button
              size="md"
              className="min-w-[125px]"
              variant="white"
              type="button"
              onClick={handleCancelar}
            >
              Cancelar
            </Button>

            <Button
              size="md"
              className="min-w-[125px]"
              variant="red"
              type="submit"
              loading={carregando}
            >
              Excluir
            </Button>
          </div>
        </div>
      </form>
  );
}
