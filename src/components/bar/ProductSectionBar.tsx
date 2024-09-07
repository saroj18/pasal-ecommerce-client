import React from "react";
import TypoGraphy from "../common/HeadingTypo";
import Timmer from "../Timmer";
import { MoveLeft, MoveRight } from "lucide-react";
import { useSwiper } from "swiper/react";

type productSectionProps = {
  heading: string;
  option?: boolean;
};

const ProductSectionBar = ({ heading, option = true }: productSectionProps) => {
  const swiper = useSwiper();

  return (
    <div className="my-5">
      <p className="font-semibold text-red-500 text-xl text-center lg:text-left">
        Today's
      </p>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center w-full lg:w-[50%]  justify-between">
          <TypoGraphy className="text-2xl sm:text-3xl lg:text-3xl lg:m-0 text-center w-fit mx-auto  ">
            {heading}
          </TypoGraphy>
          {option && <Timmer />}
        </div>
        <div className=" items-center hidden lg:flex gap-x-3">
          <MoveLeft
            onClick={() => swiper.slideNext()}
            size={35}
            className="border-2 bg-neutral-50 cursor-pointer rounded-full p-1"
          />
          <MoveRight
            size={35}
            className="border-2 bg-neutral-50 cursor-pointer rounded-full p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSectionBar;
