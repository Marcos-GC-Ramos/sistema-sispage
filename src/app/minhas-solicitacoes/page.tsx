import { Metadata } from "next";
import MinhasSolicitacoesContent from "./MinhasSolicitacaoContent";
import { AuthSolicitacoesProvider } from "@/context/SolicitacoesContext";

export const metadata: Metadata = {
  title: "SISPAGE - Solicitações",
};

export default function Solicitacoes() {
  return (
    <AuthSolicitacoesProvider>
      <MinhasSolicitacoesContent />
    </AuthSolicitacoesProvider>
  );
}
