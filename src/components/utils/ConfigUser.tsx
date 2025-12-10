"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import api from "@/api/AxiosConfig";
import apiRoutes from "@/api/ApiRoutes";

export default function ConfigUser() {

  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleLogout = async () => {
  
    try {
      const response = await api.post(apiRoutes.auth.logout);

      if (response.status === 200) {
        Cookies.remove("accessToken");
        Cookies.remove("userID");
        Cookies.remove("userName");
        Cookies.remove("userEmail");
        router.push("/"); 
      }
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    } finally {
    
    }
  };

  return (
  <p>sair do sistema</p>
  );
}
