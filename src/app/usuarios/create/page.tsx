import { Metadata } from "next";
import HeaderPage from "@/components/HeaderPage";
import Breadcrumb from "@/components/BreadCrumb";

export const metadata: Metadata = {
  title: "SISPAGE - Novo Usuário",
};

export default function CreateUsuario() {
  return (
    <>
      <HeaderPage>
        <Breadcrumb
        items={[
            { label: 'Início', href: '/inicio' },
            { label: 'Usuários', href: '/usuarios' },
            { label: 'Novo Usuário', href: '/usuarios/create' },
        ]}
        /> 
      </HeaderPage>
    </>
  );
}
