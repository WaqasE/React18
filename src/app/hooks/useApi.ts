// hooks/useApi.ts
import useSWR, { mutate } from "swr";
import { fetcher, poster, patcher } from "../utils/"; // Adjust the path accordingly

export const useApi = (url: string) => {
  const { data, error, isValidating } = useSWR(url, fetcher);

  const postData = async (data: any) => {
    await poster(url, data);
    mutate(url); // Revalidate the SWR cache for this URL
  };

  const updateData = async (data: any) => {
    await patcher(url, data);
    mutate(url); // Revalidate the SWR cache for this URL
  };

  return {
    data,
    error,
    isValidating,
    postData,
    updateData,
  };
};
