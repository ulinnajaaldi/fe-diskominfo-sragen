import React from "react";
import { Metadata } from "next";

import BeritaFeature from "@/features/Base/Berita";

export const metadata: Metadata = {
  title: "Berita",
};

const Berita = () => {
  return <BeritaFeature />;
};

export default Berita;
