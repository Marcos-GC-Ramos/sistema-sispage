import HeaderPage from "@/components/HeaderPage";
import TabelaSolicitacoes from "./components/TabelaSolicitacoes";
import Breadcrumb from "@/components/BreadCrumb";

export default function SolicitacoesContent() {
  return (
    <>
      <HeaderPage>
        <Breadcrumb
        items={[
            { label: 'Início', href: '/inicio' },
            { label: 'Solicitações', href: '/solicitacoes' },
        ]}
        />

        {/* Area para buttons de actions (Adicionar, Relatorios) */}
        <div></div>
      </HeaderPage>

      <TabelaSolicitacoes/>
    </>
  );
}
