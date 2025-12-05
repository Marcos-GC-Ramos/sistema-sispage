import HeaderPage from "@/components/HeaderPage";
import Breadcrumb from "@/components/BreadCrumb";
import TabelaDashboards from "./components/TabelaDashboards";

export default function DashboardsContent() {
  return (
    <>
      <HeaderPage>
        <Breadcrumb
        items={[
            { label: 'Início', href: '/inicio' },
            { label: 'Dashboards', href: '/dashboards' },
        ]}
        />

        {/* Area para buttons de actions (Adicionar, Relatorios) */}
        <div></div>
      </HeaderPage>

      <TabelaDashboards/>
    </>
  );
}
