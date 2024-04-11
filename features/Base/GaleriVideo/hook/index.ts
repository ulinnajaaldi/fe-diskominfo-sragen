"use client";

import { useState } from "react";
import { useDebounce } from "use-debounce";

import { useGetGaleriVideo } from "@/useCase/GaleriUseCase";

export const useGaleriVideo = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null as any);
  const [page, setPage] = useState<number>(1);
  const [limit, _] = useState<number>(18);
  const [search, setSearch] = useState<string>("");
  const [value] = useDebounce(search, 500);

  const { data, isLoading } = useGetGaleriVideo({ value, page, limit });

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleDetailPage = (item: any) => {
    setSelectedData(item);
    setIsDialogOpen(true);
  };

  return {
    data,
    isLoading,
    search,
    setSearch,
    handleNextPage,
    handlePrevPage,
    handleDetailPage,
    isDialogOpen,
    setIsDialogOpen,
    selectedData,
  };
};
