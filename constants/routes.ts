import type { SidebarItems } from "@/components/layouts/dashboard-sidebar-menu";
import { LuLayoutDashboard } from "react-icons/lu";
import { GrArticle } from "react-icons/gr";

export const ROUTES_PATH = {
  home: "/",
  login: "/auth/login",
  profil: "/profil",
  progam: "/diskominfo-progam",
  berita: "/berita",
  galeriImage: "/galeri/image",
  galeriVideo: "/galeri/video",
  kontak: "/kontak",
  dashboard: "/dashboard",
  article: "/article",
};

export const SIDEBAR_ITEMS: SidebarItems[] = [
  {
    title: "Dashboard",
    icon: LuLayoutDashboard,
    href: ROUTES_PATH.dashboard,
  },
  {
    title: "Article",
    icon: GrArticle,
    href: ROUTES_PATH.article,
  },
];
