import React from "react";
import { Metadata } from "next";
import DashboardBeritaFeature from "@/features/Dashboard/Berita";

export const metadata: Metadata = {
  title: "Dashboard Berita",
};

const DashboardBerita = () => {
  return <DashboardBeritaFeature />;
};

export default DashboardBerita;
