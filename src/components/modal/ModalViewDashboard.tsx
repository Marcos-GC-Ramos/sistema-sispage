"use client";

import { useEffect, useState } from "react";
import BiIframe from "../BiIframe";

interface ModalViewDashboardProps {
  url: string;
  titulo: string;
  onClose: () => void;
}

export default function ModalViewDashboard({
  url,
  titulo,
  onClose,
}: ModalViewDashboardProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleCancelar = () => {
    onClose(); // fecha o modal
  };

  const handleFullScreen = () => {
    const el = document.documentElement; // ou pode ser o container do modal
    if (!document.fullscreenElement) {
      el.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  // Listener para quando sai do fullscreen (Ex: ESC)
  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleChange);
    };
  }, []);

  return (
    <div className="relative w-full min-w-full h-full">
      <BiIframe titulo={titulo} url={url} />

      {!isFullscreen && (
        <div className="min-w-[40px] h-[74px] rounded-[0px_0px_0px_8px] fixed top-0 right-0 bg-[#3B3B3B25] border border-t-0 border-0.5 border-[#7E7E7E] flex flex-col justify-center p-[1px]">
          <button onClick={handleCancelar} type="button" className="cursor-pointer hover:bg-[#3E3D4B] text-[#38393A] h-full hover:text-[#BBBACC]">
            <svg
                className="w-6 h-6 mx-auto"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
          </button>

          <button onClick={handleFullScreen} type="button" className="cursor-pointer hover:bg-[#3E3D4B] text-[#38393A] h-full hover:text-[#BBBACC] rounded-[0px_0px_0px_8px]">
              <svg 
                className="w-6 h-6 mx-auto" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg"
                width="24" 
                height="24" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 4h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5"
                />
              </svg>
          </button>
        </div>
      )}
    </div>
  );
}
