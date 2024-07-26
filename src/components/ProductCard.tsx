import { Star } from "lucide-react";
import React from "react";
import Button from "./common/Button";
import computer from "../../public/computer.png";
import ParaTypo from "./common/ParaTypo";
import { Link } from "react-router-dom";

type cardProps = {
  hideBtn?: string;
  icon?: React.ReactNode;
};

const ProductCard = ({ hideBtn = "Add to cart", icon }: cardProps) => {
  return (
    <Link to={'/details'} className="shadow-md">
      <div className="bg-gray-100 overflow-hidden cursor-pointer cart relative">
        <img src={computer} alt="" />
        <Button className="w-full bg-black text-white py-3 relative top-14 position">
          {hideBtn}
        </Button>
        <span className="absolute top-1 left-[86%]">{icon}</span>
      </div>
      <div className="p-3">
        <p className="font-semibold text-sm sm:text-lg ">
          IPS LCD Gaming Monitor
        </p>
        <div className="flex items-center gap-x-3 my-1">
          <p className="font-bold opacity-60">$370</p>
          <p className="line-through opacity-[0.5]">$400</p>
          <ParaTypo className="text-green-500 text-sm font-semibold">10% off</ParaTypo>
        </div>
        <div className="flex items-center gap-x-2">
          <ParaTypo className="bg-green-500 text-white px-2 py-1 rounded-md text-sm flex gap-x-1">4.3 <Star strokeWidth={2} fill="white" size={18}/></ParaTypo>
          <ParaTypo className="opacity-60">(44)</ParaTypo>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
