"use client";

import React, { createContext, useContext } from "react";
import { DashboardsHooks } from "@/hooks/DashboardsHooks";

const DashboardsContext = createContext<ReturnType<typeof DashboardsHooks> | undefined>(undefined);

export function DashboardsProvider({ children }: { children: React.ReactNode }) {
  const hooks = DashboardsHooks();
  return <DashboardsContext.Provider value={hooks}>{children}</DashboardsContext.Provider>;
}

export const useDashboardsContext = () => {
  const context = useContext(DashboardsContext);
  if (!context) throw new Error("useDashboardsContext must be used within DashboardsProvider");
  return context;
};
