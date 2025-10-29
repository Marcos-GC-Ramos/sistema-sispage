import { Metadata } from "next";
import Breadcrumb from "@/components/BreadCrumb"
import CardTable from "@/components/card/CardTable";
import HeaderPage from "@/components/HeaderPage"

export const metadata: Metadata = {
  title: "SISPAGE - Solicitações",
};


export default function Solicitacoes(){
    return (
        <>
        <HeaderPage>
            <Breadcrumb
            items={[
                { label: 'Início', href: '/inicio' },
                { label: 'Solicitações', href: '/solicitações' },
            ]}
            />

            <div></div>
        </HeaderPage>

        <CardTable titulo="Listagem das solicitações">
            <h1>teste</h1>
        </CardTable>
        </>
    );
}