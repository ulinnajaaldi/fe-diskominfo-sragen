import React from "react";
import { Metadata } from "next";
import DashboardGaleriVideoFeature from "@/features/Dashboard/GaleriVideo";

export const metadata: Metadata = {
  title: "Dashboard Galeri Video",
};

const DashboardGaleriVideo = () => {
  return <DashboardGaleriVideoFeature />;
};

export default DashboardGaleriVideo;
