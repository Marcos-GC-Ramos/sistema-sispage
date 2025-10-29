export interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  created_at: string;
  updated_at: string;
}

export interface Option {
  value: string;
  label: string;
}

export interface Solicitacao {
  status_superior: string;
  status_suporte: string;
}

export interface Dashboard {
  id: number;
  categoria_id: number;
  nome: string;
  url?: string;
  descricao: string;
  image_url: string;
  path: string;
  created_at: string;
  updated_at: string;
  categoria: Categoria;
  solicitacao: Solicitacao[];
}

export interface DashboardResponse {
  com_permissao: Dashboard[];
  sem_permissao: Dashboard[];
}
