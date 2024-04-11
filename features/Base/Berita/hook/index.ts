"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

import { ROUTES_PATH } from "@/constants/routes";
import { useGetBerita } from "@/useCase/BeritaUseCase";

export const useBerita = () => {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [limit, _] = useState<number>(9);
  const [search, setSearch] = useState<string>("");
  const [value] = useDebounce(search, 500);

  const { data, isLoading } = useGetBerita({ value, page, limit });

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleDetailPage = (id: string) => {
    router.push(`${ROUTES_PATH.berita}/${id}`);
  };

  return {
    data,
    isLoading,
    search,
    setSearch,
    handleNextPage,
    handlePrevPage,
    handleDetailPage,
  };
};
