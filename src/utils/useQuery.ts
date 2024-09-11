import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addOnCache, getFromCache } from "./cacheHolder";

type ApiResponse<T> = {
  data: T | T[];
  message: string;
};

type UseQueryResult<T> = {
  data: T | T[] | null;
  error: boolean;
  loading: boolean;
  refetch: () => void;
};

export const useQuery = <T>(url?: string, cache = true): UseQueryResult<T> => {
  const [data, setData] = useState<T | T[] | any>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);
    try {
      const resp = await fetch(import.meta.env.VITE_HOST + url, {
        method: "GET",
        credentials: "include",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const respData: ApiResponse<T> = await resp.json();
      setData(respData.data ?? null);
      if (cache) {
        addOnCache(url as string, respData.data);
      }
      setLoading(false);
      if (respData.message) {
        toast.success(respData.message);
      }
    } catch (err: any) {
      setLoading(false);
      setError(true);
      toast.error("server started soon!!!");
    }
  }, []);

  useEffect(() => {
    const dataFromCache = getFromCache(url as string);
    console.log("<<", dataFromCache);
    if (cache && dataFromCache) {
      setData(dataFromCache);
    } else {
      fetchData();
    }
  }, []);

  return {
    data,
    error,
    loading,
    refetch: fetchData,
  };
};
