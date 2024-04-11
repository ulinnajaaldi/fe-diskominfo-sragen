"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDebounce } from "use-debounce";

import { axiosInstanceToken } from "@/lib/axios";
import { toast } from "@/components/ui/use-toast";
import { useGetBerita } from "@/useCase/BeritaUseCase";

export const useBeritaFeature = () => {
  const router = useRouter();
  const [images, setImages] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isDialogDeleteOpen, setIsDialogDeleteOpen] = useState<boolean>(false);
  const [isUpload, setIsUpload] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [selectedBerita, setSelectedBerita] = useState(null as any);
  const [page, setPage] = useState<number>(1);
  const [limit, _] = useState<number>(12);
  const [search, setSearch] = useState<string>("");
  const [value] = useDebounce(search, 500);

  const { data, isLoading, refetch } = useGetBerita({ value, page, limit });

  const formSchema = z.object({
    title: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    content: z.string().min(2, {
      message: "Content must be at least 2 characters.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "", content: "" },
  });

  const { mutate: mutateAdd, isPending: isPendingAdd } = useMutation({
    mutationFn: async () => {
      const response = await axiosInstanceToken.post("/v1/api/berita", {
        image: images,
        title: form.getValues("title"),
        content: form.getValues("content"),
      });
      return response.data;
    },
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: data.message,
      });
      setIsDialogOpen(false);
      setImages("");
      form.reset();
      refetch();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.response.data.message,
      });
    },
  });

  const { mutate: mutateEdit, isPending: isPendingEdit } = useMutation({
    mutationFn: async () => {
      const response = await axiosInstanceToken.put(
        `/v1/api/berita/${selectedBerita?.id}`,
        {
          image: images,
          title: form.getValues("title"),
          content: form.getValues("content"),
        },
      );
      return response.data;
    },
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: data.message,
      });
      setIsDialogOpen(false);
      refetch();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.response.data.message,
      });
    },
  });

  const { mutate: mutateDelete, isPending: isPendingDelete } = useMutation({
    mutationFn: async () => {
      const response = await axiosInstanceToken.delete(
        `/v1/api/berita/${selectedBerita?.id}`,
      );
      return response.data;
    },
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: data.message,
      });
      setIsDialogDeleteOpen(false);
      refetch();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.response.data.message,
      });
    },
  });

  useEffect(() => {
    if (selectedBerita) {
      form.reset({
        title: selectedBerita.title,
        content: selectedBerita.content,
      });
      setImages(selectedBerita.image);
    } else {
      form.reset({
        title: "",
        content: "",
      });
      setImages("");
    }
  }, [selectedBerita, isEdit, form]);

  const handleDelete = (berita: any) => {
    setSelectedBerita(berita);
    setIsDialogDeleteOpen(true);
  };

  const handleBeritaClick = (berita: any) => {
    setSelectedBerita(berita);
    setIsEdit(true);
    setIsDialogOpen(true);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleImageUpload = () => {
    setIsUpload(true);
  };

  const handleDialogClose = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setSelectedBerita(null);
    setIsEdit(false);
    setIsDialogOpen(true);
  };

  return {
    router,
    isDialogOpen,
    isDialogDeleteOpen,
    isLoading,
    isPendingAdd,
    isPendingEdit,
    isPendingDelete,
    isUpload,
    isEdit,
    setSearch,
    setIsUpload,
    setIsDialogOpen,
    setIsDialogDeleteOpen,
    selectedBerita,
    search,
    data,
    images,
    form,
    handleDelete,
    handleBeritaClick,
    handleNextPage,
    handlePrevPage,
    handleImageUpload,
    handleDialogClose,
    handleDialogOpen,
    setImages,
    mutateAdd,
    mutateEdit,
    mutateDelete,
  };
};
