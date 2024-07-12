import React from "react";
import Label from "../../../components/common/Label";
import HeadingTypo from "../../../components/common/HeadingTypo";
import { twMerge } from "tailwind-merge";

type CardProps = {
  heading: string;
  value: string;
};

const DetailsCard = ({ heading, value, }: CardProps) => {
  return (
    <div className={twMerge("bg-white text-center border-2 border-gray-300 rounded-md shadow-md p-1 flex flex-col  gap-y-3")}>
      <Label className="font-semibold md:text-xl opacity-70">{heading}</Label>
      <HeadingTypo className=" text-base">{value}</HeadingTypo>
    </div>
  );
};

export default DetailsCard;
