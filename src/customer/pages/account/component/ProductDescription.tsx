import React from "react";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import ParaTypo from "../../../../components/common/ParaTypo";
import { StarIcon } from "lucide-react";
import { ReviewComponent } from "../page/ReviewHistory";

const ProductDescription = () => {
  return (
    <div>
      <HeadingTypo className="text-2xl font-semibold mb-3 underline">
        Product Description
      </HeadingTypo>
      <ParaTypo className="opacity-75">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure
        perspiciatis accusantium quos ex explicabo sit assumenda dolorum maxime!
        Iste. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
        quia delectus dicta harum repudiandae, est animi. Cumque neque ad
        incidunt.
      </ParaTypo>

      <HeadingTypo className="text-2xl font-semibold my-5 underline">
        Specification
      </HeadingTypo>
      <ul className="list-disc ml-9 text-xl">
        <li>Crystal clear display</li>
        <li>Full Warranty from 1 year</li>
        <li>Buy 1 get 1 free</li>
        <li>Easy to Installation</li>
        <li>Very Expensive</li>
        <li>Fokat ka mall</li>
      </ul>
      <HeadingTypo className="text-2xl font-semibold my-5 underline">
        Rating and Reviews
      </HeadingTypo>
      <div className="flex items-center gap-x-10 w-full max-w-[70%] mb-3">
        <div>
          <ParaTypo className="text-4xl font-semibold">4.5</ParaTypo>
          <div className="flex items-center my-3">
            <StarIcon color="orange" fill="orange" />
            <StarIcon color="orange" fill="orange" />
            <StarIcon color="orange" fill="orange" />
            <StarIcon color="orange" fill="orange" />
            <StarIcon color="orange" fill="orange" />
          </div>
          <ParaTypo>420 Ratings</ParaTypo>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row w-full gap-x-5">
          <div>
            {Array(5)
              .fill(null)
              .map((_, index) => {
                return (
                  <div className="flex items-center gap-x-2">
                    {Array(index + 1)
                      .fill(null)
                      .map((_, index) => {
                        return (
                          <StarIcon fill="orange" color="orange" key={index} />
                        );
                      })}
                  </div>
                );
              })}
          </div>
          <div className=" w-full sm:max-w-[40%]">
            {Array(5)
              .fill(null)
              .map((_, index) => {
                return (
                  <div className="w-full items-center flex gap-3" key={index}>
                    <div className="w-[90%] my-1 h-[10px] border-2 border-orange-500 rounded-md  ">
                      <div className={`w-[${index*10}%] h-[8px] rounded-md bg-orange-500`}></div>
                    </div>
                    <span>123</span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <hr />
      <ReviewComponent/>
      <ReviewComponent/>
      <ReviewComponent/>
      <hr />
    </div>
  );
};

export default ProductDescription;
