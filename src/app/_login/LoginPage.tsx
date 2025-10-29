"use client";

import Image from "next/image";
import LoginDescricao from "./LoginDescricao";
import LoginForm from "./LoginForms";

export default function LoginPage() {
  return (
    <main className="relative font-inter min-h-screen bg-gradiente-login xl:bg-[center] flex flex-col justify-between gap-5 px-[16px]! py-[25px]! lg:px-[50px]! lg:pb-[25px]!">
      {/* Pré-carrega a imagem de fundo */}
      <Image
        src="/img/backgrounds/background-login.png"
        alt="Background Login"
        fill
        priority
        className="object-cover -z-10"
      />

      {/* Header */}
      <header className="w-full min-h-[140px]">
        <div className="text-white montserrat font-medium text-[18px] block lg:hidden">
          <div className="relative flex flex-col items-center justify-center">
            <Image
              src="/img/login/nome-sistema-mobile.svg"
              alt="Logo"
              width={329}
              height={140}
              priority
              className="w-[280px] h-auto lg:w-[329px]"
            />
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <section className="mx-auto max-w-[1500px] w-full h-auto lg:h-full flex justify-center">
        <div className="w-full flex flex-col justify-center items-center gap-[50px] lg:flex-row lg:justify-between">
          <LoginDescricao />
          <LoginForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full">
        <div className="mx-auto max-w-[1500px] w-full">
          <div className="w-full flex justify-center items-center gap-[20px] lg:justify-end">
            <div className="flex justify-center items-center flex-wrap gap-[30px] w-full max-w-[412px] lg:justify-between">
              <Image
                src="/img/logos/logo-sec.svg"
                alt="Logo Sec"
                width="118" 
                height="38"
                priority
                className="w-[100px] h-auto lg:w-[175px]"
              />

              <Image
                src="/img/logos/logo-gov.svg"
                alt="Logo Gov"
                width="194"
                height="68"
                priority
                className="w-[120px] h-auto lg:w-[200px]"
              />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
