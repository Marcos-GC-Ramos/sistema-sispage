"use client";

import Breadcrumb from "@/components/BreadCrumb";
import HeaderPage from "@/components/HeaderPage";
import { useInicioContext } from "@/context/InicioContext";
import CardListagemPaineis from "@/components/card/CardListagemPaineis";
import SeparatorDeshaboards from "@/components/Separator/SeparatorDashboards";
import CarregandoDashboards from "@/components/inicio-components/CarregandoDashboards";
import DashboardsComPermissao from "@/components/inicio-components/DashboardsComPermissao";
import DashboardsSemPermissao from "@/components/inicio-components/DashboardsSemPermissao";
import FiltroDashboards from "@/components/inicio-components/FiltroDashboards";

export default function InicioContent() {
  const { categorias, dashboards, loading, search, setSearch, categoriaSelecionada, setCategoriaSelecionada } = useInicioContext();

  return (
    <>
      <HeaderPage>
        <Breadcrumb items={[{ label: "Início", href: "/inicio" }]} />

        <FiltroDashboards
          categorias={categorias}
          search={search}
          setSearch={setSearch}
          categoriaSelecionada={categoriaSelecionada}
          setCategoriaSelecionada={setCategoriaSelecionada}
        />
      </HeaderPage>

      <CardListagemPaineis>
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
