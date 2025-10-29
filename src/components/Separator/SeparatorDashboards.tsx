import Image from "next/image";

export default function SeparatorDeshaboards(){
    return(
        <div className="flex gap-2 items-center w-full max-w-[1800px] mx-auto">
          <h1 className="text-[#535353] text-[16px] font-normal min-w-[190px]">
            Sem permissão de acesso
          </h1>
          <div className="w-full h-[2px] bg-gray-300 shadow-inset-center" />
          <Image
            src="/img/inicio/Lock.png"
            alt="Ícone de cadeado"
            width={25}
            height={32}
            priority
          />
        </div>
    );
}