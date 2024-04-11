import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface GaleriProps {
  value: string;
  page: number;
  limit: number;
}

export const useGetGaleriFoto = (props: GaleriProps) => {
  const { value, page, limit } = props;

  return useQuery({
    queryKey: ["galeri-foto", value, page, limit],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/api/galeri-image", {
        params: {
          search: value,
          page,
          limit,
        },
      });
      return response.data;
    },
  });
};

export const useGetGaleriVideo = (props: GaleriProps) => {
  const { value, page, limit } = props;

  return useQuery({
    queryKey: ["galeri-video", value, page, limit],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/api/galeri-video", {
        params: {
          search: value,
          page,
          limit,
        },
      });
      return response.data;
    },
  });
};

export const useGetGaleriVideoId = (id: string) => {
  return useQuery({
    queryKey: ["galeri-video", id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/v1/api/galeri-video/${id}`);
      return response.data;
    },
  });
};
