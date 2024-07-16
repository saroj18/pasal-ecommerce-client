import React from "react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import ParaTypo from "../../../components/common/ParaTypo";
import Select from "../../../components/common/Select";
import Option from "../../../components/common/Option";
import Button from "../../../components/common/Button";
import { Menu } from "lucide-react";
import { useSeller } from "../../context/SellerContext";

const FilterBar = () => {
  return (
    <div className="flex flex-col justify-between p-2 gap-y-3 ">
      <div>
        <HeadingTypo className="md:text-2xl text-lg w-full">
          Welcome Back, Saroj
        </HeadingTypo>
        <ParaTypo className="sm:text-[15px] text-gray-400 text-xs">
          Here's what happening with your store today
        </ParaTypo>
      </div>
      <div className="flex items-center gap-x-4">
        <Select>
          <Option defaultChecked value="today">
            Today
          </Option>
          <Option value="pastsevendays">Last 7 Days</Option>
          <Option value="pastonemonth">Last 1 Month</Option>
          <Option value="pastsixmonth">Last 6 Months</Option>
          <Option value="pastoneyear">Last 1 Year</Option>
        </Select>
        <Button className="bg-black text-white px-3 py-2 rounded-md text-sm sm:text-xl">
          View LifeTime
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
