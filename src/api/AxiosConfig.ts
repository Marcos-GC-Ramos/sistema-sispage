import axios from 'axios';
import Cookies from 'js-cookie';

// Cria uma instância do Axios
const api = axios.create({
  baseURL: 'http://172.16.15.223',
});

// Interceptor para adicionar o token em todas as requisições
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('accessToken');

    // Verifica se a URL não é '/'
    if (token && config.url !== '/') {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de resposta: trata erros globais (ex: token expirado)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const url = error.config?.url;

    if (url === '/api/login') {
      return Promise.reject(error);
    }

    // Desloga sempre que for erro 401, 403 ou qualquer outro
    if (status && [401, 403, 419].includes(status)) {
      // Sessão inválida
      Cookies.remove("accessToken");
      Cookies.remove("userID");
      Cookies.remove("userName");
      Cookies.remove("userEmail");

      if (typeof window !== "undefined") {
        alert("Sessão expirada. Faça login novamente.");
        window.location.href = "/";
      }
    } else {
      // Para outros erros (404, 500, etc), apenas exibe no console
      console.error("Erro inesperado da API:", error);
    }

    return Promise.reject(error);
  }
);

export default api;