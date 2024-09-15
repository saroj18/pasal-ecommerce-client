import React, { useCallback, useEffect, useRef, useState } from "react";
import Input from "./Input";
import { Search } from "lucide-react";
import { twMerge } from "tailwind-merge";
import SearchSuggetion from "../SearchSuggetion";
import useDebounce from "../../hooks/useDebounce";

type SearchBoxTypeProps = {
  className: string;
  focus: boolean;
  setFocus: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchBox = ({ className, focus, setFocus }: SearchBoxTypeProps) => {
  const [search, setSearch] = useState("");
  const debounce = useDebounce(search, 400);
  const [products, setProducts] = useState<any[] | null>(null);
  const [searchHistory, setSearchhistory] = useState<string[]>([]);
  const suggetionRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusHandler = useCallback(() => {
    setFocus(true);
    const data: string[] = JSON.parse(
      localStorage.getItem("productSearchHistory") as string,
    );
    if (data.length > 0) {
      setSearchhistory(data);
    }
  }, []);

  const blurHandler = () => {
    if (search) {
      let data = [search,...searchHistory].slice(0,6);
      localStorage.setItem("productSearchHistory", JSON.stringify(data));
      // setSearchhistory([]);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        suggetionRef.current &&
        !suggetionRef.current.contains(event.target as Node) && 
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setFocus(false);
        setSearchhistory([]);
        setProducts(null);
        setSearch("");
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    async function searchProduct() {
      const resp = await fetch(
        import.meta.env.VITE_HOST + "/product/search?query=" + search,
        {
          method: "GET",
          credentials: "include",
        },
      );
      const resData = await resp.json();
      setProducts(resData.data);
    }

    if (search) {
      searchProduct();
    }
  }, [debounce]);

  return (
    <div className={twMerge(className, "relative")}>
      <Input
        ref={inputRef}
        onChange={changeHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        className={focus ? "w-full" : "w-[90%]"}
        type="text"
        placeholder="What are you looking for?"
        value={search}
      />
      <Search
        opacity={0.3}
        size={22}
        className={`absolute ${focus ? "left-[92%]" : "left-[80%]"} top-2`}
      />
      {searchHistory.length > 0 && (
        <SearchSuggetion
          ref={suggetionRef}
          search={search}
          searchHistory={searchHistory}
          setSearchhistory={setSearchhistory}
          product={products}
          setFocus={setFocus}
          setSearch={setSearch}
        />
      )}
    </div>
  );
};

export default SearchBox;
