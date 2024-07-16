import React from "react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import Input from "../../../components/common/Input";
import TextArea from "../../../components/common/TextArea";
import Label from "../../../components/common/Label";

const ProductInfo = () => {
  return (
    <div className="border-2 bg-white border-gray-300 shadow-md rounded-md p-1 sm:p-5 w-full lg:max-w-[40%]">
      <HeadingTypo className="text-xl font-semibold my-2">
        Product information
      </HeadingTypo>
      <div className="flex flex-col gap-y-3 border-2 border-gray-300 p-3 rounded-md">
        <Label className="opacity-75">Input Your Product's Name</Label>
        <Input
          className="h-[50px]"
          placeholder="enter your product name"
          type="text"
        />
        <Label className="opacity-75">Input Your Product's Description</Label>
        <TextArea className="rounded-md" />
        <Label className="opacity-75">Input Your Product's Brand</Label>
        <Input
          className="h-[50px]"
          placeholder="enter your product brand"
          type="text"
        />
      </div>
    </div>
  );
};

export default ProductInfo;
