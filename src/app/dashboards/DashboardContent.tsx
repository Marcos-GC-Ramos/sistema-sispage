import HeaderPage from "@/components/HeaderPage";
import Breadcrumb from "@/components/BreadCrumb";
import TabelaDashboards from "./components/TabelaDashboards";
import Button from "@/components/buttons/Button";

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
        <Button
           type="button"
           size="md"
           variant={`primary`}          
         >
           Novo Dashboard
         </Button>
      </HeaderPage>

      <TabelaDashboards/>
    </>
  );
}
