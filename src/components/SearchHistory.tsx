import { RotateCcw } from "lucide-react";
import ParaTypo from "./common/ParaTypo";
import React from "react";

type SearchHistoryProps = {
  searchHistory: string[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
};

const SearchHistory = React.forwardRef<HTMLDivElement, SearchHistoryProps>(
  ({ searchHistory, setSearch, search, ...props }, ref) => {
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
  },
);

export default SearchHistory;
