import HeaderPage from "@/components/HeaderPage";
import TabelaMinhasSolicitacoes from "./components/TabelaMinhasSolicitacoes";
import Breadcrumb from "@/components/BreadCrumb";

export default function MinhasSolicitacoesContent() {
  return (
    <>
      <HeaderPage>
        <Breadcrumb
        items={[
            { label: 'Início', href: '/inicio' },
            { label: 'Minhas Solicitações', href: '/minhas-solicitacoes' },
        ]}
        />

        {/* Area para buttons de actions (Adicionar, Relatorios) */}
        <div></div>
      </HeaderPage>

      <TabelaMinhasSolicitacoes/>
    </>
  );
}
