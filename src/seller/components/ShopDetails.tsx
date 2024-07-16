import React, { useRef } from "react";
import HeadingTypo from "../../components/common/HeadingTypo";
import Label from "../../components/common/Label";
import Input from "../../components/common/Input";
import Select from "../../components/common/Select";
import Option from "../../components/common/Option";
import Button from "../../components/common/Button";
import shopImage from "../../assets/shopImage.avif";

const ShopDetails = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    fileInputRef?.current?.click();
  };
  return (
    <div>
      <HeadingTypo className="text-2xl text-center mb-4">
        Shop Details
      </HeadingTypo>
      <form className="grid grid-cols-2 gap-x-4 gap-y-2">
        <div className="flex flex-col grow">
          <Label>Shop Name</Label>
          <Input
            type="text"
            className="h-[50px]"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col grow">
          <Label>Shop Owner Name</Label>
          <Input
            type="text"
            className="h-[50px]"
            placeholder="Enter your phone"
          />
        </div>
        <div className="flex flex-col grow">
          <Label>Shop Address</Label>
          <Input
            type="text"
            className="h-[50px]"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col grow">
          <Label>Pick Exact Address</Label>
          <Button className="bg-blue-500 text-white py-2 rounded-md h-[50px]">
            Click Here for exact Location
          </Button>
        </div>
        <div className="flex flex-col grow">
          <Label>Shop Category</Label>
          <Select className="h-[50px]">
            <Option value="" defaultChecked>
              Select Category
            </Option>
            <Option value="clothes">Clothes</Option>
            <Option value="grosery">Grosery</Option>
            <Option value="electronic">Electronic</Option>
            <Option value="handcraft">Handcraft</Option>
            <Option value="other">Other</Option>
          </Select>
        </div>
        <div className="flex flex-col grow ">
          <Label>Shop Image</Label>
          <div
            onClick={clickHandler}
            className="cursor-pointer border-2 border-gray-500 h-[50px] rounded-md flex justify-center items-center"
          >
            <Input ref={fileInputRef} hidden type="file" multiple={false} />
            <p className="opacity-50">Click Here to upload image</p>
          </div>
        </div>
      </form>
      <div className="border-gray-500 rounded-md border-2 my-2 flex justify-center items-center flex-col">
        <p className="text-center text-xl font-bold my-4">
          Preview of Shop Image
        </p>
        <img className="rounded-md max-w-[40%]" src={shopImage} alt="" />
      </div>
    </div>
  );
};

export default ShopDetails;
