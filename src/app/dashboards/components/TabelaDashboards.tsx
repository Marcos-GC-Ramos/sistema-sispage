"use client";

import { useState } from "react";
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
import ButtonActions from "@/components/buttons/ButtonActions";
import Modal from "@/components/modal/Modal";
import ModalDelete from "@/components/modal/ModalDelete";
import Alert from "@/components/alert/Alert";

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
      <CardTable titulo="Listagem dos Dashboards">

        <Filters
          perPage={perPage}
          setPerPage={setPerPage}
          search={search}
          setSearch={setSearch}
          searchPlaceholder="Buscar pelo nome do dashboard ou ID..."
        />

        <Table className="">
          <Thead>
              <Th className="!w-[110px]">ID</Th>
              <Th className="!w-[350px] !min-w-[300px]">Nome</Th>
              <Th className="!w-[500px] !max-w-[500px] !min-w-[500px]">Descrição</Th>
              <Th>Categoria</Th>
              <Th>Atualizado</Th>
              <Th className="!text-center">Ações</Th>
          </Thead>
          {loading ? 
          <Tbody>
            {Array.from({ length: 10 }).map((_, i) => (
              <Tr key={i}>
                <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-[40px] my-1"></div></Td>
                <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-50 my-1"></div></Td>
                <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-100 my-1"></div></Td>
                <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-24 my-1"></div></Td>
                <Td><div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-24 my-1"></div></Td>
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
            {dashboards.length != 0 ?
            <>
              {dashboards.map((dash) => (
                <Tr key={dash.id}>
                  <Td className="text-[#111827]">{dash.id}</Td>
                  <Td>{dash.nome}</Td>
                  <Td>{dash.descricao}</Td>
                  <Td>{dash.categoria.nome}</Td>
                  <Td>{new Date(dash.updated_at).toLocaleDateString("pt-BR")}</Td>
                  <Td>
                    <div className="w-full flex gap-2 items-center justify-center">
                      <ButtonActions
                        acao="Editar"
                        id={`btn-editar-${dash.id}`}
                        onClick={() => console.log(dash.id)}
                      />
                      <ButtonActions
                        acao="Excluir"
                        id={`btn-excluir-${dash.id}`}
                        onClick={() =>
                          setModalDelete({
                            open: true,
                            id: dash.id,
                            titulo: "Dashboard",
                            subtitulo: "dashboard",
                            valor: dash.nome,
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

      <Modal
        isOpen={modalDelete.open}
      >
        <ModalDelete
          titulo={modalDelete.titulo}
          subtitulo={modalDelete.subtitulo}
          valor={modalDelete.valor}
          id={modalDelete.id}
          type="dashboard"
          onClose={() =>
            setModalDelete({ ...modalDelete, open: false })
          }
          setFetch={() => fetchDashboards()}
          onSuccess={() => {
            setModalDelete({ ...modalDelete, open: false });
            setAlertMsg("Dashboard excluído com sucesso!");
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
