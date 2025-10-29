"use client";

import React, { createContext, useContext } from "react";
import { InicioHooks } from "@/hooks/InicioHooks";

const InicioContext = createContext<ReturnType<typeof InicioHooks> | undefined>(undefined);

export function InicioProvider({ children }: { children: React.ReactNode }) {
  const hooks = InicioHooks();
  return <InicioContext.Provider value={hooks}>{children}</InicioContext.Provider>;
}

export const useInicioContext = () => {
  const context = useContext(InicioContext);
  if (!context) throw new Error("useInicioContext must be used within InicioProvider");
  return context;
};
