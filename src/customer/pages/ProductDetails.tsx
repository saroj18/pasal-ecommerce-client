import HeadingTypo from "../../components/common/HeadingTypo";
import { BaggageClaim, Heart, MessageCircle, Star, Video } from "lucide-react";
import ParaTypo from "../../components/common/ParaTypo";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import ProductSectionBar from "../../components/bar/ProductSectionBar";
import ProductCard from "../../components/ProductCard";
import { HeaderBar } from "./Wishlist";
import ProductDescription from "./account/component/ProductDescription";

const ProductDetails = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-x-10 mt-8 mb-10 border-b-2 pb-3">
        <div className="border-2 border-gray-500 rounded-md shadow-md">
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
              <span className="rounded-full border-2 h-8 w-8 bg-red-500"></span>
              <span className="rounded-full border-2 h-8 w-8 bg-blue-500"></span>
              <span className="rounded-full border-2 h-8 w-8 bg-green-500"></span>
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
          <div className="flex flex-col gap-y-2 items-start w-full max-w-[50%]">
            <div className="flex gap-x-4">
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
              <div className="border-2 border-gray-500 p-1 rounded-md flex justify-center items-center cursor-pointer">
                <Heart strokeWidth={1.2} />
              </div>
            </div>
            <div className=" gap-2 flex flex-col lg:flex-row ">
              <Button className="bg-red-500  rounded-md text-white py-2 px-4 ">
                Buy Now
              </Button>
              <Button className="bg-red-500 rounded-md text-white py-2 px-4  flex gap-x-2">
                Add to Cart
                <BaggageClaim strokeWidth={1} />
              </Button>
            </div>
          </div>
          {/* <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-3">
            <Button className="bg-green-500 text-white justify-center rounded-md px-3 py-2 flex gap-4">
              Bargaining On Video Call <Video fill="white" color="white" />{" "}
            </Button>
            <Button className="rounded-md py-2 px-3 justify-center bg-blue-500 text-white flex gap-x-2">
              Chat with Shop Owner <MessageCircle />{" "}
            </Button>
          </div> */}
        </div>
      </div>
      <ProductDescription />
      <HeaderBar heading="For You" btnText="See More" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-3">
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
