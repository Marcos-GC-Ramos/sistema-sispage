import { Metadata } from "next";
import Breadcrumb from "@/components/BreadCrumb"
import CardTable from "@/components/card/CardTable";
import HeaderPage from "@/components/HeaderPage"

export const metadata: Metadata = {
  title: "SISPAGE - Usuarios",
};


export default function Usuarios(){
    return (
        <>
        <HeaderPage>
            <Breadcrumb
            items={[
                { label: 'Início', href: '/inicio' },
                { label: 'Usuarios', href: '/usuarios' },
            ]}
            />

            <div></div>
        </HeaderPage>

        <CardTable titulo="Listagem das usuarios">
            <h1>teste</h1>
        </CardTable>
        </>
    );
}