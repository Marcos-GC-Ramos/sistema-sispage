"use client";

import { useDashboardsContext } from "@/context/DashboardsContext";

import CardTable from "@/components/card/CardTable";
import Table from "@/components/table/table";
import Tbody from "@/components/table/tbody";
import Td from "@/components/table/td";
import Th from "@/components/table/th";
import Thead from "@/components/table/thead";
import Tr from "@/components/table/tr";
import Pagination from "@/components/table/pagination";
import Filters from "@/components/table/filters";
import Image from "next/image";

export default function TabelaDashboards() {
  const {
    dashboards,
    pagination,
    perPage,
    setPerPage,
    search,
    setSearch,
    loading,
    fetchDashboards,
  } = useDashboardsContext();

  return (
    <CardTable titulo="Listagem das Dashboards">

      <Filters
        perPage={perPage}
        setPerPage={setPerPage}
        search={search}
        setSearch={setSearch}
        searchPlaceholder="Buscar pelo nome do dashboard..."
      />

      <Table className="">
        <Thead>
            <Th className="!w-[110px]">ID</Th>
            <Th className="!w-[350px] !min-w-[300px]">Nome</Th>
            <Th className="!w-[500px] !max-w-[500px] !min-w-[500px]">Descrição</Th>
            <Th>Categoria</Th>
            <Th>Atualizado</Th>
            <Th>Ações</Th>
        </Thead>
        {loading ? 
        <Tbody>
          {Array.from({ length: 10 }).map((_, i) => (
            <Tr key={i}>
              <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-24 my-1"></div></Td>
              <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-50 my-1"></div></Td>
              <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-100 my-1"></div></Td>
              <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-24 my-1"></div></Td>
              <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-24 my-1"></div></Td>
              <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-24 my-1"></div></Td>
            </Tr>
          ))}
        </Tbody> 
        :
        <Tbody>
          {dashboards.length != 0 ?
          <>
            {dashboards.map((dash) => (
              <Tr key={dash.id}>
                <Td className="text-[#111827]">{dash.id}</Td>
                <Td>{dash.nome}</Td>
                <Td>{dash.descricao}</Td>
                <Td>{dash.categoria.nome}</Td>
                <Td>{new Date(dash.updated_at).toLocaleDateString("pt-BR")}</Td>
                <Td>N/A</Td>
              </Tr>
            ))}
          </>
          : 
            <Tr>
              <Td colspan={6} className="text-[#111827] !text-center py-4">Não ha nenhum dashboard</Td>
            </Tr>
          }
        </Tbody>
        }
      </Table>

      <Pagination
        tituloDado="Dashboards"
        currentPage={pagination.current_page}
        perPage={pagination.per_page}
        total={pagination.total}
        lastPage={pagination.last_page}
        onPageChange={(page) => fetchDashboards(page)}
      />
    </CardTable>
  );
}
