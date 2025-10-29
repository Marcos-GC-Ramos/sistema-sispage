'use client';

import React, { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import api from "@/api/AxiosConfig";
import apiRoutes from "@/api/ApiRoutes";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const validateToken = async () => {
      const token = Cookies.get('accessToken');

      if (!token) {
        handleInvalidToken();
        return;
      }

      try {
        const response = await api.get(apiRoutes.auth.user);

        if (response.status !== 200) {
          handleInvalidToken();
        }
      } catch (error: unknown) {
        console.error(error);
        handleInvalidToken();
      }
    };

    const handleInvalidToken = () => {
      Cookies.remove('accessToken'); // Remove token do cookie
      router.push('/'); // Redireciona para a página de login
    };

    // Primeira validação inicial
    validateToken();
  }, [router]);

  return children;
};

export default ProtectedRoute;
