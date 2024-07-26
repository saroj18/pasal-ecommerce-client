import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type ApiResponse<T> = {
  data: T | T[],
  message: string
}

export const useQuery = <T>(url: string): [T | T[] | undefined, boolean, boolean] => {
  const [data, setData] = useState<T | T[]>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setError(false);
      setLoading(true);
      try {
        const resp = await fetch(import.meta.env.VITE_HOST + url, {
          method: "GET",
          credentials: "include"
        });
        const respData: ApiResponse<T> = await resp.json();
        setData(respData.data);
        setLoading(false);
        if (respData.message) {
          toast.success(respData.message);
        }
      } catch (error: any) {
        setLoading(false);
        setError(true);
        toast.error(error.message);
      }
    })();
  }, [url]);

  return [data, error, loading];
};
