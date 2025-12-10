"use client";

import { useAuthSolicitacoesContext } from "@/context/SolicitacoesContext";

import CardTable from "@/components/card/CardTable";
import Table from "@/components/table/table";
import Tbody from "@/components/table/tbody";
import Td from "@/components/table/td";
import Th from "@/components/table/th";
import Thead from "@/components/table/thead";
import Tr from "@/components/table/tr";
import Pagination from "@/components/table/pagination";
import Filters from "@/components/table/filters";

export default function TabelaMinhasSolicitacoes() {
  const {
    solicitacoes,
    pagination,
    perPage,
    setPerPage,
    search,
    setSearch,
    loading,
    fetchSolicitacoes,
  } = useAuthSolicitacoesContext();

  return (
    <CardTable titulo="Listagem das Minhas Solicitações">

      <Filters
        perPage={perPage}
        setPerPage={setPerPage}
        search={search}
        setSearch={setSearch}
        searchPlaceholder="Buscar pelo solicitante, dashboard, e-mail..."
      />

      <Table>
        <Thead>
            <Th>ID</Th>
            <Th className="!w-[350px] !min-w-[300px]">Dashboard Solicitado</Th>
            <Th>E-mail do Superior</Th>
            <Th>Status Superior e Suporte</Th>
            <Th>Data da Solicitação</Th>
        </Thead>
        {loading ? 
        <Tbody>
          {Array.from({ length: 10 }).map((_, i) => (
            <Tr key={i}>
              <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-10 my-1"></div></Td>
              <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-[300px] my-1"></div></Td>
              <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-[300px] my-1"></div></Td>
              <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-24 my-1"></div></Td>
              <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-24 my-1"></div></Td>
            </Tr>
          ))}
        </Tbody> 
        :
        <Tbody>
          {solicitacoes.length != 0 ?
          <>
            {solicitacoes.map((sol) => (
              <Tr key={sol.id}>
                <Td className="text-[#111827]">{sol.id}</Td>
                <Td>
                  cod.: {sol.dashboard.id} <br /> 
                  {sol.dashboard.nome}
                </Td>
                <Td>{sol.superior_email}</Td>
                <Td>
                  status superior: {sol.status_superior} <br /> 
                  status suporte: {sol.status_suporte}
                </Td>
                <Td>{new Date(sol.updated_at).toLocaleDateString("pt-BR")}</Td>
              </Tr>
            ))}
          </>
          : 
            <Tr>
              <Td colspan={7} className="text-[#111827] !text-center py-4">Não ha nenhuma solicitação</Td>
            </Tr>
          }
        </Tbody>
        }
      </Table>

      <Pagination
        tituloDado="Solicitacoes"
        currentPage={pagination.current_page}
        perPage={pagination.per_page}
        total={pagination.total}
        lastPage={pagination.last_page}
        onPageChange={(page) => fetchSolicitacoes(page)}
      />
    </CardTable>
  );
}
