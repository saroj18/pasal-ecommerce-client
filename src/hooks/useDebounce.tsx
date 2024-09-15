import  { useEffect, useState } from "react";

const useDebounce = <T,>(state: T, delay = 500) => {
  const [debounce, setDebounce] = useState(state);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounce(state);
    }, delay);

    return () => clearTimeout(id);
  },[state,delay]);

  return debounce;
};

export default useDebounce;
