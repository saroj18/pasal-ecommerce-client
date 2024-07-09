import React from "react";
import Label from "../../../components/common/Label";
import HeadingTypo from "../../../components/common/HeadingTypo";

type CardProps = {
  heading: string;
  value: string;
};

const DetailsCard = ({ heading, value }: CardProps) => {
  return (
    <div className="bg-white text-center border-2 border-gray-300 rounded-md shadow-md p-2 flex flex-col gap-y-3">
      <Label className="font-semibold text-2xl opacity-70">{heading}</Label>
      <HeadingTypo className="text-xl">{value}</HeadingTypo>
    </div>
  );
};

export default DetailsCard;
