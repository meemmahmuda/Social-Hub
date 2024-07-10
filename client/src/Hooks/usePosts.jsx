import { useQuery } from "@tanstack/react-query";

import { useAxiosPublic } from "./useAxiosPublic";

export const usePosts = () => {
  const axiosPublic = useAxiosPublic();
  const { data, refetch, isPending } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const result = await axiosPublic.get("/post");
      return result.data;
    },
  });
  return { data, refetch, isPending };
};
