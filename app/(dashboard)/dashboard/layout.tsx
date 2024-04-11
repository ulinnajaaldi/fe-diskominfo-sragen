import React from "react";

import DashboardSidebar from "@/components/layouts/dashboard-sidebar";
import DashboardHeader from "@/components/layouts/dashboard-header";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardHeader />
      <div className="flex h-screen overflow-hidden">
        <DashboardSidebar />
        <main className="w-full pt-16">{children}</main>
      </div>
    </>
  );
}
