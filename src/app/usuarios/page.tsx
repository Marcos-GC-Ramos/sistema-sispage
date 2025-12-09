import { Metadata } from "next";
import UsuariosContent from "./UsuarioContent";
import { UsuariosProvider } from "@/context/UsuariosContext";

export const metadata: Metadata = {
  title: "SISPAGE - Usuários",
};

export default function Usuarios() {
  return (
    <UsuariosProvider>
      <UsuariosContent />
    </UsuariosProvider>
  );
}
