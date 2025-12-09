export interface Solicitante {
    id: number;
    name: string;
    email: string;
}

export interface Dashboard{
    id: number;
    categoria_id: number;
    nome: string;
}

export interface Solicitacao {
  id: number;
  superior_email: string;
  status_superior: string;
  status_suporte: string;
  solicitante: Solicitante;
  dashboard: Dashboard;
  created_at: string;
  updated_at: string;
}

export interface Pagination {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
}

export interface SolicitacoesResponse {
  data: Solicitacao[];
  pagination: Pagination;
}
