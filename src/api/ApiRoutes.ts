const apiRoutes = {
  auth: {
    login: "/api/login",
    logout: "/api/logout",
    user: "/api/auth-user",
  },
  inicio: {
    index: "/api/paineis",
    show: (id: number) => `/api/user-dashboard/${id}`,
  },
  usuarios: {
    index: "/api/usuarios",       
    show: (id: number) => `/api/usuarios/${id}`, 
    create: "/api/usuarios",     
    update: (id: number) => `/api/usuarios/${id}`, 
    delete: (id: number) => `/api/usuarios/${id}`,
  },
  paineis: {
    index: "/api/paineis",
    show: (id: number) => `/api/paineis/${id}`,
  },
  permissao: {
    create: (id: number) => `/api/solicitar-acesso/${id}`,
  },
  categorias: {
    index: "/api/categorias",
    show: "/api/select-categoria",
  },
};

export default apiRoutes;