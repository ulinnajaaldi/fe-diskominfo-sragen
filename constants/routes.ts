import { LuLayoutDashboard } from "react-icons/lu";
import { GrArticle } from "react-icons/gr";
import { FaImages } from "react-icons/fa";
import { MdOutlineVideoCameraBack } from "react-icons/md";

import type { SidebarItems } from "@/components/layouts/dashboard-sidebar-menu";

export const ROUTES_PATH = {
  home: "/",
  login: "/auth/login",
  profil: "/profil",
  progam: "/diskominfo-progam",
  berita: "/berita",
  kontak: "/kontak",
  dashboard: "/dashboard",
  article: "/article",
  galeriVideo: "/galeri-video",
  galeriImage: "/galeri-image",
  dashboardChild: {
    berita: "/dashboard/berita",
    galeriVideo: "/dashboard/galeri-video",
    galeriImage: "/dashboard/galeri-image",
  },
};

export const SIDEBAR_ITEMS: SidebarItems[] = [
  {
    title: "Dashboard",
    icon: LuLayoutDashboard,
    href: ROUTES_PATH.dashboard,
  },
  {
    title: "Berita",
    icon: GrArticle,
    href: ROUTES_PATH.dashboardChild.berita,
  },
  {
    title: "Galeri Foto",
    icon: FaImages,
    href: ROUTES_PATH.dashboardChild.galeriImage,
  },
  {
    title: "Galeri Video",
    icon: MdOutlineVideoCameraBack,
    href: ROUTES_PATH.dashboardChild.galeriVideo,
  },
];
