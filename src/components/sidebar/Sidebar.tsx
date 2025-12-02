'use client';

import Image from "next/image";
import Cookies from "js-cookie";
import LogoutAction from '../utils/LogoutAction';
import SidebarItem from './SidebarItem';
import { useState, useEffect } from 'react';

interface SidebarProps {
  setGridColumns: React.Dispatch<React.SetStateAction<string>>;
}

export default function Sidebar({ setGridColumns }: SidebarProps) {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [sidebarWidth, setSidebarWidth] = useState<string>('80px');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');

  // Pega primeiro nome do usuário
  useEffect(() => {
    const rawUserName = Cookies.get("userName");
    if (rawUserName) {
      const decoded = decodeURIComponent(rawUserName);
      const firstName = decoded.trim().split(" ")[0];
      setUserName(firstName);
    }
  }, []);

  // Ajusta largura da grid ao redimensionar
  useEffect(() => {
    const checkScreenSize = () => {
      const isSmall = window.innerWidth <= 1023;
      setIsSmallScreen(isSmall);

      if (isSmall) {
        setGridColumns('1fr');
      } else {
        setGridColumns(isSidebarCollapsed ? '220px 1fr' : '100px 1fr');
      }
    };

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSidebarCollapsed]); // comentado para ignorar warning, setGridColumns nunca muda

  const handleExpandCollapse = () => {
    const textElements = document.querySelectorAll('.text-opcao');

    if (isSidebarCollapsed) {
      setTimeout(() => {
        textElements.forEach(el => {
          (el as HTMLElement).classList.add('hidden'); 
        });
      }, 0);
      setGridColumns('100px 1fr');
      setSidebarWidth('80px');
      setIsSidebarCollapsed(false);
    } else {
      setTimeout(() => {
        textElements.forEach(el => {
          (el as HTMLElement).classList.remove('hidden'); 
        });
      }, 220);
      setGridColumns('220px 1fr');
      setSidebarWidth('200px');
      setIsSidebarCollapsed(true);
    }
  };

  return (
      <div id="sidebar" className={`sidebar fixed top-[20px] left-[20px] z-[5] w-[80px] font-light`}
        style={{
          width: sidebarWidth,
          height: isSmallScreen ? 'auto' : 'calc(100% - 40px)',
          display: isSmallScreen ? 'none' : 'block',
          transition: 'width 0.3s ease-in-out',
        }}
      >
        <div className="body-sidebar text-white flex flex-col rounded-[12px] h-full"
          style={{
            background: 'linear-gradient(180deg,#002c79 0%, #00112F 26%)',
          }}
        >
          <div className="flex flex-col gap-[10px] h-full">
            <div className="relative m-[20px_0_5px_0]">
                <button className={`relative w-full flex items-center gap-[10px] text-[14px] cursor-pointer p-[5px_5px_5px_25px] justify-start group-hover/opcaoConfigInicio:block group/configInicio`} >
                  <svg className="w-7 h-7 text-[#8298C1]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clipRule="evenodd" />
                  </svg>

                  <p className="text-opcao hidden">Olá, <strong className="font-bold" id="nomeUsuario">{userName || 'Usuário'}</strong></p>

                  <Image
                    className="text-opcao hidden absolute right-[15px]"
                    src="/img/sidebar/icone-arrow.svg"
                    alt="Seta"
                    width={12}
                    height={12}
                  />

                  <div className="group-hover/configInicio:flex bg-white text-[#091B39] flex-col items-start hidden rounded-[8px] drop-shadow absolute right-[-140px] top-0 w-[150px] text-[16px] text-left">
                    <LogoutAction />
                  </div>
                </button>
            </div>
            
            <div className="h-full rounded-[12px] py-[15px] shadow-[0px_-1.8px_0px_rgba(0,0,0,0.25)] sidebar-scroll overflow-y-auto" style={{ background: '#D9D9D918' }}>
              <ul className="flex flex-col gap-[10px]">
                <SidebarItem sidebarWidth={sidebarWidth} label="Recolher" onClick={handleExpandCollapse}
                  icon={
                    isSidebarCollapsed ? (
                      <svg className="w-6 h-6 text-[#D7E5FF]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M10 4H4c-1.10457 0-2 .89543-2 2v12c0 1.1046.89543 2 2 2h6V4ZM7.79283 9.29289c.39053.39053.39053 1.02371 0 1.41421L6.5 11.9999l1.29283 1.2929c.39053.3905.39053 1.0237 0 1.4142-.39052.3905-1.02368.3905-1.41421 0l-1.99994-2c-.39052-.3905-.39052-1.0236 0-1.4142l1.99994-1.99991c.39053-.39052 1.02369-.39052 1.41421 0Z" clipRule="evenodd"/>
                        <path d="M12 20h8c1.1046 0 2-.8954 2-2V6c0-1.10457-.8954-2-2-2h-8v16Z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-[#D7E5FF]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M10 4H4c-1.10457 0-2 .89543-2 2v12c0 1.1046.89543 2 2 2h6V4ZM4.37868 9.29289c-.39052.39053-.39052 1.02371 0 1.41421l1.29283 1.2928-1.29283 1.2929c-.39052.3905-.39052 1.0237 0 1.4142.39052.3905 1.02369.3905 1.41421 0l1.99994-2c.39053-.3905.39053-1.0236 0-1.4142L5.79289 9.29289c-.39052-.39052-1.02369-.39052-1.41421 0Z" clipRule="evenodd"/>
                        <path d="M12 20h8c1.1046 0 2-.8954 2-2V6c0-1.10457-.8954-2-2-2h-8v16Z"/>
                      </svg>
                    )
                  }
                />

                <SidebarItem href="/inicio" sidebarWidth={sidebarWidth} label="Início"
                  icon={
                    <svg className="w-6 h-6 text-[#D7E5FF]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd"/>
                    </svg>
                  }
                />

                <SidebarItem href="/solicitacoes" sidebarWidth={sidebarWidth} label="Solicitações"
                  icon={
                    <svg className="w-6 h-6 text-[#D7E5FF]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z" clipRule="evenodd"/>
                    </svg>
                  }
                />

                <span className="text-opcao hidden cursor-default p-[5px_5px_5px_28px] text-[12px] font-normal text-[#8298C1]"> Área Administrativa </span>

                <SidebarItem href="/paineis" sidebarWidth={sidebarWidth} label="Paineis"
                  icon={
                    <svg className="w-6 h-6 text-[#D7E5FF]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm14 18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4ZM5 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5Zm14 2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4Z"/>
                    </svg>
                  }
                />

                <SidebarItem href="/categorias" sidebarWidth={sidebarWidth} label="Categorias"
                  icon={
                    <svg className="w-6 h-6 text-[#D7E5FF] rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M5 6a3 3 0 1 1 4 2.83V10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8.83a3.001 3.001 0 1 1 2 0V10a3 3 0 0 1-3 3h-1v2.17a3.001 3.001 0 1 1-2 0V13h-1a3 3 0 0 1-3-3V8.83A3.001 3.001 0 0 1 5 6Z" clipRule="evenodd"/>
                    </svg>

                  }
                />

                <SidebarItem href="/usuarios" sidebarWidth={sidebarWidth} label="Usuários"
                  icon={
                    <svg className="w-6 h-6 text-[#D7E5FF]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clipRule="evenodd"/>
                    </svg>
                  }
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}