import HeadingTypo from "../../components/common/HeadingTypo";
import {
  BaggageClaim,
  Heart,
  MessageCircle,
  StarIcon,
  Video,
} from "lucide-react";
import ParaTypo from "../../components/common/ParaTypo";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import ProductCard from "../../components/ProductCard";
import { HeaderBar } from "./Wishlist";
import ProductDescription from "./account/component/ProductDescription";
import { useParams } from "react-router-dom";
import { useQuery } from "../../utils/useQuery";
import { useMutation } from "../../utils/useMutation";
import { useCallback, useEffect, useState } from "react";
import Magnifier from "react-magnifier";
import ChatPopup from "../popup/ChatPopup";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { mutate } = useMutation();
  const [count, setCount] = useState(1);
  const [image, setImage] = useState<string | undefined>(undefined);
  const [open, setOpen] = useState(false);

  let { data, refetch } = useQuery<any>(`/product/${id}`);
  console.log(">>>>", data);

  const addToCartHandler = (id: string) => {
    mutate(`/product/cart`, "POST", { productId: id, count }, refetch);
  };

  const addOnWishList = (id: string) => {
    mutate("/product/wishlist", "POST", { productId: id }, refetch);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    if (!data) return;
    refetch();
  }, [id]);

  const averageRating = useCallback(() => {
    let total = 0;
    data?.review?.forEach((ele: any) => {
      total += ele.reviewStar;
    });
    return total / 5;
  }, [data]);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-x-10 mt-8 mb-10 border-b-2 pb-3">
        <div className="border-2 relative border-gray-500 rounded-md shadow-md w-full max-w-lg p-3 flex-col flex items-center justify-center">
          {/* @ts-ignore */}
          <Magnifier
            mgWidth={300}
            mgHeight={300}
            src={image || data?.images?.[0]}
          />

          <div className="flex w-full justify-center gap-x-4 mt-3 overflow-hidden">
            {data?.images?.map((ele: string, index: number) => {
              return (
                <img
                  onClick={() => setImage(ele)}
                  className="w-[10%] border-2 p-1 cursor-pointer"
                  key={index}
                  src={ele}
                  alt=""
                />
              );
            })}
          </div>
        </div>
        <div>
          <HeadingTypo className="text-3xl">{data?.name}</HeadingTypo>
          <div className="flex items-center gap-x-4">
            <ParaTypo>
              From:
              <span className="text-blue-500">{data?.addedBy.shopName}</span>
            </ParaTypo>
            {data?.offer && (
              <img
                className="h-[30px] place-content-end"
                src="https://png.pngtree.com/png-clipart/20230119/original/pngtree-creative-special-offer-banner-shape-tag-png-image_8922232.png"
                alt=""
              />
            )}
          </div>
          <div className="flex gap-x-2 items-center my-4">
            <section className="flex items-center">
              {Array(5)
                .fill(null)
                .map((_, index) => {
                  return (
                    <StarIcon
                      key={index}
                      color={index < averageRating() ? "orange" : "black"}
                      fill={index < averageRating() ? "orange" : "transparent"}
                    />
                  );
                })}
            </section>
            <p className="text-xl">({data?.starArray?.length})</p>
            <span
              className={`text-green-500 ml-2 border-l-2 pl-1 ${data?.stock != 0 ? "text-green-500 " : "text-red-500"}`}
            >
              {data?.stock != 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>
          <div className="flex items-center gap-x-3">
            <ParaTypo className="font-bold text-2xl">
              Rs {data?.priceAfterDiscount}
            </ParaTypo>
            <ParaTypo className="text-red-500 text-sm">
              Off {data?.discount}%
            </ParaTypo>
          </div>
          <ParaTypo className="line-through opacity-70 text-sm">
            Rs {data?.price}
          </ParaTypo>
          <ParaTypo className="text-sm border-b-2 pb-4 my-4">
            {data?.description.slice(0, 200)}...
          </ParaTypo>

          <div className="flex flex-col gap-y-2 items-start w-full max-w-[50%]">
            <div className="flex gap-x-4">
              <div className="flex items-center border-gray-500 border-2 h-[40px]">
                <ParaTypo
                  onClick={decreaseCount}
                  className="px-4 text-4xl cursor-pointer select-none hover:bg-red-500 hover:text-white"
                >
                  -
                </ParaTypo>
                <Input
                  className="w-[40px] rounded-none h-[40px] text-center font-bold"
                  readOnly
                  type="text"
                  value={count}
                />
                <ParaTypo
                  onClick={increaseCount}
                  className="px-4 text-4xl cursor-pointer select-none hover:bg-red-500 hover:text-white"
                >
                  +
                </ParaTypo>
              </div>
              <div className="border-2 border-gray-500 p-1 rounded-md flex justify-center items-center cursor-pointer">
                <Heart
                  fill={data?.isOnWishList ? "red" : "transparent"}
                  color={data?.isOnWishList ? "red" : "black"}
                  onClick={() => addOnWishList(data?._id)}
                  strokeWidth={1.2}
                />
              </div>
            </div>
            <div className=" gap-2 flex flex-col lg:flex-row ">
              <Button className="bg-red-500  rounded-md text-white py-2 px-4 ">
                Buy Now
              </Button>
              <Button
                disabled={data?.stock === 0}
                onClick={() => addToCartHandler(data._id)}
                className="bg-red-500 rounded-md text-white py-2 px-4  flex gap-x-2"
              >
                Add to Cart
                <BaggageClaim strokeWidth={1} />
              </Button>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-3">
            {/* <Button className="bg-green-500 text-white justify-center rounded-md px-3 py-2 flex gap-4">
              Bargaining On Video Call <Video fill="white" color="white" />{" "}
            </Button> */}
            <Button
              onClick={() => setOpen(true)}
              className="rounded-md py-2 px-3 justify-center bg-blue-500 text-white flex gap-x-2"
            >
              Chat with Shop Owner <MessageCircle />{" "}
            </Button>
          </div>
        </div>
      </div>
      {open && (
        <ChatPopup
          userId={data?.addedBy?.owner}
          open={open}
          setOpen={setOpen}
          product={data?._id}
        />
      )}
      <ProductDescription
        description={data?.description}
        features={data?.features}
        review={data?.review}
      />
      <HeaderBar heading="Our Others Products" btnText="See More" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-3">
        {data?.ourOtherProducts?.map((ele: any) => {
          return <ProductCard key={ele._id} product={ele} />;
        })}
      </div>
      <HeaderBar heading="Related Products" btnText="See More" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-3">
        {data?.relatedProducts?.map((ele: any) => {
          return <ProductCard key={ele._id} product={ele} />;
        })}
      </div>
    </>
  );
};

export default ProductDetails;
