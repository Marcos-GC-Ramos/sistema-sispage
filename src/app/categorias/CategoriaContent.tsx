import HeaderPage from "@/components/HeaderPage";
import TabelaCategorias from "./components/TabelaCategorias";
import Breadcrumb from "@/components/BreadCrumb";
import Button from "@/components/buttons/Button";

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
         <Button
            type="button"
            size="md"
            variant={`primary`}
          >
            Nova Categoria
          </Button>
      </HeaderPage>

      <TabelaCategorias/>
    </>
  );
}
