import { useState } from "react";
import { toast } from "react-toastify";

type ApiResponse<T> = {
  success: boolean;
  data: T;
  message: string;
  error?: string;
};

type UseMutationResult<T> = {
  mutate: (url: string, method: string, bodyData: any) => Promise<void>;
  data: T | undefined;
  error: boolean;
  loading: boolean;
  response: any;
};

export const useMutation = <T>(): UseMutationResult<T> => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<any>();

  const mutate = async (url: string, method: string, bodyData: any) => {
    setError(false);
    setLoading(true);
    try {
      const resp = await fetch(`${import.meta.env.VITE_HOST}${url}`, {
        method,
        credentials: "include",
        body:
          bodyData instanceof FormData ? bodyData : JSON.stringify(bodyData),
        headers:
          bodyData instanceof FormData
            ? {}
            : { "Content-Type": "application/json" },
      });
      console.log(resp);
      const respData: ApiResponse<T> = await resp.json();
      console.log(respData);
      setResponse(respData);
      if (!respData.success) {
        setError(true);
        toast.error(respData.error);
      } else {
        setData(respData.data);
        if (respData.message) {
          toast.success(respData.message);
        }
      }
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      setError(true);
      toast.error(error.message);
    }
  };

  return { mutate, data, response, error, loading };
};
