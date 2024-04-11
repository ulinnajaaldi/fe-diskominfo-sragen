import React from "react";
import { Metadata } from "next";
import KontakFeature from "@/features/Base/Kontak";

export const metadata: Metadata = {
  title: "Kontak",
};

const KontakPage = () => {
  return <KontakFeature />;
};

export default KontakPage;
