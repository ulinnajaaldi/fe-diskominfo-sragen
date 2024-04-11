"use client";

import { useState } from "react";
import { useDebounce } from "use-debounce";

import { useGetGaleriFoto } from "@/useCase/GaleriUseCase";

export const useGaleriImage = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, _] = useState<number>(18);
  const [search, setSearch] = useState<string>("");
  const [value] = useDebounce(search, 500);

  const { data, isLoading } = useGetGaleriFoto({ value, page, limit });

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return {
    data,
    isLoading,
    search,
    setSearch,
    handleNextPage,
    handlePrevPage,
  };
};
