import React from "react";
import logo from "../../assets/logo.jpg";
import ParaTypo from "../../components/common/ParaTypo";
import Label from "../../components/common/Label";
import Input from "../../components/common/Input";
import ecommerce from "../../../src/assets/ecommerseImage.webp";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

const SellerLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 h-screen px-4">
      <div
        className="flex items-center w-full justify-around  mx-auto 
    "
      >
        <div className=" rounded-md sm:max-w-[80%] md:max-w-[60%] lg:max-w-[35%]  mx-auto w-full p-2 ">
          <div className="my-10">
            <img
              className="w-[25%] mx-auto mix-blend-multiply"
              src={logo}
              alt=""
            />
            <ParaTypo className="text-center">Welcome To</ParaTypo>
            <ParaTypo className="text-center text-4xl text-blue-500 my-2">
              Seller Account
            </ParaTypo>
          </div>
          <form action="" className="flex flex-col gap-y-3">
            <div className="flex flex-col ">
              <Label className="text-xl">Username</Label>
              <Input
                className="h-[50px] w-full"
                type="text"
                placeholder="enter your username"
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
              Login as a Seller
            </Button>
          </form>
          <ParaTypo
            onClick={() => navigate("/sellersignup")}
            className="text-center text-blue-500 cursor-pointer my-5"
          >
            Go to SignUp
          </ParaTypo>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;
