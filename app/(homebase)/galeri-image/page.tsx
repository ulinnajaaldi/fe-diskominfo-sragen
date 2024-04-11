import React from "react";
import { Metadata } from "next";

import GaleriImageFeature from "@/features/Base/GaleriImage";

export const metadata: Metadata = {
  title: "Galeri Image",
};

const GaleriImage = () => {
  return <GaleriImageFeature />;
};

export default GaleriImage;
