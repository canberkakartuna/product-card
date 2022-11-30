import { useAxiosInstance } from "@/hooks";
import ENDPOINTS from "@/constants/endpoints";
import { useQuery } from "@tanstack/react-query";

const GetItem = async (id) => {
  const axios = useAxiosInstance();

  const url = ENDPOINTS.item.get(id);
  const result = await axios.get(url);
  return result?.data;
};

const useGetItem = (itemId) => {
  const { data, isLoading } = useQuery(
    ["item", itemId],
    () => GetItem(itemId),
    {
      enabled: !!itemId,
    }
  );

  return {
    data,
    isLoading,
  };
};

export default useGetItem;
