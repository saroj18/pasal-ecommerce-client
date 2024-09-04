import HeadingTypo from "../../../components/common/HeadingTypo";
import ParaTypo from "../../../components/common/ParaTypo";
import Select from "../../../components/common/Select";
import Option from "../../../components/common/Option";
import Button from "../../../components/common/Button";
import React from "react";
import { twMerge } from "tailwind-merge";

type FilterBarProps = {
  time?: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
};

const FilterBar = ({ setTime, className }: FilterBarProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTime(e.target.value);
  };
  return (
    <div
      className={twMerge(
        "flex flex-col md:flex-row justify-between p-2 gap-y-3 ",
        className,
      )}
    >
      <div>
        <HeadingTypo className="md:text-2xl text-lg w-full">
          Welcome Back, Saroj
        </HeadingTypo>
        <ParaTypo className="sm:text-[15px] text-gray-400 text-xs">
          Here's what happening with your store today
        </ParaTypo>
      </div>
      <div className="flex items-center gap-x-4">
        <Select onChange={changeHandler}>
          <Option defaultChecked value="24hrs">
            Last 24 Hrs.
          </Option>
          <Option value="7days">Last 7 Days</Option>
          <Option value="1month">Last 1 Month</Option>
          <Option value="6months">Last 6 Months</Option>
          <Option value="1year">Last 1 Year</Option>
        </Select>
        <Button
          onClick={() => setTime("1year")}
          className="bg-black text-white px-3 py-2 rounded-md text-sm sm:text-xl"
        >
          View LifeTime
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
