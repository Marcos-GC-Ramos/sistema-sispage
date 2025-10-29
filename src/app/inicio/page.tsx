import { Metadata } from "next";
import { InicioProvider } from "@/context/InicioContext";
import InicioContent from "./InicioContent";

export const metadata: Metadata = {
  title: "SISPAGE - Inicio",
};

export default function Inicio() {
  return (
    <InicioProvider>
      <InicioContent />
    </InicioProvider>
  );
}
