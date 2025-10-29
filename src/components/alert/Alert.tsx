"use client";

import { useEffect } from "react";

type AlertProps = {
  mensagem: string;
  status: boolean;
  onClose: () => void;
};

export default function Alert({ mensagem, status, onClose }: AlertProps) {
  useEffect(() => {
    if (mensagem) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // fecha após 5s
      return () => clearTimeout(timer);
    }
  }, [mensagem, onClose]);

  if (!mensagem) return null;
    return(
        <div onClick={onClose} className="fixed top-0 left-0 z-99 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-[#00112F]/40 backdrop-blur-[5px]">
            <div className="relative p-4 w-full h-full max-h-full flex justify-center items-center m-auto"
            //  onClick={(e) => e.stopPropagation()} impede de fechar se clicar no card (opicional)
            >
                <div className="relative bg-[#FFFFFF] min-h-[200px] w-[350px] rounded-[12px] px-4 py-2 md:px-5 md:py-3 flex flex-col justify-center items-center gap-[10px] text-[#001B38] text-[20px] font-regular text-center">
                    {status  ? (
                        <svg className="w-[83.25px] h-[81.63px] text-[#2DB059]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="83.25" height="81.63" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd"/>
                        </svg>
                    ) : (
                        <svg className="w-[83.25px] h-[81.63px] text-[#FF0000]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="83.25" height="81.63" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clipRule="evenodd"/>
                        </svg>
                    )}
                    <h1>{mensagem}</h1>
                </div>
            </div>
        </div>
    );
}