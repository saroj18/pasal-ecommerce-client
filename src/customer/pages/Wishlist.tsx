import React from "react";
import Button from "../../components/common/Button";
import ProductCard from "../../components/ProductCard";
import HeadingTypo from "../../components/common/HeadingTypo";
import { Trash } from "lucide-react";

type barProps = {
  heading: string;
  btnText: string;
};

export const HeaderBar = ({ heading, btnText }: barProps) => {
  return (
    <div className="flex justify-between items-center my-4">
      <HeadingTypo className="text-xl">{heading}</HeadingTypo>
      <Button className="border-2 p-2 px-6 bg-red-500 text-white">
        {btnText}
      </Button>
    </div>
  );
};

const Wishlist = () => {
  return (
    <div>
      <HeaderBar btnText="See All" heading="Wishlist(4)" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 mb-10">
        <ProductCard icon={<Trash strokeWidth={1.5} size={30} className="bg-white rounded-full p-1"/>} />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <hr />
      <HeaderBar btnText="See All" heading="Just for You" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Wishlist;
