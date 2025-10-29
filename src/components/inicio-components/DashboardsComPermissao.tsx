"use client";

import CardPainel from "@/components/card/CardPainel";
import { Dashboard } from "@/types/Dashboard";

interface Props {
  dashboards: Dashboard[];
}

export default function DashboardsComPermissao({ dashboards }: Props) {
  if (!dashboards.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 w-full max-w-[1800px] mx-auto">
      {dashboards.map((dash) => (
        <CardPainel
          key={dash.id}
          url={dash.url}
          permissao={true}
          titulo={dash.nome}
          idDashboard={dash.id}
          imagem={dash.image_url}
          descricao={dash.descricao}
          data={dash.updated_at}
          badges={[
            { label: "DETIN", bg: "#1E3986", text: "#87B8F1" },
          ]}
        />
      ))}
    </div>
  );
}
