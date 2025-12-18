import { Metadata } from "next";
import HeaderPage from "@/components/HeaderPage";
import Breadcrumb from "@/components/BreadCrumb";

export const metadata: Metadata = {
  title: "SISPAGE - Novo Dashboard",
};

export default function CreateDashboard() {
  return (
    <>
      <HeaderPage>
        <Breadcrumb
        items={[
            { label: 'Início', href: '/inicio' },
            { label: 'Dashboards', href: '/dashboards' },
            { label: 'Novo Dashboard', href: '/dashboards/create' },
        ]}
        /> 
      </HeaderPage>
    </>
  );
}
