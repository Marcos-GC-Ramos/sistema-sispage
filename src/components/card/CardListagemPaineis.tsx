import { ReactNode } from "react";

type CardListagemPaineisProps = {
  children: ReactNode;
};

export default function CardListagemPaineis({
  children,
}: CardListagemPaineisProps) {
    return(
      <section className="font-inter bg-white w-full mb-[25px] rounded-[8px] p-[22px] flex flex-col gap-10 mt-[30px] min-h-[500px]">
        {children}
      </section>
    );
}