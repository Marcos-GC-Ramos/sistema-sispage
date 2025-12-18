import { Metadata } from "next";
import HeaderPage from "@/components/HeaderPage";
import Breadcrumb from "@/components/BreadCrumb";

export const metadata: Metadata = {
  title: "SISPAGE - Nova Categoria",
};

export default function CreateCategoria() {
  return (
    <>
      <HeaderPage>
        <Breadcrumb
        items={[
            { label: 'Início', href: '/inicio' },
            { label: 'Categorias', href: '/categorias' },
            { label: 'Nova Categoria', href: '/categorias/create' },
        ]}
        /> 
      </HeaderPage>
    </>
  );
}
