export interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  created_at: string;
  updated_at: string;
}

export interface Pagination {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
}

export interface CategoriasResponse {
  data: Categoria[];
  pagination: Pagination;
}
