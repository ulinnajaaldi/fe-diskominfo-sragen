import React from "react";
import { Metadata } from "next";
import DashboardGaleriImageFeature from "@/features/Dashboard/GaleriImage";

export const metadata: Metadata = {
  title: "Dashboard Galeri Image",
};

const DashboardGaleriImage = () => {
  return <DashboardGaleriImageFeature />;
};

export default DashboardGaleriImage;
