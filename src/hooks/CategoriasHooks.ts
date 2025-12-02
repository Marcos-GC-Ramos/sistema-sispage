import { useState, useEffect, useCallback } from "react";
import { Categoria, Pagination, CategoriasResponse } from "@/types/Categorias";
import { getCategorias } from "@/api/services/CategoriasService";

export function CategoriasHooks() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    total: 0,
    per_page: 10,
    current_page: 1,
    last_page: 1,
  });
  const [perPage, setPerPage] = useState<number>(10);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCategorias = useCallback(
    async (page = 1, per_page = perPage, searchTerm = search) => {
      setLoading(true);

      const response: CategoriasResponse = await getCategorias({
        page,
        per_page,
        search: searchTerm,
      });

      setCategorias(response.data);
      setPagination(response.pagination);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    },
    [perPage, search] // dependências reais usadas dentro da função
  );

  // inicial
  useEffect(() => {
    fetchCategorias();
  }, [fetchCategorias]);

  // quando mudar perPage
  useEffect(() => {
    fetchCategorias(1, perPage, search);
  }, [perPage, search, fetchCategorias]);

  // debounce para search
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchCategorias(1, perPage, search);
    }, 600);

    return () => clearTimeout(delay);
  }, [search, perPage, fetchCategorias]);

  return {
    categorias,
    pagination,
    perPage,
    setPerPage,
    search,
    setSearch,
    loading,
    fetchCategorias,
  };
}