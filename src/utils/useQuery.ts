import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type ApiResponse<T> = {
  data: T | T[];
  message: string;
};

type UseQueryResult<T> = {
  data: T | T[] | null;
  error: boolean;
  loading: boolean;
};

export const useQuery = <T>(url: string): UseQueryResult<T> => {
  const [data, setData] = useState<T | T[] | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  console.log("outside query");

  const fetchData = async () => {
    console.log("inside query");
    setError(false);
    setLoading(true);
    try {
      const resp = await fetch(import.meta.env.VITE_HOST + url, {
        method: "GET",
        credentials: "include",
      });
      const respData: ApiResponse<T> = await resp.json();
      setData(respData.data);
      setLoading(false);
      if (respData.message) {
        toast.success(respData.message);
      }
    } catch (err: any) {
      setLoading(false);
      setError(true);
      toast.error(err.message || "An error occurred");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading };
};
