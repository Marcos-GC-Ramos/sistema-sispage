import { Metadata } from "next";
import SolicitacoesContent from "./SolicitacaoContent";
import { SolicitacoesProvider } from "@/context/SolicitacoesContext";

export const metadata: Metadata = {
  title: "SISPAGE - Solicitações",
};

export default function Solicitacoes() {
  return (
    <SolicitacoesProvider>
      <SolicitacoesContent />
    </SolicitacoesProvider>
  );
}
