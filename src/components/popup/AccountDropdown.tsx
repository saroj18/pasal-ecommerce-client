import React from "react";
import ParaTypo from "../common/ParaTypo";
import { twMerge } from "tailwind-merge";
import {
    Cross,
  CrossIcon,
  Delete,
  LogOut,
  ShoppingBag,
  Star,
  StarIcon,
  User,
} from "lucide-react";

type dropdownProps = {
  className: string;
};

const AccountDropdown = ({ className }: dropdownProps) => {
  return (
    <div
    onClick={(e)=>e.stopPropagation()}
      className={twMerge(
        "border-2 border-gray-500 rounded-md w-[250px] bg-white",
        className
      )}
    >
      <div className="flex items-center gap-4 p-2 hover:bg-neutral-100 cursor-pointer">
        <User opacity={0.6}/>
        <ParaTypo className="">Manage My Account</ParaTypo>
      </div>
      <div className="flex items-center gap-4 p-2 hover:bg-neutral-100 cursor-pointer">
        <ShoppingBag opacity={0.6}/>
        <ParaTypo className="">My Order</ParaTypo>
      </div>
      <div className="flex items-center gap-4 p-2 hover:bg-neutral-100 cursor-pointer">
        <Delete opacity={0.6}/>
        <ParaTypo className="">My Cancellation</ParaTypo>
      </div>
      <div className="flex items-center gap-4 p-2 hover:bg-neutral-100 cursor-pointer">
        <StarIcon opacity={0.6}/>
        <ParaTypo className="">My Reviews</ParaTypo>
      </div>
      <div className="flex items-center gap-4 p-2 hover:bg-neutral-100 cursor-pointer">
        <LogOut opacity={0.6}/>
        <ParaTypo className="">Log Out</ParaTypo>
      </div>
    </div>
  );
};

export default AccountDropdown;
