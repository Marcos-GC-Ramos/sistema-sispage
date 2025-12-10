import { useState, useEffect, useCallback } from "react";
import { Usuario, Pagination, UsuariosResponse } from "@/types/Usuarios";
import { getUsuarios } from "@/api/services/UsuariosService";

export function UsuariosHooks() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    total: 0,
    per_page: 10,
    current_page: 1,
    last_page: 1,
  });

  const [perPage, setPerPage] = useState<number>(10);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsuarios = useCallback(
    async (page = 1, per_page = perPage, searchTerm = search) => {
      setLoading(true);

      const response: UsuariosResponse = await getUsuarios({
        page,
        per_page,
        search: searchTerm,
      });

      setUsuarios(response.data);
      setPagination(response.pagination);

      setTimeout(() => {
        setLoading(false);
      }, 600);
    },
    [perPage, search]
  );

  // Primeiro carregamento
  useEffect(() => {
    fetchUsuarios(1, perPage, search);
  }, [fetchUsuarios, search, perPage]);

  // Debounce search + perPage
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchUsuarios(1, perPage, search);
    }, 600);

    return () => clearTimeout(delay);
  }, [fetchUsuarios, search, perPage]);


  return {
    usuarios,
    pagination,
    perPage,
    setPerPage,
    search,
    setSearch,
    loading,
    fetchUsuarios,
  };
}
