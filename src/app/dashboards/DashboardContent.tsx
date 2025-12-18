import HeaderPage from "@/components/HeaderPage";
import Breadcrumb from "@/components/BreadCrumb";
import TabelaDashboards from "./components/TabelaDashboards";
import Button from "@/components/buttons/Button";
import Link from "next/link";

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

        <Link href="/dashboards/create">
          <Button
            type="button"
            size="md"
            variant={`primary`}          
          >
            Novo Dashboard
          </Button>
        </Link>
      </HeaderPage>

      <TabelaDashboards/>
    </>
  );
}
