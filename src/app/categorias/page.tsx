import { Metadata } from "next";
import CategoriasContent from "./CategoriaContent";
import { CategoriasProvider } from "@/context/CategoriasContext";

export const metadata: Metadata = {
  title: "SISPAGE - Categorias",
};

export default function Categorias() {
  return (
    <CategoriasProvider>
      <CategoriasContent />
    </CategoriasProvider>
  );
}
