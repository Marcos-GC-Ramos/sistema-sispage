"use client";

import CardPainel from "@/components/card/CardPainel";
import { Dashboard } from "@/types/Dashboard";

interface Props {
  dashboards: Dashboard[];
}

export default function DashboardsSemPermissao({ dashboards }: Props) {
  if (!dashboards.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 w-full max-w-[1900px] mx-auto">
      {dashboards.map((dash) => (
        <CardPainel
          key={dash.id}
          permissao={false}
          titulo={dash.nome}
          idDashboard={dash.id}
          imagem={dash.image_url}
          descricao={dash.descricao}
          data={dash.updated_at}
          badges={[
            { label: dash.categoria.nome, bg: "#1E3986", text: "#ffffffff" },
          ]}
          botaoTexto={
            dash.solicitacao.length > 0 &&
            (dash.solicitacao[0].status_superior === "aguardando" ||
            dash.solicitacao[0].status_suporte === "aguardando")
              ? "Em análise"
              : undefined
          }
        />
      ))}
    </div>
  );
}
