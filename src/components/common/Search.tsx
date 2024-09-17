import React, { useCallback, useEffect, useRef, useState } from "react";
import Input from "./Input";
import { Search } from "lucide-react";
import { twMerge } from "tailwind-merge";
import SearchSuggetion from "../SearchSuggetion";
import useDebounce from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

type SearchBoxTypeProps = {
  className?: string;
  focus?: boolean;
  setFocus: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchBox = ({ className, focus, setFocus }: SearchBoxTypeProps) => {
  const [search, setSearch] = useState("");
  const debounce = useDebounce(search, 400);
  const [products, setProducts] = useState<any[] | null>(null);
  const [searchHistory, setSearchhistory] = useState<string[]>([]);
  const suggetionRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [highlightProduct, setHighlightProduct] = useState<(null | boolean)[]>(
    Array(6).fill(null),
  );
  const count = useRef(-1);
  const navigate = useNavigate();

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
      let data = [search, ...searchHistory].slice(0, 6);
      localStorage.setItem("productSearchHistory", JSON.stringify(data));
    }
    count.current = -1;
    setHighlightProduct(Array(6).fill(null));
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

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

  const keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      if (count.current <= 4) {
        count.current++;
        setHighlightProduct(() => {
          let data = Array(6).fill(null);
          data[count.current] = true;
          return data;
        });
      } else {
        setHighlightProduct(() => {
          let data = Array(6).fill(null);
          data[0] = true;
          return data;
        });
        count.current = 0;
      }
    }

    if (e.key === "ArrowUp") {
      if (count.current >= 1) {
        count.current--;
        setHighlightProduct(() => {
          let data = Array(6).fill(null);
          data[count.current] = true;
          return data;
        });
      } else {
        setHighlightProduct(() => {
          let data = Array(6).fill(null);
          data[5] = true;
          return data;
        });
        count.current = 5;
      }
    }

    if (e.key === "Enter") {
      if (products) {
        navigate("/details/" + products[count.current]._id);
        setSearch("");
        setFocus(false);
        setProducts(null);
        setSearchhistory([]);
        inputRef.current?.blur();
      } else {
        setSearch(searchHistory[count.current]);
        setProducts(null);
      }
    }
  };

  return (
    <div className={twMerge(className, "relative")}>
      <Input
        onKeyDown={keyHandler}
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
          setProducts={setProducts}
          inputRef={inputRef}
          highlightProduct={highlightProduct}
          setHighlightProduct={setHighlightProduct}
        />
      )}
    </div>
  );
};

export default SearchBox;
