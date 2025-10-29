"use client";
import { ReactNode, useEffect  } from "react";

type ModalProps = {
  children: ReactNode;
  titulo?: string;
  isOpen: boolean;
  size?: "sm" | "md" | "lg" | "full";
  onClose: () => void;
};

export default function Modal({
  children,
  titulo = "",
  isOpen,
  size = "md",
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeStyles =
    size === "sm"
      ? "max-w-md justify-center items-center m-auto"
      : size === "lg"
      ? "max-w-4xl justify-center items-center m-auto"
      : size === "full"
      ? "max-w-full p-0! rounded-0!"
      : "max-w-xl justify-center items-center m-auto"; // md padrão
      
  return (
    <div className="overflow-y-hidden! fixed font-inter top-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-[#00112F]/40 backdrop-blur-[5px]">
        <div className={` ${sizeStyles} relative p-4 w-full h-full max-h-full flex`}>
          <div className={` ${size == "full" ? sizeStyles : ""} relative bg-[#f8f8f8] rounded-[6px] px-4 py-2 md:px-5 md:py-3 flex flex-col justify-between w-full`}>
            {titulo && (
              <h3 className="text-md md:text-xl font-medium text-[#111827] mb-2 md:mb-4">{titulo}</h3>
            )}

            {children}
          </div>
        </div>
    </div>
  );
}
