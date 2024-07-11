import React from "react";
import logo from "../../assets/logo.jpg";
import ParaTypo from "../../components/common/ParaTypo";
import Label from "../../components/common/Label";
import Input from "../../components/common/Input";
import ecommerce from "../../../src/assets/ecommerseImage.webp";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

const SellerSignUp = () => {
  const navigate=useNavigate()
  return (
      <div className="h-screen bg-gray-100 px-3">
        <div
        className="flex items-center w-full justify-around md:max-w-[60%] mx-auto border-2 border-gray-300 shadow-md
    "
      >
        <div className=" border-r-2 border-gray-200  w-full lg:max-w-[50%] p-2 ">
          <div className="my-10">
            <img className="w-[25%] mx-auto mix-blend-multiply" src={logo} alt="" />
            <ParaTypo className="text-center">Welcome To</ParaTypo>
            <ParaTypo className="text-center text-4xl text-blue-500 my-2">Seller Account</ParaTypo>
          </div>
          <form action="" className="flex flex-col gap-y-3 ">
            <div className="flex flex-col ">
              <Label className="text-xl">Username</Label>
              <Input
                className="h-[50px] w-full"
                type="text"
                placeholder="enter your username"
              />
            </div>
            <div className="flex flex-col ">
              <Label className="text-xl">Name</Label>
              <Input
                className="h-[50px] w-full"
                type="text"
                placeholder="enter your name"
              />
            </div>
            <div className="flex flex-col ">
              <Label className="text-xl">Password</Label>
              <Input
                className="h-[50px] w-full"
                type="text"
                placeholder="enter your password"
              />
            </div>
            <ParaTypo className="text-right cursor-pointer">
              Forgot Password
            </ParaTypo>
            <Button className="w-full text-white bg-purple-500 py-3 rounded-md text-xl my-5">
              SignUp as a Seller
            </Button>
          </form>
          <ParaTypo onClick={()=>navigate('/sellerlogin')} className="text-center text-blue-500 cursor-pointer my-5">
            Go to Login
          </ParaTypo>
        </div>
      </div>
      </div>
  );
};

export default SellerSignUp;
