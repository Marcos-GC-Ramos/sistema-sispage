'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import api from "../../api/AxiosConfig";
import Button from "@/components/buttons/Button";
import apiRoutes from "@/api/ApiRoutes";
import Image from "next/image";

export default function LoginForm() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [carregando, setCarregando] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setCarregando(true);
      setErrorMsg("");

      try {
        const response = await api.post(apiRoutes.auth.login, {
          email,
          password,
        });

        if (response.status === 200) {
          // Supondo que a API retorne { accessToken: "..." }
          const { access_token  } = response.data;

          // Salva o token em cookies
          Cookies.set("accessToken", access_token, {
            expires: 1, // 1 dia
            secure: false, // ⚠️ use false em dev com http, true só com https
            sameSite: "strict",
          });

          const userResponse = await api.get(apiRoutes.auth.user);

          if (userResponse.status === 200) {
            const { id, name, email } = userResponse.data;

            // Define cada cookie separadamente
            Cookies.set("userID", id, { expires: 1, secure: false, sameSite: "strict" });
            Cookies.set("userName", encodeURIComponent(name), { expires: 1, secure: false, sameSite: "strict" });
            Cookies.set("userEmail", email, { expires: 1, secure: false, sameSite: "strict" });
          }

          // Redireciona para dashboard ou rota protegida
          router.push("/inicio");
        }
      } catch (error: unknown) {
          console.error(error);
          setErrorMsg("Credenciais inválidas. Tente novamente.");
          setCarregando(false);
      }
    };

    return (
        <form onSubmit={handleSubmit} className="font-inter w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[412px] flex flex-col">
            <div className="flex flex-col justify-between flex-wrap items-center gap-5 mb-10 lg:mb-5 lg:flex-row">
              <Image
                src="/img/login/fazer-login.svg"
                alt="Fazer Login"
                width="122" 
                height="22"
                priority
              />
              
              {errorMsg && (
                <span className="bg-red-700 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                  {errorMsg}
                </span>
              )}
            </div>
        
            <div className="relative mb-[35px]">
              <input
                required
                type="email"
                id="input-email"
                name="email"
                value={email}
                autoComplete="user-name"
                onChange={(e) => setEmail(e.target.value)}
                className="block p-3 w-full text-sm text-gray-900 bg-white rounded-[8px] border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="E-mail"
              />
            </div>
        
            <div className="relative mb-[35px]">
              <input
                required
                type="password"
                id="input-senha"
                name="password"
                value={password}
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                className="block p-3 w-full text-sm text-gray-900 bg-white rounded-[8px] border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Senha"
              />            
            </div>
        
            <Button type="submit" variant="primary" size="lg" loading={carregando} className="border-[#0C2042]! hover:border-[#081a3a]! bg-[#0C2042]! hover:bg-[#081a3a]!">Entrar</Button>
          </div>
        </form>
    );
}