"use client";

import { useState } from "react";
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
import ButtonActions from "@/components/buttons/ButtonActions";
import Modal from "@/components/modal/Modal";
import ModalDelete from "@/components/modal/ModalDelete";
import Alert from "@/components/alert/Alert";

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

  const [alertMsg, setAlertMsg] = useState("");
  const [alertStatus, setAlertStatus] = useState<boolean>(true);

  const [modalDelete, setModalDelete] = useState({
    open: false,
    id: null as number | null,
    titulo: "",
    subtitulo: "",
    valor: "",
  });

  return (
    <>
      <CardTable titulo="Listagem das Categorias">

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
              <Th className="!text-center">Ações</Th>
          </Thead>
          {loading ? 
          <Tbody>
            {Array.from({ length: 10 }).map((_, i) => (
              <Tr key={i}>
                <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-[40px] my-[11px]"></div></Td>
                <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-50 my-[11px]"></div></Td>
                <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-100 my-[11px]"></div></Td>
                <Td>
                  <div className="w-full flex gap-2 items-center justify-center">
                    <div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-[33px] my-[11px]"></div>
                    <div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-[33px] my-[11px]"></div>
                  </div>
                </Td>
              </Tr>
            ))}
          </Tbody> 
          :
          <Tbody>
            {categorias.length != 0 ?
            <>
              {categorias.map((cat) => (
                <Tr key={cat.id}>
                  <Td className="text-[#111827]">{cat.id}</Td>
                  <Td>{cat.nome}</Td>
                  <Td>{cat.descricao}</Td>
                  <Td>
                    <div className="w-full flex gap-2 items-center justify-center">
                      <ButtonActions
                        acao="Editar"
                        id={`btn-editar-${cat.id}`}
                        onClick={() => console.log("editar!")}
                      />
                      <ButtonActions
                        acao="Excluir"
                        id={`btn-excluir-${cat.id}`}
                        onClick={() =>
                          setModalDelete({
                            open: true,
                            id: cat.id,
                            titulo: "Categoria",
                            subtitulo: "categoria",
                            valor: cat.nome,
                          })
                        }
                      />
                    </div>
                  </Td>
                </Tr>
              ))}
            </>
            : 
              <Tr>
                <Td colspan={4} className="text-[#111827] !text-center py-4">Não ha nenhuma categoria</Td>
              </Tr>
            }
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

      <Modal
        isOpen={modalDelete.open}
      >
        <ModalDelete
          titulo={modalDelete.titulo}
          subtitulo={modalDelete.subtitulo}
          valor={modalDelete.valor}
          id={modalDelete.id}
          type="categoria"
          onClose={() =>
            setModalDelete({ ...modalDelete, open: false })
          }
          setFetch={() => fetchCategorias()}
          onSuccess={() => {
            setModalDelete({ ...modalDelete, open: false });
            setAlertMsg("Categoria excluída com sucesso!");
            setAlertStatus(true);
          }}
        />
      </Modal>

      <Alert
        mensagem={alertMsg}
        status={alertStatus}
        onClose={() => setAlertMsg("")}
      />
    </>
  );
}
