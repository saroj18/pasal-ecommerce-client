import React from "react";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import Label from "../../../../components/common/Label";
import Input from "../../../../components/common/Input";
import Select from "../../../../components/common/Select";
import Option from "../../../../components/common/Option";
import Button from "../../../../components/common/Button";
import { Link, useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate=useNavigate()
  return (
    <div className="w-full max-w-[800px] shadow-md rounded-md p-2 m-2">
      <HeadingTypo className="text-3xl my-3">Edit Profile</HeadingTypo>
      <form className="grid grid-cols-2 gap-4">
          <div>
            <Label className="flex flex-col">Full Name</Label>
            <Input className="w-full h-[50px]" placeholder="enter your full name" type="text" />
          </div>
          <div>
            <Label className="flex flex-col">Email Address</Label>
            <Input className="w-full h-[50px]" placeholder="enter your email address" type="text" />
          </div>
          <div>
            <Label className="flex flex-col">Mobile</Label>
            <Input className="w-full h-[50px]" placeholder="enter your email address" type="text" />
          </div>
          <div>
            <Label className="flex flex-col">DOB</Label>
            <Input className="w-full h-[50px]" placeholder="enter your email address" type="text" />
          </div>
          <div>
            <Label className="flex flex-col">Gender</Label>
            <Select className="w-full h-[50px]">
                <Option defaultChecked value="">Select Gender</Option>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
            </Select>
          </div>
          <div>
            <Label className="flex flex-col">Current Password</Label>
            <Input className="w-full h-[50px]" placeholder="enter your current password" type="password" />
          </div>
          <div>
            <Label className="flex flex-col">New Password</Label>
            <Input className="w-full h-[50px]" placeholder="enter your new password" type="password" />
          </div>
          <div>
            <Label className="flex flex-col">Confirm Password</Label>
            <Input className="w-full h-[50px]" placeholder="enter your confirm password" type="password" />
          </div>
      </form>
      <div className="my-7 flex flex-col gap-2 justify-center sm:items-start">
        <Button className="border-2 bg-blue-500 rounded-md text-white px-3 py-2">Save Changes</Button>
       <Button onClick={()=>navigate('/account/myprofile')} className="border-2 bg-red-500 rounded-md text-white px-3 py-2 mx-3">Cancel</Button>
      </div>
    </div>
  );
};

export default EditProfile;
