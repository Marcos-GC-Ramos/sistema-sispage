import api from "../AxiosConfig";
import apiRoutes from "../ApiRoutes";
import { SolicitacoesResponse } from "@/types/Solicitacoes";

interface GetSolicitacoesParams {
  page?: number;
  per_page?: number;
  search?: string;
}

export async function getSolicitacoes({
  page = 1,
  per_page = 10,
  search = "",
}: GetSolicitacoesParams): Promise<SolicitacoesResponse> {
  try {
    const response = await api.get(apiRoutes.permissao.index, {
      params: { page, per_page, search },
    });

    return {
      data: response.data.data,
      pagination: response.data.pagination,
    };
  } catch (error: unknown) {
    console.error("Erro ao buscar Solicitacoes:", error);

    return {
      data: [],
      pagination: { total: 0, per_page: 0, current_page: 0, last_page: 0 },
    };
  }
}

export async function getAuthSolicitacoes({
  page = 1,
  per_page = 10,
  search = "",
}: GetSolicitacoesParams): Promise<SolicitacoesResponse> {
  try {
    const response = await api.get(apiRoutes.permissao.getAuthSolicitacoes, {
      params: { page, per_page, search },
    });

    return {
      data: response.data.data,
      pagination: response.data.pagination,
    };
  } catch (error: unknown) {
    console.error("Erro ao buscar Solicitacoes:", error);

    return {
      data: [],
      pagination: { total: 0, per_page: 0, current_page: 0, last_page: 0 },
    };
  }
}