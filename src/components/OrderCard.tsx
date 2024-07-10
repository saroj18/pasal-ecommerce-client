import React from "react";
import ParaTypo from "./common/ParaTypo";
import HeadingTypo from "./common/HeadingTypo";
import { LocateIcon, MapPin, Truck } from "lucide-react";
import computer from "../../public/computer.png";

const OrderCard = ({
  background,
  label,
}: {
  background: string;
  label: string;
}) => {
  return (
    <div className="w-full text-xs sm:text-xl max-w-[600px] p-2 border-2 border-gray-300 rounded-md shadow-md">
      <div className="flex w-full items-center justify-between">
        <div>
          <ParaTypo className="opacity-75 text-sm">Order ID</ParaTypo>
          <HeadingTypo>#34254353523</HeadingTypo>
        </div>
        <div>
          <ParaTypo
            className={`opacity-75 text-sm border-2 text-white  rounded-full px-2 py-1 bg-${background}-500`}
          >
            {label}
          </ParaTypo>
        </div>
      </div>
      <div className="flex justify-between border-gray-50o p-2 border-2 rounded-full my-2">
        <div className="flex items-center gap-x-2">
          <Truck />
          <span>Kalanki,Kathmandu</span>
        </div>
        <p>--------</p>
        <div className="flex items-center gap-x-2">
          <MapPin />
          <span>Ratnanagar,Chitwan</span>
        </div>
      </div>
      <div className="flex items-center">
        <img className="w-[30%]" src={computer} alt="" />
        <div>
          <HeadingTypo className="text-xl font-semibold">
            45" Monitor With Fun
          </HeadingTypo>
          <ParaTypo className="opacity-80">Rs 40,000</ParaTypo>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
