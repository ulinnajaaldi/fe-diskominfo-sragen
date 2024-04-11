import { useQuery } from "@tanstack/react-query";
import { axiosInstanceToken } from "@/lib/axios";

export const useGetCount = () => {
  return useQuery({
    queryKey: ["count"],
    queryFn: async () => {
      const response = await axiosInstanceToken.get("/v1/api/count");
      return response.data;
    },
  });
};
