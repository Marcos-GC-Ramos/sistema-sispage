import { useState, useEffect } from "react";
import { DashboardResponse, Option} from "@/types/Dashboard";
import { getUserDashboard, getCategoriasSelect } from "@/api/services/InicioService";

export function InicioHooks(initialSearch = "") {
  const [dashboards, setDashboards] = useState<DashboardResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>(initialSearch);
  const [categorias, setCategorias] = useState<Option[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("");

  const fetchDashboards = async (filter?: string, categoriaId?: string) => {
    setLoading(true);

    const categoriaParam = categoriaId && categoriaId !== "" ? Number(categoriaId) : undefined;
    const data = await getUserDashboard(filter, categoriaParam);

    setDashboards(data);

    // Espera 500ms para mostrar o dashboards apos a requisição
    setTimeout(() => {
      setLoading(false);
    }, 600);
  };

  const fetchCategorias = async () => {
    const options = await getCategoriasSelect();
    setCategorias(options);
  };

  // quando carregar a pagina dispara requisição para obter os dados
  useEffect(() => {
    fetchDashboards();
    fetchCategorias();
  }, []);

  // Debounce: dispara requisição 500ms após parar de digitar
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchDashboards(search, categoriaSelecionada);
    }, 500);

    return () => clearTimeout(delay);
  }, [search, categoriaSelecionada]);

  return { categorias, dashboards, fetchDashboards, loading, search, setSearch, categoriaSelecionada, setCategoriaSelecionada };
}
