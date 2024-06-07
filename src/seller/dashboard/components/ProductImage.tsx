import React from "react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import ParaTypo from "../../../components/common/ParaTypo";
import Input from "../../../components/common/Input";

const ProductImage = () => {
  return (
    <div className="border-2 border-gray-300 rounded-md p-2 grow">
      <HeadingTypo className="text-2xl  font-semibold">Product Image</HeadingTypo>
      <ParaTypo className="opacity-75 mb-2 text-[15px]">(5 image required)</ParaTypo>
      <div className="flex gap-x-2">
        {Array(5)
          .fill(null)
          .map((_, index) => {
            return (
              <div key={index} className="flex grow justify-center p-2 items-center flex-col gap-y-1 text-blue-500 font-semibold rounded-md cursor-pointer border-2 border-gray-300 ">
                <span>+</span>
                <ParaTypo className="text-[13px] opacity-75">Add Photo</ParaTypo>
                <Input type="file" hidden/>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductImage;
