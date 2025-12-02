"use client";

import React, { createContext, useContext } from "react";
import { CategoriasHooks } from "@/hooks/CategoriasHooks";

const CategoriasContext = createContext<ReturnType<typeof CategoriasHooks> | undefined>(undefined);

export function CategoriasProvider({ children }: { children: React.ReactNode }) {
  const hooks = CategoriasHooks();
  return <CategoriasContext.Provider value={hooks}>{children}</CategoriasContext.Provider>;
}

export const useCategoriasContext = () => {
  const context = useContext(CategoriasContext);
  if (!context) throw new Error("useCategoriasContext must be used within CategoriasProvider");
  return context;
};
