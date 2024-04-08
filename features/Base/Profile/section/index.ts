import dynamic from "next/dynamic";

export const ProfilePejabatStukturalFeature = dynamic(
  () => import("./ProfilePejabatStruktural"),
);
export const Tentang = dynamic(() => import("./Tentang"));
export const TugasFungsi = dynamic(() => import("./TugasFungsi"));
export const VisiMisi = dynamic(() => import("./VisiMisi"));
