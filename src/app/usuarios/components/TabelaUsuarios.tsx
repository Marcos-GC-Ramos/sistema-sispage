"use client";

import { useUsuariosContext } from "@/context/UsuariosContext";

import CardTable from "@/components/card/CardTable";
import Table from "@/components/table/table";
import Tbody from "@/components/table/tbody";
import Td from "@/components/table/td";
import Th from "@/components/table/th";
import Thead from "@/components/table/thead";
import Tr from "@/components/table/tr";
import Pagination from "@/components/table/pagination";
import Filters from "@/components/table/filters";

export default function TabelaUsuarios() {
  const {
    usuarios,
    pagination,
    perPage,
    setPerPage,
    search,
    setSearch,
    loading,
    fetchUsuarios,
  } = useUsuariosContext();

  return (
    <CardTable titulo="Listagem das Usuários">

      <Filters
        perPage={perPage}
        setPerPage={setPerPage}
        search={search}
        setSearch={setSearch}
        searchPlaceholder="Buscar pelo nome do usuário..."
      />

      <Table>
        <Thead>
            <Th>ID</Th>
            <Th>Nome</Th>
            <Th>E-mail</Th>
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
            </Tr>
          ))}
        </Tbody> 
        :
        <Tbody>
          {usuarios.length != 0 ?
          <>
            {usuarios.map((user) => (
              <Tr key={user.id}>
                <Td className="text-[#111827]">{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>N/A</Td>
              </Tr>
            ))}
          </>
          : 
            <Tr>
              <Td colspan={4} className="text-[#111827] !text-center py-4">Não ha nenhum usuario</Td>
            </Tr>
          }
        </Tbody>
        }
      </Table>

      <Pagination
        tituloDado="Usuários"
        currentPage={pagination.current_page}
        perPage={pagination.per_page}
        total={pagination.total}
        lastPage={pagination.last_page}
        onPageChange={(page) => fetchUsuarios(page)}
      />
    </CardTable>
  );
}
