import api from "../AxiosConfig";
import apiRoutes from "../ApiRoutes";
import { UsuariosResponse } from "@/types/Usuarios";

interface GetUsuariosParams {
  page?: number;
  per_page?: number;
  search?: string;
}

export async function getUsuarios({
  page = 1,
  per_page = 10,
  search = "",
}: GetUsuariosParams): Promise<UsuariosResponse> {
  try {
    const response = await api.get(apiRoutes.usuarios.index, {
      params: { page, per_page, search },
    });

    return {
      data: response.data.data,
      pagination: response.data.pagination,
    };
  } catch (error: unknown) {
    console.error("Erro ao buscar Usuarios:", error);

    return {
      data: [],
      pagination: { total: 0, per_page: 0, current_page: 0, last_page: 0 },
    };
  }
}
