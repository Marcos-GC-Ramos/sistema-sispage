"use client";

import React, { createContext, useContext } from "react";
import { SolicitacoesHooks, useAuthSolicitacoes } from "@/hooks/SolicitacoesHooks";

// --------------------------------------------------
// Contexto Genérico
// --------------------------------------------------
function createSolicitacoesContext<T>(useHook: () => T) {
  const Context = createContext<T | undefined>(undefined);

  const Provider = ({ children }: { children: React.ReactNode }) => {
    const hookValues = useHook();
    return <Context.Provider value={hookValues}>{children}</Context.Provider>;
  };

  const useContextHook = () => {
    const ctx = useContext(Context);
    if (!ctx) throw new Error("Context must be used inside its Provider.");
    return ctx;
  };

  return { Provider, useContextHook };
}

// --------------------------------------------------
// Provider padrão
// --------------------------------------------------
export const {
  Provider: SolicitacoesProvider,
  useContextHook: useSolicitacoesContext,
} = createSolicitacoesContext(SolicitacoesHooks);

// --------------------------------------------------
// Provider autenticado
// --------------------------------------------------
export const {
  Provider: AuthSolicitacoesProvider,
  useContextHook: useAuthSolicitacoesContext,
} = createSolicitacoesContext(useAuthSolicitacoes);
