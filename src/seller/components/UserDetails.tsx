import React from "react";
import Label from "../../components/common/Label";
import Input from "../../components/common/Input";
import Select from "../../components/common/Select";
import Option from "../../components/common/Option";
import HeadingTypo from "../../components/common/HeadingTypo";

const UserDetails = () => {
  return (
    <form>
      <HeadingTypo className="text-center text-2xl mb-4">
        Enter Your Personal Details
      </HeadingTypo>
      <div className="flex gap-4 justify-center">
        <div className="flex flex-col grow my-2">
          <Label>First Name</Label>
          <Input
            type="text"
            className="h-[50px]"
            placeholder="Enter your first name"
          />
        </div>
        <div className="flex flex-col grow my-2">
          <Label>Last Name</Label>
          <Input
            type="text"
            className="h-[50px]"
            placeholder="Enter your last name"
          />
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <div className="flex flex-col grow my-2">
          <Label>Email</Label>
          <Input
            type="text"
            className="h-[50px]"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col grow my-2">
          <Label>Phone</Label>
          <Input
            type="text"
            className="h-[50px]"
            placeholder="Enter your phone"
          />
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <div className="flex flex-col grow my-2">
          <Label>Address</Label>
          <Input
            type="text"
            className="h-[50px]"
            placeholder="Enter your address"
          />
        </div>
        <div className="flex flex-col grow my-2">
          <Label>Postal Code</Label>
          <Input
            type="text"
            className="h-[50px]"
            placeholder="Enter your postal code"
          />
        </div>
      </div>
      <div className="flex gap-x-4 justify-center items-center">
        <div className="flex flex-col grow my-2">
          <Label>DOB</Label>
          <Input
            type="text"
            className="h-[50px]"
            placeholder="Enter your DOB"
          />
        </div>
        <div className="flex flex-col grow">
          <Label>Gender</Label>
          <Select className="h-[50px]">
            <Option defaultChecked value="">
              Select Gender
            </Option>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </div>
      </div>
    </form>
  );
};

export default UserDetails;
