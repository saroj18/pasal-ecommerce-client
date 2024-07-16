import { Star } from "lucide-react";
import React from "react";
import Button from "./common/Button";
import computer from "../../public/computer.png";

type cardProps = {
  hideBtn?: string;
  icon?: React.ReactNode;
};

const ProductCard = ({ hideBtn = "Add to cart", icon }: cardProps) => {
  return (
    <div className="shadow-md">
      <div className="bg-gray-100 overflow-hidden cursor-pointer cart relative">
        <img src={computer} alt="" />
        <Button className="w-full bg-black text-white py-3 relative top-14 position">
          {hideBtn}
        </Button>
        <span className="absolute top-1 left-[86%]">{icon}</span>
      </div>
      <div className="p-3">
        <p className="font-semibold text-sm sm:text-xl">
          IPS LCD Gaming Monitor
        </p>
        <div className="flex items-center gap-4 my-1">
          <p className="font-bold">$370</p>
          <p className="line-through opacity-[0.5]">$400</p>
        </div>
        <div className="flex items-center">
          <section className="flex items-center">
            <Star size={17} color="orange" fill="orange" />
            <Star size={17} color="orange" fill="orange" />
            <Star size={17} color="orange" fill="orange" />
            <Star size={17} color="orange" fill="orange" />
            <Star size={17} color="orange" fill="orange" />
          </section>
          <p>(44)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
