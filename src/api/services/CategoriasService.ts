// api/services/CategoriasService.ts
import api from "../AxiosConfig";
import apiRoutes from "../ApiRoutes";
import { CategoriasResponse } from "@/types/Categorias";

interface GetCategoriasParams {
  page?: number;
  per_page?: number;
  search?: string;
}

export async function getCategorias({
  page = 1,
  per_page = 10,
  search = "",
}: GetCategoriasParams): Promise<CategoriasResponse> {
  try {
    const response = await api.get(apiRoutes.categorias.index, {
      params: { page, per_page, search },
    });

    return {
      data: response.data.data,
      pagination: response.data.pagination,
    };
  } catch (error: unknown) {
    console.error("Erro ao buscar categorias:", error);

    return {
      data: [],
      pagination: { total: 0, per_page: 0, current_page: 0, last_page: 0 },
    };
  }
}
