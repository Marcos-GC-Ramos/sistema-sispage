"use client";

import React, { createContext, useContext } from "react";
import { UsuariosHooks } from "@/hooks/UsuariosHooks";

const UsuariosContext = createContext<ReturnType<typeof UsuariosHooks> | undefined>(undefined);

export function UsuariosProvider({ children }: { children: React.ReactNode }) {
  const hooks = UsuariosHooks();
  return <UsuariosContext.Provider value={hooks}>{children}</UsuariosContext.Provider>;
}

export const useUsuariosContext = () => {
  const context = useContext(UsuariosContext);
  if (!context) throw new Error("useUsuariosContext must be used within UsuariosProvider");
  return context;
};
