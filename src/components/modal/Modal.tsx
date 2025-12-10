"use client";
import { ReactNode, useEffect, useState } from "react";

type ModalProps = {
  children: ReactNode;
  titulo?: string;
  isOpen: boolean;
  size?: "sm" | "md" | "lg" | "full";
  onClose?: () => void;
};

export default function Modal({
  children,
  titulo = "",
  isOpen,
  size = "md",
  onClose,
}: ModalProps) {
  // controla montagem do componente (para permitir animação de saída)
  const [isMounted, setIsMounted] = useState(isOpen);
  // controla visibilidade (classe de entrada/saída)
  const [visible, setVisible] = useState(isOpen);

  // Duração da animação (deve bater com as classes do Tailwind abaixo)
  const ANIMATION_DURATION = 300; // ms

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      setVisible(false); // <- começa invisível

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVisible(true); // <- entra animando
        });
      });
    } else {
      // inicia saída
      setVisible(false);
      // desbloqueia scroll depois que a animação terminar
      const t = setTimeout(() => {
        setIsMounted(false);
        document.body.style.overflow = "";
      }, ANIMATION_DURATION);
      return () => clearTimeout(t);
    }
    // cleanup se desmontar por completo
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Se não estiver montado, não renderiza nada
  if (!isMounted) return null;

  const sizeStyles =
    size === "sm"
      ? "max-w-md"
      : size === "lg"
      ? "max-w-4xl"
      : size === "full"
      ? "max-w-full w-full h-[100dvh]"
      : "max-w-xl"; // md padrão

  return (
    // container fixo full screen
    <div
      aria-hidden={!visible}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Backdrop */}
      <div
        // classes de transição do backdrop: fade in/out
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Painel do modal - centralizado */}
      <div
        className={`relative z-50 w-full ${size === "full" ? "" : "px-4"} py-6 flex items-center justify-center overflow-y-auto`}
      >
        <div
          // anima o painel: opacity + translateY + scale sutil
          className={`mx-auto w-full ${sizeStyles} transform transition-all duration-300 ease-out
            ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-98"}
            bg-[#f8f8f8] shadow-lg ${size === "full" ? "" : "rounded-lg p-4 md:p-6"}`}
          role="dialog"
          aria-modal="true"
        >
          {titulo && (
            <div className="mb-3">
              <h3 className="text-md md:text-xl font-medium text-[#111827]">
                {titulo}
              </h3>
            </div>
          )}

          {children}
        </div>
      </div>
    </div>
  );
}
