import React, { useEffect, useRef } from "react";
import ParaTypo from "./common/ParaTypo";
import { useNavigate } from "react-router-dom";
import { RotateCcw } from "lucide-react";

interface SearchSuggetionProps extends React.AllHTMLAttributes<HTMLDivElement> {
  product: any;
  searchHistory: string[];
  search: string;
  setFocus: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSearchhistory: React.Dispatch<React.SetStateAction<string[]>>;
  setProducts: React.Dispatch<React.SetStateAction<any[] | null>>;
  inputRef: React.RefObject<HTMLInputElement>;
  highlightProduct: (null | boolean)[];
  setHighlightProduct: React.Dispatch<React.SetStateAction<(null | boolean)[]>>;
}

const SearchSuggetion = React.forwardRef<HTMLDivElement, SearchSuggetionProps>(
  ({
    product,
    searchHistory,
    search,
    setSearchhistory,
    setFocus,
    setSearch,
    setProducts,
    inputRef,
    setHighlightProduct,
    highlightProduct,
    ...props
  }) => {
    const navigate = useNavigate();
    const suggetionRef = useRef<HTMLDivElement | null>(null);
    const clickHandler = (id: string) => {
      navigate("/details/" + id);
      setSearch("");
      setFocus(false);
      setSearchhistory([]);
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

    return (
      <div
        ref={suggetionRef}
        className="border-2 border-gray-500 shadow-md absolute top-10 left-0 w-full bg-white p-1 rounded-md"
        {...props}
      >
        {!search ? (
          <div>
            {searchHistory?.map((ele, index) => {
              return (
                <div
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation(), setSearch(ele);
                  }}
                  id="history"
                  className={`flex items-center gap-x-2 cursor-pointer  hover:bg-gray-100 p-2 ${highlightProduct[index] ? "bg-gray-100" : ""}`}
                >
                  <RotateCcw opacity={0.5} />
                  <ParaTypo key={index}>{ele}</ParaTypo>
                </div>
              );
            })}
          </div>
        ) : !product ? (
          <ParaTypo className="text-center p-2">Loading..........</ParaTypo>
        ) : product && product?.length === 0 ? (
          <ParaTypo className="text-center p-2">Product not found</ParaTypo>
        ) : (
          product?.map((ele: any, index: number) => {
            return (
              <div
                onClick={() => clickHandler(ele._id)}
                className={`flex items-center gap-x-3 my-1 border-gray-200 border-2 p-1 cursor-pointer ${highlightProduct[index] ? "bg-gray-100" : ""}`}
                key={ele._id}
              >
                <img
                  className="w-[30px] rounded-md"
                  src={ele?.images[0]}
                  alt=""
                />
                <ParaTypo className="text-sm opacity-70 truncate">
                  {ele?.name}
                </ParaTypo>
              </div>
            );
          })
        )}
      </div>
    );
  },
);

export default SearchSuggetion;
