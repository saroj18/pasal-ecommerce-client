import React from "react";
import computer from "../../../public/computer.png";
import HeadingTypo from "../../components/common/HeadingTypo";
import ParaTypo from "../../components/common/ParaTypo";
import CheckoutBox from "../../components/CheckoutBox";
import { X } from "lucide-react";
import SelectAndViewAddress from "./account/component/SelectAndViewAddress";

const OrderCheckout = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between mt-5 gap-x-6">
      <div className="w-full  flex flex-col gap-y-3 border-2 border-gray-400 max-h-[200px]  md:max-h-[750px] overflow-y-scroll rounded-md p-4 shadow-md ">
        {Array(10)
          .fill(null)
          .map((_, index) => {
            return (
              <div
                key={index}
                className="border-2 relative border-gray-250 shadow-md items-center justify-evenly sm:justify-around rounded-md flex w-full gap-x-2 py-2  max-w-full "
              >
                <X
                  size={17}
                  className="absolute left-[95%] opacity-80 cursor-pointer top-0"
                />
                <img className="h-[30px] sm:h-[100px]" src={computer} alt="" />
                <div>
                  <HeadingTypo className="sm:text-xl text-xs">
                    42" Large Monitor
                  </HeadingTypo>
                  <ParaTypo className="sm:text-xl text-xs opacity-75">
                    Brand:Samsung
                  </ParaTypo>
                </div>
                <HeadingTypo className="sm:text-xl text-xs opacity-75">
                  Qty:3
                </HeadingTypo>
                <HeadingTypo className="sm:text-xl text-xs">
                  Total: 3000
                </HeadingTypo>
              </div>
            );
          })}
      </div>
      <div className="w-full mx-auto sm:max-w-[600px] sticky top-0 left-0 h-fit">
        <SelectAndViewAddress />
        <CheckoutBox />
      </div>
    </div>
  );
};

export default OrderCheckout;
