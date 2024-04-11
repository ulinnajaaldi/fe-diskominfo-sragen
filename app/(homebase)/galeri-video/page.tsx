import React from "react";
import { Metadata } from "next";

import GaleriVideoFeature from "@/features/Base/GaleriVideo";

export const metadata: Metadata = {
  title: "Galeri Video",
};

const GaleriVideo = () => {
  return <GaleriVideoFeature />;
};

export default GaleriVideo;
