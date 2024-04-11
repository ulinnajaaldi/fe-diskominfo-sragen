import React from "react";
import { Metadata } from "next";

import BeritaDetailFeature from "@/features/Base/BeritaDetail";

export const metadata: Metadata = {
  title: "Berita",
};

const BeritaDetail = ({ params }: { params: { id: string } }) => {
  return <BeritaDetailFeature params={params} />;
};

export default BeritaDetail;
