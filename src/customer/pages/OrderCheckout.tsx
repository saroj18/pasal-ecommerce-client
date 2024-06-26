import React from "react";
import computer from "../../../public/computer.png";
import HeadingTypo from "../../components/common/HeadingTypo";
import ParaTypo from "../../components/common/ParaTypo";
import CheckoutBox from "../../components/CheckoutBox";
import { X } from "lucide-react";

const OrderCheckout = () => {
  return (
    <div className="flex justify-between mt-5 gap-x-6">
      <div className="w-full flex flex-col gap-y-3 border-2 border-gray-400 rounded-md p-4 shadow-md ">
        {Array(6)
          .fill(null)
          .map((_, index) => {
            return (
              <div
                key={index}
                className="border-2 relative border-gray-250 shadow-md items-center justify-around rounded-md flex w-full gap-x-5 p-1 max-w-full "
              >
                <X size={20} className='absolute left-[97%] opacity-80 cursor-pointer top-0'/>
                <img className="h-[100px]" src={computer} alt="" />
                <div>
                  <HeadingTypo className="text-xl">
                    42" Large Monitor
                  </HeadingTypo>
                  <ParaTypo className="text-[16px] opacity-75">Brand:Samsung</ParaTypo>
                </div>
                  <HeadingTypo className="text-xl opacity-75">
                    Qty:3
                  </HeadingTypo>
                  <HeadingTypo className="text-xl">
                    Total: 3000
                  </HeadingTypo>
              </div>
            );
          })}
      </div>
      <CheckoutBox />
    </div>
  );
};

export default OrderCheckout;
