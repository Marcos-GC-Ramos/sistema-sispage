"use client";

import { Option } from "@/types/Dashboard";
import { useCategoriasContext } from "@/context/CategoriasContext";

import CardTable from "@/components/card/CardTable";
import Input from "@/components/input/Input";
import Select from "@/components/select/Select";
import Table from "@/components/table/table";
import Tbody from "@/components/table/tbody";
import Td from "@/components/table/td";
import Th from "@/components/table/th";
import Thead from "@/components/table/thead";
import Tr from "@/components/table/tr";
import Pagination from "@/components/table/pagination";

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

  const qtdPorPagina: Option[] = [
    { value: "10", label: "10" },
    { value: "50", label: "50" },
    { value: "100", label: "100" },
  ];

  return (
    <CardTable titulo="Listagem das categorias">

      <div className="w-full flex justify-between gap-5 mb-5">
        <Select
          id="qtdPorPagina"
          options={qtdPorPagina}
          value={String(perPage)}
          onChange={(e) => setPerPage(Number(e.target.value))}
          className="w-[50px]! text-center!"
        />

        <div className="w-[300px]">
          <Input
              type="text"
              placeholder="Pesquisar por nome..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>  

      <Table>
        <Thead>
            <Th>ID</Th>
            <Th>Nome</Th>
            <Th>Descrição</Th>
            <Th>Ações</Th>
        </Thead>
        {loading ? 
        <Tbody><></></Tbody>
        :
        <Tbody>
          {categorias.map((cat) => (
            <Tr key={cat.id}>
              <Td>{cat.id}</Td>
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
