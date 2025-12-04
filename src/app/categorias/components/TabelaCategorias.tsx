"use client";

import { useCategoriasContext } from "@/context/CategoriasContext";

import CardTable from "@/components/card/CardTable";
import Table from "@/components/table/table";
import Tbody from "@/components/table/tbody";
import Td from "@/components/table/td";
import Th from "@/components/table/th";
import Thead from "@/components/table/thead";
import Tr from "@/components/table/tr";
import Pagination from "@/components/table/pagination";
import Filters from "@/components/table/filters";

export default function TabelaCategorias() {
  const {
    categorias,
    pagination,
    perPage,
    setPerPage,
    search,
    setSearch,
    loading,
    fetchCategorias,
  } = useCategoriasContext();

  return (
    <CardTable titulo="Listagem das categorias">

      <Filters
        perPage={perPage}
        setPerPage={setPerPage}
        search={search}
        setSearch={setSearch}
        searchPlaceholder="Buscar pelo nome da categoria..."
      />

      <Table>
        <Thead>
            <Th>ID</Th>
            <Th>Nome</Th>
            <Th>Descrição</Th>
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
          {categorias.map((cat) => (
            <Tr key={cat.id}>
              <Td className="text-[#111827]">{cat.id}</Td>
              <Td>{cat.nome}</Td>
              <Td>{cat.descricao}</Td>
              <Td>{cat.descricao}</Td>
            </Tr>
          ))}
        </Tbody>
        }
      </Table>

      <Pagination
        tituloDado="Categorias"
        currentPage={pagination.current_page}
        perPage={pagination.per_page}
        total={pagination.total}
        lastPage={pagination.last_page}
        onPageChange={(page) => fetchCategorias(page)}
      />
    </CardTable>
  );
}
