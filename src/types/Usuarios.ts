export interface Usuario {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface Pagination {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
}

export interface UsuariosResponse {
  data: Usuario[];
  pagination: Pagination;
}
