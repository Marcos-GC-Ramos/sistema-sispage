import HeaderPage from "@/components/HeaderPage";
import TabelaCategorias from "./components/TabelaCategorias";
import Breadcrumb from "@/components/BreadCrumb";
import Button from "@/components/buttons/Button";
import Link from "next/link";

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

        <Link href="/categorias/create">
          <Button
              type="button"
              size="md"
              variant={`primary`}
            >
              Nova Categoria
            </Button>
        </Link>
      </HeaderPage>

      <TabelaCategorias/>
    </>
  );
}
