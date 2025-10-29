"use client";

import { useState, useEffect } from "react";
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

  const fetchCategorias = async (
    page = 1,
    per_page = perPage,
    searchTerm = search
  ) => {
    setLoading(true);

    const response: CategoriasResponse = await getCategorias({
      page,
      per_page,
      search: searchTerm,
    });

    setCategorias(response.data);
    setPagination(response.pagination);

    // Espera 500ms para mostrar o dashboards apos a requisição
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  // inicial: carrega sem filtro
  useEffect(() => {
    fetchCategorias();
  }, []);

  // quando mudar perPage, recarrega
  useEffect(() => {
    fetchCategorias(1, perPage, search);
  }, [perPage]);

  // debounce para search
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchCategorias(1, perPage, search);
    }, 600); // 500ms de espera após parar de digitar

    return () => clearTimeout(delay);
  }, [search, perPage]);

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
