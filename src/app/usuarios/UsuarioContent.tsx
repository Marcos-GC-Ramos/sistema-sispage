import HeaderPage from "@/components/HeaderPage";
import TabelaUsuarios from "./components/TabelaUsuarios";
import Breadcrumb from "@/components/BreadCrumb";
import Button from "@/components/buttons/Button";
import Link from "next/link";

export default function UsuariosContent() {
  return (
    <>
      <HeaderPage>
        <Breadcrumb
        items={[
            { label: 'Início', href: '/inicio' },
            { label: 'Usuários', href: '/usuarios' },
        ]}
        />

        <Link href="/usuarios/create">
          <Button
            type="button"
            size="md"
            variant={`primary`}          
          >
            Novo Usuário
          </Button>      
        </Link>
      </HeaderPage>

      <TabelaUsuarios/>
    </>
  );
}
