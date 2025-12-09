import { useState, useEffect, useCallback } from "react";
import { Solicitacao, Pagination, SolicitacoesResponse } from "@/types/Solicitacoes";
import { getSolicitacoes, getAuthSolicitacoes } from "@/api/services/SolicitacoesService";

// --------------------------------------------
// Hook base (compartilhado entre os dois)
// --------------------------------------------
function useSolicitacoesBase(
  fetchFunction: (params: { page: number; per_page: number; search: string }) => Promise<SolicitacoesResponse>
) {
  const [solicitacoes, setSolicitacoes] = useState<Solicitacao[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    total: 0,
    per_page: 10,
    current_page: 1,
    last_page: 1,
  });

  const [perPage, setPerPage] = useState<number>(10);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchSolicitacoes = useCallback(
    async (page = 1, per_page = perPage, searchTerm = search) => {
      setLoading(true);

      const response: SolicitacoesResponse = await fetchFunction({
        page,
        per_page,
        search: searchTerm,
      });

      setSolicitacoes(response.data);
      setPagination(response.pagination);

      setTimeout(() => setLoading(false), 600);
    },
    [perPage, search, fetchFunction]
  );

  useEffect(() => {
    fetchSolicitacoes(1, perPage, search);
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchSolicitacoes(1, perPage, search);
    }, 600);

    return () => clearTimeout(delay);
  }, [search, perPage]);

  return {
    solicitacoes,
    pagination,
    perPage,
    setPerPage,
    search,
    setSearch,
    loading,
    fetchSolicitacoes,
  };
}

// --------------------------------------------
// Hook padrão (usa getSolicitacoes)
// --------------------------------------------
export function SolicitacoesHooks() {
  return useSolicitacoesBase(getSolicitacoes);
}

// --------------------------------------------
// Hook autenticado (usa getAuthSolicitacoes)
// --------------------------------------------
export function useAuthSolicitacoes() {
  return useSolicitacoesBase(getAuthSolicitacoes);
}
