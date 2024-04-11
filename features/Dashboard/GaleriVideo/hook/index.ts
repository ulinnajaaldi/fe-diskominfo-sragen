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
import { useGetGaleriVideo } from "@/useCase/GaleriUseCase";

export const useGaleriVideoFeature = () => {
  const router = useRouter();
  const [images, setImages] = useState("");
  const [videos, setVideos] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isDialogDeleteOpen, setIsDialogDeleteOpen] = useState<boolean>(false);
  const [isUpload, setIsUpload] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [selectedGaleri, setSelectedGaleri] = useState(null as any);
  const [page, setPage] = useState<number>(1);
  const [limit, _] = useState<number>(20);
  const [search, setSearch] = useState<string>("");
  const [value] = useDebounce(search, 500);

  const { data, isLoading, refetch } = useGetGaleriVideo({
    value,
    page,
    limit,
  });

  const formSchema = z.object({
    title: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    description: z.string().min(2, {
      message: "Description must be at least 2 characters.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "", description: "" },
  });

  const { mutate: mutateAdd, isPending: isPendingAdd } = useMutation({
    mutationFn: async () => {
      const response = await axiosInstanceToken.post("/v1/api/galeri-video", {
        thumbnail: images,
        title: form.getValues("title"),
        video: videos,
        description: form.getValues("description"),
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
      setVideos("");
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
        `/v1/api/galeri-video/${selectedGaleri?.id}`,
        {
          thumbnail: images,
          title: form.getValues("title"),
          video: videos,
          description: form.getValues("description"),
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
        `/v1/api/galeri-video/${selectedGaleri?.id}`,
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
    if (selectedGaleri) {
      form.reset({
        title: selectedGaleri.title,
        description: selectedGaleri.description,
      });
      setImages(selectedGaleri.thumbnail);
      setVideos(selectedGaleri.video);
    } else {
      form.reset({
        title: "",
        description: "",
      });
      setImages("");
      setVideos("");
    }
  }, [selectedGaleri, isEdit, form]);

  const handleDelete = (item: any) => {
    setSelectedGaleri(item);
    setIsDialogDeleteOpen(true);
  };

  const handleGaleriClick = (item: any) => {
    setSelectedGaleri(item);
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
    setSelectedGaleri(null);
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
    selectedGaleri,
    search,
    data,
    images,
    videos,
    form,
    handleDelete,
    handleGaleriClick,
    handleNextPage,
    handlePrevPage,
    handleImageUpload,
    handleDialogClose,
    handleDialogOpen,
    setImages,
    setVideos,
    mutateAdd,
    mutateEdit,
    mutateDelete,
  };
};
