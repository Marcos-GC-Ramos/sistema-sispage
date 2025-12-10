"use client";

import { useInicioContext } from "@/context/InicioContext";
import CardListagemPaineis from "@/components/card/CardListagemPaineis";
import SeparatorDeshaboards from "@/components/Separator/SeparatorDashboards";
import CarregandoDashboards from "@/app/inicio/components/CarregandoDashboards";
import DashboardsComPermissao from "@/app/inicio/components/DashboardsComPermissao";
import DashboardsSemPermissao from "@/app/inicio/components/DashboardsSemPermissao";
import FiltroDashboards from "@/app/inicio/components/FiltroDashboards";

export default function InicioContent() {
  const { categorias, dashboards, loading, search, setSearch, categoriaSelecionada, setCategoriaSelecionada } = useInicioContext();

  return (
    <>
      <CardListagemPaineis>
        <FiltroDashboards
          categorias={categorias}
          search={search}
          setSearch={setSearch}
          categoriaSelecionada={categoriaSelecionada}
          setCategoriaSelecionada={setCategoriaSelecionada}
        />

        {loading ? (
          <CarregandoDashboards carregando={loading} />
        ) : (
          <>
            <DashboardsComPermissao
              dashboards={dashboards?.com_permissao || []}
            />
            <SeparatorDeshaboards />
            <DashboardsSemPermissao
              dashboards={dashboards?.sem_permissao || []}
            />
          </>
        )}
      </CardListagemPaineis>
    </>
  );
}
