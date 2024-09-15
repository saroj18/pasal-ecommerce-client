import React from "react";
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
}

const SearchSuggetion = React.forwardRef<HTMLDivElement, SearchSuggetionProps>(
  (
    {
      product,
      searchHistory,
      search,
      setSearchhistory,
      setFocus,
      setSearch,
      ...props
    },
    ref,
  ) => {
    const navigate = useNavigate();
    const clickHandler = (id: string) => {
      navigate("/details/" + id);
      setSearch("");
      setFocus(false);
      setSearchhistory([]);
    };

    if (!search) {
      return (
        <div
          ref={ref}
          id="suggetionCard"
          className="border-2 border-gray-500 shadow-md absolute top-10 left-0 w-full bg-white p-1 rounded-md"
          {...props}
        >
          {searchHistory?.map((ele, index) => {
            return (
              <div
                key={index}
                onClick={() => setSearch(ele)}
                className="flex items-center gap-x-2 cursor-pointer  hover:bg-gray-100 p-2"
              >
                <RotateCcw opacity={0.5} />
                <ParaTypo key={index}>{ele}</ParaTypo>
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className="border-2 border-gray-500 shadow-md absolute top-10 left-0 w-full bg-white p-1 rounded-md"
      >
        {product && product?.length == 0 ? (
          <ParaTypo className="text-center p-2">Product not found</ParaTypo>
        ) : !product ? (
          <ParaTypo className="text-center p-2">Loading...........</ParaTypo>
        ) : (
          product?.map((ele: any) => {
            return (
              <div
                onClick={() => clickHandler(ele._id)}
                className="flex items-center gap-x-3 my-1 border-gray-200 border-2 p-1 cursor-pointer"
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
