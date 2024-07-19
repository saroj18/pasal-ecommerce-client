import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useQuery = (url: string) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setError(false);
      setLoading(true);
      try {
        const resp = await fetch(url);
        const respData = await resp.json();
        setData(respData.data);
        setLoading(false);
        toast.success(respData.message)
      } catch (error:any) {
        setLoading(false)
        setError(true);
        toast.error(error.message)
      }
    })();
  }, []);

  return [data, error, loading];
};
