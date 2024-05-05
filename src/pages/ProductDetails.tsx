import React from "react";
import HeadingTypo from "../components/common/HeadingTypo";
import { Heart, Star } from "lucide-react";
import ParaTypo from "../components/common/ParaTypo";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import ProductSectionBar from "../components/bar/ProductSectionBar";
import ProductCard from "../components/ProductCard";
import { HeaderBar } from "./Wishlist";

const ProductDetails = () => {
  return (
    <>
      <div className="flex gap-x-10 mt-8 mb-10 border-b-2 pb-3">
        <div className="border-2 border-red-500">
          <img
            className="w-[80%]"
            src="https://purepng.com/public/uploads/large/purepng.com-refrigeratorrefrigeratorfridgeiceboxrefrigeratoryfreezer-1701528368818jyb9k.png"
            alt=""
          />
        </div>
        <div>
          <HeadingTypo className="text-3xl">LCD Monitor 45 Inch</HeadingTypo>
          <div className="flex items-center my-4">
            <section className="flex items-center">
              <Star size={17} color="orange" fill="orange" />
              <Star size={17} color="orange" fill="orange" />
              <Star size={17} color="orange" fill="orange" />
              <Star size={17} color="orange" fill="orange" />
              <Star size={17} color="orange" fill="orange" />
            </section>
            <p>(44)</p>{" "}
            <span className="text-green-500 ml-2 border-l-2 pl-1">
              In Stock
            </span>
          </div>
          <ParaTypo className="font-bold text-2xl">$122</ParaTypo>
          <ParaTypo className="text-sm border-b-2 pb-4 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            ratione! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aliquam, accusantium! Aperiam, saepe voluptas. Autem, provident.
          </ParaTypo>
          <div className="flex gap-x-3">
            <ParaTypo>Colors:</ParaTypo>
            <div className="flex gap-x-2">
                <ParaTypo className="rounded-full border-2 h-8 w-8 bg-red-500"></ParaTypo>
                <ParaTypo className="rounded-full border-2 h-8 w-8 bg-blue-500"></ParaTypo>
                <ParaTypo className="rounded-full border-2 h-8 w-8 bg-green-500"></ParaTypo>
            </div>
          </div>
          <div className="flex items-center gap-x-4 my-4">
            <ParaTypo>Size:</ParaTypo>
            <div className="flex items-center gap-x-3">
              <ParaTypo className="border-2 hover:bg-red-500 hover:text-white cursor-pointer rounded-md px-2">
                XS
              </ParaTypo>
              <ParaTypo className="border-2 hover:bg-red-500 hover:text-white cursor-pointer rounded-md px-2">
                S
              </ParaTypo>
              <ParaTypo className="border-2 hover:bg-red-500 hover:text-white cursor-pointer rounded-md px-2">
                M
              </ParaTypo>
              <ParaTypo className="border-2 hover:bg-red-500 hover:text-white cursor-pointer rounded-md px-2">
                L
              </ParaTypo>
              <ParaTypo className="border-2 hover:bg-red-500 hover:text-white cursor-pointer rounded-md px-2">
                XL
              </ParaTypo>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center border-gray-500 border-2 h-[40px]">
              <ParaTypo className="px-4 text-4xl cursor-pointer hover:bg-red-500 hover:text-white">
                -
              </ParaTypo>
              <Input
                className="w-[40px] rounded-none h-[40px]"
                readOnly
                type="text"
              />
              <ParaTypo className="px-4 text-4xl cursor-pointer hover:bg-red-500 hover:text-white">
                +
              </ParaTypo>
            </div>
            <Button className="bg-red-500 text-white py-2 px-4 mx-4">
              Buy Now
            </Button>
            <div className="border-2 border-gray-500 p-1 rounded-md cursor-pointer">
              <Heart strokeWidth={1.2} />
            </div>
          </div>
        </div>
      </div>
<HeaderBar heading="For You" btnText="See More"/>
      <div className="flex gap-x-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default ProductDetails;
