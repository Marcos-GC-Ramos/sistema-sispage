import { Metadata } from "next";
import Breadcrumb from "@/components/BreadCrumb"
import CardTable from "@/components/card/CardTable";
import HeaderPage from "@/components/HeaderPage"

export const metadata: Metadata = {
  title: "SISPAGE - Paineis",
};


export default function Paineis(){
    return (
        <>
        <HeaderPage>
            <Breadcrumb
            items={[
                { label: 'Início', href: '/inicio' },
                { label: 'Paineis', href: '/paineis' },
            ]}
            />

            <div></div>
        </HeaderPage>

        <CardTable titulo="Listagem dos Paineis">
            <h1>teste</h1>
        </CardTable>
        </>
    );
}