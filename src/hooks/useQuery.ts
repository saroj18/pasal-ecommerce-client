import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { addOnCache, getFromCache } from "../utils/cacheHolder";

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
  const [loading, setLoading] = useState<boolean>(true);
  const abortRef = useRef<AbortController | null>(null);

  const fetchData = useCallback(async () => {
    console.log(navigator.onLine);
    if (abortRef.current) {
      abortRef.current?.abort();
    }
    abortRef.current = new AbortController();
    const signal = abortRef.current.signal;
    setError(false);
    setLoading(true);
    try {
      const resp = await fetch(import.meta.env.VITE_HOST + url, {
        method: "GET",
        credentials: "include",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        signal,
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
      if (err.name == "AbortError") {
        console.log("abort");
        return;
      }
      setLoading(false);
      setError(true);
      toast.error("server started soon!!!");
    }
  }, [url]);

  useEffect(() => {
    const dataFromCache = getFromCache(url as string);
    if (cache && dataFromCache) {
      setData(dataFromCache);
      setLoading(false);
    } else {
      fetchData();
    }
  }, [url]);

  return {
    data,
    error,
    loading,
    refetch: fetchData,
  };
};
