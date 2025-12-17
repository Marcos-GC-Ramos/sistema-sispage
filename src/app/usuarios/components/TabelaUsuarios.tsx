"use client";

import { useState } from "react";
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
import ButtonActions from "@/components/buttons/ButtonActions";
import Modal from "@/components/modal/Modal";
import ModalDelete from "@/components/modal/ModalDelete";
import Alert from "@/components/alert/Alert";

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
              <Th className="!text-center">Ações</Th>
          </Thead>
          {loading ? 
          <Tbody>
            {Array.from({ length: 10 }).map((_, i) => (
              <Tr key={i}>
                <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-[40px] my-1"></div></Td>
                <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-50 my-1"></div></Td>
                <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-100 my-1"></div></Td>
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
            {usuarios.length != 0 ?
            <>
              {usuarios.map((user) => (
                <Tr key={user.id}>
                  <Td className="text-[#111827]">{user.id}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    <div className="w-full flex gap-2 items-center justify-center">
                      <ButtonActions
                        acao="Editar"
                        id={`btn-editar-${user.id}`}
                        onClick={() => console.log(user.id)}
                      />
                      <ButtonActions
                        acao="Excluir"
                        id={`btn-excluir-${user.id}`}
                        onClick={() =>
                          setModalDelete({
                            open: true,
                            id: user.id,
                            titulo: "Usuário",
                            subtitulo: "usuário",
                            valor: user.name,
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

      <Modal
        isOpen={modalDelete.open}
      >
        <ModalDelete
          titulo={modalDelete.titulo}
          subtitulo={modalDelete.subtitulo}
          valor={modalDelete.valor}
          id={modalDelete.id}
          type="user"
          onClose={() =>
            setModalDelete({ ...modalDelete, open: false })
          }
          setFetch={() => fetchUsuarios()}
          onSuccess={() => {
            setModalDelete({ ...modalDelete, open: false });
            setAlertMsg("Usuário excluído com sucesso!");
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
