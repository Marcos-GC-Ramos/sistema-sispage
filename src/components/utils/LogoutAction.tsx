"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import api from "@/api/AxiosConfig";
import apiRoutes from "@/api/ApiRoutes";

export default function LogoutAction() {

  const router = useRouter();

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
    <a className="w-full rounded-[8px] hover:bg-gray-100 py-1.5 px-3 text-left" onClick={handleLogout}>
      Sair
    </a>
  );
}
