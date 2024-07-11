import React from "react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import Label from "../../../components/common/Label";
import Input from "../../../components/common/Input";
import Select from "../../../components/common/Select";
import Option from "../../../components/common/Option";

const PriceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 border-2 border-gray-300 rounded-md p-3">
      <div className="grow">
        <Label className="text-2xl font-semibold mb-2">Price</Label>
        <div className="flex flex-col">
          <Input className="h-[50px]" placeholder="enter price" type="text" />
        </div>
      </div>
      <div className="grow">
        <Label className="text-2xl font-semibold mb-2">Discount</Label>
        <div className="flex flex-col">
          <Input
            className="h-[50px]"
            placeholder="enter discount(%)"
            type="text"
          />
        </div>
      </div>
      <div className="grow">
        <Label className="text-2xl font-semibold mb-2">Stock</Label>
        <div className="flex flex-col">
          <Input className="h-[50px]" placeholder="enter stock" type="text" />
        </div>
      </div>
      <div className="grow flex flex-col">
          <Label className="text-2xl font-semibold ">Barganing</Label>
          <Select className="h-[50px]">
            <Option defaultChecked value="">
              Select Option
            </Option>
            <Option value="enable">Enable</Option>
            <Option value="disable">Disable</Option>
          </Select>
      </div>
      <div className="grow flex flex-col">
          <Label className="text-2xl font-semibold ">Chating</Label>
          <Select className="h-[50px]">
            <Option defaultChecked value="">
              Select Option
            </Option>
            <Option value="enable">Enable</Option>
            <Option value="disable">Disable</Option>
          </Select>
      </div>
    </div>
  );
};

export default PriceCard;
