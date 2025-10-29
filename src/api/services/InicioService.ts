import api from "../AxiosConfig";
import Cookies from "js-cookie";
import apiRoutes from "../ApiRoutes";
import { Categoria, Option, DashboardResponse } from "@/types/Dashboard";

export async function getUserDashboard(
  search?: string,
  categoriaId?: number
): Promise<DashboardResponse | null> {
  try {
    const userId = Cookies.get("userID");
    if (!userId) throw new Error("Usuário não está logado");

    // Monta a URL base
    const url = apiRoutes.inicio.show(Number(userId));

    // Monta query params dinamicamente
    const params: Record<string, string | number> = {};
    if (search) params.search = search;
    if (categoriaId) params.categoria = categoriaId;

    const response = await api.get(url, { params });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro ao buscar dashboard do usuário:", error.message);
    } else {
      console.error("Erro ao buscar dashboard do usuário:", error);
    }
    return null;
  }
}

export async function getCategoriasSelect(): Promise<Option[]> {
  try {
    const response = await api.get(apiRoutes.categorias.show);
    const categorias = response.data;

    // Primeiro item fixo do select
    const options: Option[] = [
      
      ...categorias.map((categoria: Categoria) => ({
        value: String(categoria.id),
        label: categoria.nome,
      })),
    ];

    return options;
  } catch (error: unknown) {
    console.error("Erro ao buscar categorias:", error);
    return [{ value: "", label: "Erro ao buscar categorias" }]; 
  }
}
