import { Metadata } from "next";

import { DashboardsProvider } from "@/context/DashboardsContext";
import DashboardsContent from "./DashboardContent";

export const metadata: Metadata = {
  title: "SISPAGE - Dashboards",
};

export default function Dashboards() {
  return (
    <DashboardsProvider>
      <DashboardsContent />
    </DashboardsProvider>
  );
}
