import { useState } from "react";
import { toast } from "react-toastify";

export const useMutation = () => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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
      const respData = await resp.json();
      console.log(respData);
      if (!respData.success) {
        setError(true)
        toast.error(respData.error);
      }
      setData(respData.data);
      setLoading(false);
      toast.success(respData.message);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      setError(true);
      toast.error(error.message);
    }
  };

  return [mutate, data, error, loading];
};
