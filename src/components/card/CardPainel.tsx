"use client";
import { useState } from "react";
import React from "react";
import Button from "../buttons/Button";
import PointStatus from "../point-status/PointStatus";
import Modal from "../modal/Modal";
import ModalSolicitacao from "../modal/ModalSolicitacao";
import ModalViewDashboard from "../modal/ModalViewDashboard";

interface CardPainelProps {
  data: string;
  url?: string;
  titulo: string;
  imagem?: string;
  descricao: string;
  botaoTexto?: string;
  permissao?: boolean;
  idDashboard: number;
  badges: { label: string; bg: string; text: string }[];
}

// Função para formatar data dd/mm/aaaa
function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function CardPainel({
  data,
  titulo,
  badges,
  url = "",
  descricao,
  idDashboard,
  permissao = true,
  imagem = "/img/BI/bi-exemplo.svg",
  botaoTexto = "Solicitar permissão",
}: CardPainelProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className={` ${permissao ? 'cursor-pointer': 'cursor-default'} rounded-[6px] text-[12px] font-inter`}
      style={{
        backgroundImage: `url('${imagem}')`,
        backgroundSize: "cover",
      }}
    >
      <div 
        onClick={permissao ? () => setIsOpen(true) : undefined}
        className="group w-full bg-[#000125]/60 backdrop-blur-[25px] rounded-[6px] border border-white/15 p-[9px] flex flex-col justify-between gap-4 h-full min-h-[200px]"
      >
        {permissao && (
          <div className="absolute inset-0 z-50 bg-[#000000]/20 backdrop-blur-[25px] rounded-[5px] flex justify-center items-center opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-autotransition-opacity duration-300">
            <svg
              className="w-10 h-10 text-[#dfe9ff]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}

        <div className="lg:max-w-[310px]">
          <h1 className="font-normal text-white !text-[14px] my-1">{titulo}</h1>

          <div className="flex justify-between gap-1 mt-2 flex-wrap items-center">
            <div className="flex gap-1">
              {badges.map((badge, i) => (
                <span
                  key={i}
                  className="w-[75px] text-center text-[9px] py-[3.5px] font-medium rounded-[3px]"
                  style={{ backgroundColor: badge.bg, color: badge.text }}
                >
                  {badge.label}
                </span>
              ))}
            </div>

            <div>
              <PointStatus color="info" size="md" className="mr-[2.5px]"/>
              <span className="text-[#DEDEDE] font-semibold text-[10px]">{formatDate(data)}</span>
            </div>
          </div>
        </div>

        <p className="lg:max-w-[310px] text-[#DEDEDE]">{descricao}</p>

        {!permissao && (
          <Button
            type="button"
            size="sm"
            variant={`${botaoTexto == "Em análise" ? "white" : "primary"}`}
            disabled={botaoTexto == "Em análise" ? true : false}
            onClick={() => setIsOpen(true)}
            className="mt-2 max-w-[150px] rounded-[6px]! py-2!"
          >
            {botaoTexto}
          </Button>
        )}
      </div>
    </div>
    
    <Modal 
      isOpen={isOpen} 
      onClose={() => setIsOpen(false)} 
      size={`${permissao ? "full": "md"}`}
      titulo={`${permissao ? "": "Solicitação para acessar dashboard"}`}
    >
      {permissao ? 
        <ModalViewDashboard onClose={() => setIsOpen(false)} titulo={titulo} url={url} />
      :
        <ModalSolicitacao onClose={() => setIsOpen(false)} titulo={titulo} idDashboard={idDashboard}/>
      }
    </Modal>

    </>
  );
}
