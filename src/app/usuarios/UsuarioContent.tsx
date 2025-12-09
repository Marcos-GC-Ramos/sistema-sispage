import HeaderPage from "@/components/HeaderPage";
import TabelaUsuarios from "./components/TabelaUsuarios";
import Breadcrumb from "@/components/BreadCrumb";

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

        {/* Area para buttons de actions (Adicionar, Relatorios) */}
        <div></div>
      </HeaderPage>

      <TabelaUsuarios/>
    </>
  );
}
