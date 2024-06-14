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
import { Link } from "react-router-dom";

type dropdownProps = {
  className: string;
};

const AccountDropdown = React.forwardRef<HTMLDivElement,dropdownProps>(({ className },ref) => {
  return (
    <div
    ref={ref}
      className={twMerge(
        "border-2 border-gray-500 rounded-md w-[250px] bg-white",
        className
      )}
    >
      <div className="flex items-center gap-4 p-2 hover:bg-neutral-100 cursor-pointer">
        <User opacity={0.6}/>
        <Link to={'/account'}><ParaTypo className="">Manage My Account</ParaTypo></Link>
      </div>
      <div className="flex items-center gap-4 p-2 hover:bg-neutral-100 cursor-pointer">
        <ShoppingBag opacity={0.6}/>
        <Link to={'/myorder'}><ParaTypo className="">My Order</ParaTypo></Link>
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
})

export default AccountDropdown;
