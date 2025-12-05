import { useState, useEffect, useCallback } from "react";
import { Dashboard, Pagination, DashboardsResponse } from "@/types/Dashboard";
import { getDashboards } from "@/api/services/DashboardsService";

export function DashboardsHooks() {
  const [dashboards, setDashboards] = useState<Dashboard[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    total: 0,
    per_page: 10,
    current_page: 1,
    last_page: 1,
  });

  const [perPage, setPerPage] = useState<number>(10);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchDashboards = useCallback(
    async (page = 1, per_page = perPage, searchTerm = search) => {
      setLoading(true);

      const response: DashboardsResponse = await getDashboards({
        page,
        per_page,
        search: searchTerm,
      });

      setDashboards(response.data);
      setPagination(response.pagination);

      setTimeout(() => {
        setLoading(false);
      }, 600);
    },
    [perPage, search]
  );

  // Primeiro carregamento
  useEffect(() => {
    fetchDashboards(1, perPage, search);
  }, []);

  // Debounce search + perPage
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchDashboards(1, perPage, search);
    }, 600);

    return () => clearTimeout(delay);
  }, [search, perPage]);


  return {
    dashboards,
    pagination,
    perPage,
    setPerPage,
    search,
    setSearch,
    loading,
    fetchDashboards,
  };
}
