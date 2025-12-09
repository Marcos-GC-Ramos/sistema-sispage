const apiRoutes = {
  auth: {
    login: "/api/login",
    logout: "/api/logout",
    user: "/api/auth-user",
  },
  inicio: {
    index: "/api/inicio",
    show: (id: number) => `/api/user-dashboard/${id}`,
  },
  usuarios: {
    index: "/api/users",       
    show: (id: number) => `/api/users/${id}`, 
    create: "/api/create-user",     
    update: (id: number) => `/api/update-user/${id}`, 
    delete: (id: number) => `/api/delete-user/${id}`,
  },
  dashboards: {
    index: "/api/dashboards",
  },
  permissao: {
    index: "/api/solicitacoes",
    getAuthSolicitacoes: "/api/auth-solicitacao",
    create: (id: number) => `/api/solicitar-acesso/${id}`,
  },
  categorias: {
    index: "/api/categorias",
    show: "/api/select-categoria",
  },
};

export default apiRoutes;