import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface BeritaProps {
  value: string;
  page: number;
  limit: number;
}

export const useGetBerita = (props: BeritaProps) => {
  const { value, page, limit } = props;

  return useQuery({
    queryKey: ["berita", value, page, limit],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/api/berita", {
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

export const useGetBeritaDetail = (id: string) => {
  return useQuery({
    queryKey: ["berita", id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/v1/api/berita/${id}`);
      return response.data;
    },
  });
};
