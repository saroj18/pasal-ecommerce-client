import HeadingTypo from "../../components/common/HeadingTypo";
import { BaggageClaim, Heart, MessageCircle, Star, Video } from "lucide-react";
import ParaTypo from "../../components/common/ParaTypo";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import ProductCard from "../../components/ProductCard";
import { HeaderBar } from "./Wishlist";
import ProductDescription from "./account/component/ProductDescription";
import { useParams } from "react-router-dom";
import { useQuery } from "../../utils/useQuery";
import { useMutation } from "../../utils/useMutation";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const {mutate} = useMutation();
  const [count, setCount] = useState(1);

  const {data} = useQuery<any>(`/product/${id}`);

  const addToCartHandler = (id: string) => {
    mutate(`/product/cart`, "POST", { productId: id,count });
  };

  const addOnWishList=(id:string)=>{
    mutate('/product/wishlist','POST',{productId:id})
  }

  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className="flex flex-col md:flex-row gap-x-10 mt-8 mb-10 border-b-2 pb-3">
        <div className="border-2 border-gray-500 rounded-md shadow-md md:min-w-[35%] p-3 flex items-center justify-center">
          <img src={data?.images?.[0]} alt="" />
        </div>
        <div>
          <HeadingTypo className="text-3xl">{data?.name}</HeadingTypo>
          <ParaTypo>From {}</ParaTypo>
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
          <ParaTypo className="font-bold text-2xl">${data?.price}</ParaTypo>
          <ParaTypo className="text-sm border-b-2 pb-4 my-4">
            {data?.description.slice(0,200)}...
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
                <ParaTypo onClick={decreaseCount} className="px-4 text-4xl cursor-pointer select-none hover:bg-red-500 hover:text-white">
                  -
                </ParaTypo>
                <Input
                  className="w-[40px] rounded-none h-[40px] text-center font-bold"
                  readOnly
                  type="text"
                  value={count}
                />
                <ParaTypo onClick={increaseCount} className="px-4 text-4xl cursor-pointer select-none hover:bg-red-500 hover:text-white">
                  +
                </ParaTypo>
              </div>
              <div className="border-2 border-gray-500 p-1 rounded-md flex justify-center items-center cursor-pointer">
                <Heart onClick={()=>addOnWishList(data?._id)} strokeWidth={1.2} />
              </div>
            </div>
            <div className=" gap-2 flex flex-col lg:flex-row ">
              <Button className="bg-red-500  rounded-md text-white py-2 px-4 ">
                Buy Now
              </Button>
              <Button
                onClick={() => addToCartHandler(data._id)}
                className="bg-red-500 rounded-md text-white py-2 px-4  flex gap-x-2"
              >
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
      <ProductDescription
        description={data?.description}
        features={data?.features}
      />
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
