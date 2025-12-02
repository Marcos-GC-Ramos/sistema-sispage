import HeaderPage from "@/components/HeaderPage";
import TabelaCategorias from "./components/TabelaCategorias";
import Breadcrumb from "@/components/BreadCrumb";

export default function CategoriasContent() {
  return (
    <>
      <HeaderPage>
        <Breadcrumb
        items={[
            { label: 'Início', href: '/inicio' },
            { label: 'Categorias', href: '/categorias' },
        ]}
        />

        {/* Area para buttons de actions (Adicionar, Relatorios) */}
        <div></div>
      </HeaderPage>

      <TabelaCategorias/>
    </>
  );
}
