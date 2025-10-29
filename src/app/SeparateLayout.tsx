"use client";
import LoginPage from "./_login/LoginPage";
import { usePathname } from "next/navigation";
import Layout from "@/components/utils/LayoutInterno";
import ProtectedRoute from "@/components/utils/ProtectedRoute";

export function SeparateLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) return <LoginPage />;

  return (
    <ProtectedRoute>
      <Layout>{children}</Layout>
    </ProtectedRoute>
  );
}