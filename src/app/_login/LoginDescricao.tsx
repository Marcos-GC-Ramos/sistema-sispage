"use client"

import Image from "next/image";

export default function LoginDescricao() {
    return(
        <div className="w-full text-white hidden lg:block -mt-20">
            <Image
                src="/img/login/nome-sistema-desktop.svg"
                alt="Nome do sistema"
                width={943}
                height={440}
                priority
            />
        </div>
    );
}