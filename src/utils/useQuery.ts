import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

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

export const useQuery = <T>(url?: string): UseQueryResult<T> => {
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
    fetchData();
  }, []);

  return { data, error, loading, refetch: fetchData };
};
