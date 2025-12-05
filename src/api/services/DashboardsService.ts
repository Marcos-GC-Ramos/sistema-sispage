import api from "../AxiosConfig";
import apiRoutes from "../ApiRoutes";
import { DashboardsResponse } from "@/types/Dashboard";

interface GetDashboardsParams {
  page?: number;
  per_page?: number;
  search?: string;
}

export async function getDashboards({
  page = 1,
  per_page = 10,
  search = "",
}: GetDashboardsParams): Promise<DashboardsResponse> {
  try {
    const response = await api.get(apiRoutes.dashboards.index, {
      params: { page, per_page, search },
    });

    return {
      data: response.data.data,
      pagination: response.data.pagination,
    };
  } catch (error: unknown) {
    console.error("Erro ao buscar dashboards:", error);

    return {
      data: [],
      pagination: { total: 0, per_page: 0, current_page: 0, last_page: 0 },
    };
  }
}
