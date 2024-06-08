import React from "react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import Label from "../../../components/common/Label";
import Input from "../../../components/common/Input";
import Select from "../../../components/common/Select";
import Option from "../../../components/common/Option";

const PriceCard = () => {
  return (
    <div className="grow flex gap-x-2 border-2 border-gray-300 rounded-md p-3">
      <div className="grow">
        <HeadingTypo className="text-2xl font-semibold mb-2">Price</HeadingTypo>
        <div className="flex flex-col">
          <Input className="h-[50px]" placeholder="enter price" type="text" />
        </div>
      </div>
      <div className="grow">
        <HeadingTypo className="text-2xl font-semibold mb-2">Discount</HeadingTypo>
        <div className="flex flex-col">
          <Input className="h-[50px]" placeholder="enter discount(%)" type="text" />
        </div>
      </div>
      <div className="grow">
        <HeadingTypo className="text-2xl font-semibold mb-2">Stock</HeadingTypo>
        <div className="flex flex-col">
          <Input className="h-[50px]" placeholder="enter stock" type="text" />
        </div>
        
      </div>
    </div>
  );
};

export default PriceCard;
