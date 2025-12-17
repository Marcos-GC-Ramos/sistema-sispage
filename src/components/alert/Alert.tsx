"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type AlertProps = {
  mensagem: string;
  status: boolean;
  onClose: () => void;
};

export default function Alert({ mensagem, status, onClose }: AlertProps) {
  const [isMounted, setIsMounted] = useState(!!mensagem);
  const [visible, setVisible] = useState(!!mensagem);

  const ANIMATION_DURATION = 200;
  const AUTO_CLOSE_TIME = 1000;

  // controla abertura / fechamento
  useEffect(() => {
    if (mensagem) {
      setIsMounted(true);
      setVisible(false);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });

      const timer = setTimeout(() => {
        setVisible(false);
      }, AUTO_CLOSE_TIME);

      return () => clearTimeout(timer);
    }

    setVisible(false);
    const t = setTimeout(() => {
      setIsMounted(false);
    }, ANIMATION_DURATION);

    return () => clearTimeout(t);
  }, [mensagem, AUTO_CLOSE_TIME, ANIMATION_DURATION]);

  // dispara onClose só depois da animação
  useEffect(() => {
    if (!visible && mensagem) {
      const t = setTimeout(onClose, ANIMATION_DURATION);
      return () => clearTimeout(t);
    }
  }, [visible, mensagem, onClose, ANIMATION_DURATION]);

  if (!isMounted) return null;

  return createPortal(
    <div
      aria-hidden={!visible}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={() => setVisible(false)}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-[#00112F]/40 backdrop-blur-[5px] transition-opacity duration-300 ease-out
          ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Painel do Alert */}
      <div className="relative z-[10000] flex items-center justify-center px-4">
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white min-h-[200px] w-[350px] rounded-[12px] px-4 py-3
            flex flex-col items-center justify-center gap-3 text-[#001B38] text-[20px] text-center
            transform transition-all duration-300 ease-out
            ${
              visible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-6 scale-98"
            }
          `}
        >
          {status ? (
            <svg className="w-[83px] h-[81px] text-[#2DB059]" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-[83px] h-[81px] text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                clipRule="evenodd"
              />
            </svg>
          )}

          <h1>{mensagem}</h1>
        </div>
      </div>
    </div>,
    document.body
  );
}
