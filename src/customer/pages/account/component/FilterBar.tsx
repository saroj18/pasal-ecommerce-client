import React from "react";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import { Star, StarIcon, X } from "lucide-react";
import ParaTypo from "../../../../components/common/ParaTypo";
import Input from "../../../../components/common/Input";
import Label from "../../../../components/common/Label";

const FilterBar = () => {
  return (
    <section className="border-gray-300 border-2 h-[100vh] max-h-full sticky top-28 left-0 w-full max-w-[300px] rounded-md shadow-md mr-5 px-4 py-2">
      <div className="flex justify-between relative items-center border-b-2 py-2">
        <HeadingTypo className=" text-xl">Filter</HeadingTypo>
        <X className="absolute cursor-pointer top-1 left-[90%]" />
      </div>
      <ParaTypo className="text-xl font-semibold mt-2">By Brand</ParaTypo>
      <div>
        <div className="flex items-center gap-x-2">
          <Input type="radio" name="brand"/>
        <span>Samsung</span>
        </div>
        <div className="flex items-center gap-x-2">
          <Input type="radio" name="brand"/>
        <span>Apple</span>
        </div>
        <div className="flex items-center gap-x-2">
          <Input type="radio" name="brand"/>
        <span>LG</span>
        </div>
        <div className="flex items-center gap-x-2">
          <Input type="radio" name="brand"/>
        <span>Panasocic</span>
        </div>
      </div>
      <hr />
      <div>
        <ParaTypo className="font-semibold text-xl mt-3">By Price</ParaTypo>
        <div className="flex items-center justify-between mb-2 w-full">
          <div>
            <ParaTypo>Min</ParaTypo>
            <Input className="max-w-[80px]" type="text"/>
          </div>
          <span>----</span>
          <div>
            <ParaTypo>Max</ParaTypo>
            <Input className="max-w-[80px]" type="text"/>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <ParaTypo className="font-semibold text-xl mt-3">By Rating</ParaTypo>
        <div>
        <div className="flex items-center gap-x-2">
          <Input type="radio" name="brand"/>
        <span>1 Star</span>
        </div>
        <div className="flex items-center gap-x-2">
          <Input type="radio" name="brand"/>
        <span>2 Star</span>
        </div>
        <div className="flex items-center gap-x-2">
          <Input type="radio" name="brand"/>
        <span>3 Star</span>
        </div>
        <div className="flex items-center gap-x-2">
          <Input type="radio" name="brand"/>
        <span>4 Star</span>
        </div>
        <div className="flex items-center gap-x-2">
          <Input type="radio" name="brand"/>
        <span>5 Star</span>
        </div>
      </div>
      </div>
      <hr />
      
    </section>
  );
};

export default FilterBar;
