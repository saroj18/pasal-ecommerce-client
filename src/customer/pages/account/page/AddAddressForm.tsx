import React from "react";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import Label from "../../../../components/common/Label";
import Input from "../../../../components/common/Input";
import Button from "../../../../components/common/Button";
import { MapPinIcon, X } from "lucide-react";
import Select from "../../../../components/common/Select";
import Option from "../../../../components/common/Option";

type formProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddAddressForm = ({ setOpen }: formProps) => {
  return (
    <div className="w-full max-w-[700px] border-gray-500 border-2 rounded-md p-3 mb-3 relative">
      <HeadingTypo className="text-2xl mb-4">Add Address</HeadingTypo>
      <X
        onClick={() => setOpen(false)}
        className="absolute left-[93%] cursor-pointer top-2"
      />
      <form>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-y-4 items-center gap-x-3">
          <div className="flex flex-col">
            <Label>State</Label>
            <Input
              className="h-[50px]"
              placeholder="enter your state"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <Label>District</Label>
            <Input
              className="h-[50px]"
              placeholder="enter your district"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <Label>City</Label>
            <Input
              className="h-[50px]"
              placeholder="enter your city"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <Label>Tole</Label>
            <Input
              className="h-[50px]"
              placeholder="enter your tole"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <Label>Ward No.</Label>
            <Input
              className="h-[50px]"
              placeholder="enter your ward"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <Label>Near By</Label>
            <Input
              className="h-[50px]"
              placeholder="enter near by"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <Label>Set as a default address</Label>
            <Select className="h-[50px]">
              <Option defaultChecked value="">
                Select One
              </Option>
              <Option value="deleveryandbilling">Delevery & Billing</Option>
              <Option value="delevery">Delevery</Option>
              <Option value="billing">Billing</Option>
            </Select>
          </div>
          <div className="flex flex-col">
            <Label>Exact Location</Label>
            <Button className="bg-blue-500 text-white py-3 rounded-md flex items-center px-4 gap-x-2">
              Click here to get exact location <MapPinIcon />
            </Button>
          </div>
        </div>
        <Button className="bg-red-500 text-white py-3 w-full rounded-md my-4">
          Add Location
        </Button>
      </form>
    </div>
  );
};

export default AddAddressForm;
