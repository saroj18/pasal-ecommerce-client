import HeadingTypo from "../../components/common/HeadingTypo";
import {
  BaggageClaim,
  Heart,
  MessageCircle,
  StarIcon,
  // Video,
} from "lucide-react";
import ParaTypo from "../../components/common/ParaTypo";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import ProductCard from "../../components/ProductCard";
import { HeaderBar } from "./Wishlist";
import ProductDescription from "./account/component/ProductDescription";
import { useParams } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import { useMutation } from "../../hooks/useMutation";
import {  useEffect, useState } from "react";
import ChatPopup from "../popup/ChatPopup";
import Shimmer from "../../components/common/Shimmer";
import { useContextProvider } from "../../context/Context";
import { useAuth, UserType } from "../../context/AuthProvider";
import { ProductType } from "../../types/ProductType";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { mutate, loading, response } = useMutation();
  const [count, setCount] = useState(1);
  const [image, setImage] = useState<string | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const { setCart,setWishList } = useContextProvider();
  let { data: user } = useAuth();
  user = user as UserType;

  let {
    data,
    refetch,
    loading: productLoading,
  } = useQuery<ProductType>(`/product/${id}`);
  data=data as ProductType

  const addToCartHandler = (id: string) => {
    mutate(`/product/cart`, "POST", { productId: id, count });
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
    window.scrollTo(0, 0);
    if (!data) return;
    // refetch();
  }, [id]);

  useEffect(() => {
    if (response?.success) {
      const flag = response.message.split(' ')[3]
      if (flag == 'cart') {
        
        setCart((prv) => prv + 1);
      } else if(flag=='wishlist') {
        if (response.message.split(' ')[1] == 'remove') {
          setWishList(prv=>prv-1)
        } else {
          
          setWishList((prv)=>prv+1)
        }
      }
    }
  }, [response]);

  // const openWindow = useCallback(async (id: string) => {
  //   window.open(
  //     `http://localhost:5173/call?user=${id}`,
  //     "popupWindow",
  //     "width=" + screen.width + ",height=" + screen.height + ",scrollbars=yes",
  //   );
  // }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-x-10 mt-8 mb-10 border-b-2 pb-3">
        {productLoading ? (
          <Shimmer height="600px" width="600px" shape="rectange" />
        ) : (
          <div className="border-2 relative border-gray-500 rounded-md shadow-md w-full mx-auto max-w-md p-3 flex-col flex items-center justify-center">
            <img src={image || data?.images?.[0]} alt="product image" />

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
        )}
        <div className="w-full">
          {productLoading ? (
            <Shimmer shape="rectange" height="100px" />
          ) : (
            <HeadingTypo className="text-xl md:text-3xl">
              {data?.name}
            </HeadingTypo>
          )}
          {productLoading ? (
            <Shimmer height="50px" shape="rectange" />
          ) : (
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
          )}
          {productLoading ? (
            <Shimmer height="70px" shape="rectange" />
          ) : (
            <div className="flex gap-x-2 items-center my-4">
              <section className="flex items-center">
                {Array(5)
                  .fill(null)
                  .map((_, index) => {
                    return (
                      <StarIcon
                        key={index}
                        color={
                          index < Math.floor(data?.rating) ? "orange" : "black"
                        }
                        fill={
                          index < Math.floor(data?.rating)
                            ? "orange"
                            : "transparent"
                        }
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
          )}
          {productLoading ? (
            <Shimmer height="100px" shape="rectange" />
          ) : (
            <>
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
            </>
          )}

          {productLoading ? (
            <Shimmer shape="rectange" height="100px" />
          ) : (
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
                {/* <Button className="bg-red-500  rounded-md text-white py-2 px-4 min-w-fit ">
                  Buy Now
                </Button> */}
                {user?.role === "customer" && (
                  <Button
                    disabled={data?.stock === 0 || loading}
                    onClick={() => addToCartHandler(data._id)}
                    className="bg-red-500 rounded-md text-white py-2 px-4  flex gap-x-2 min-w-fit"
                  >
                    Add to Cart
                    <BaggageClaim strokeWidth={1} />
                  </Button>
                )}
              </div>
            </div>
          )}
          {productLoading ? (
            <Shimmer height="100px" shape="rectange" />
          ) : (
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-3">
              {/* <Button
                onClick={() => openWindow(data?.addedBy?.owner?._id)}
                className="bg-green-500 text-white justify-center rounded-md px-3 py-2 flex gap-4"
              >
                Bargaining On Video Call <Video fill="white" color="white" />{" "}
              </Button> */}
              {user?.verify && user.role == "customer" && (
                <Button
                  onClick={() => setOpen(true)}
                  className="rounded-md py-2 px-3 justify-center bg-blue-500 text-white flex gap-x-2"
                >
                  Chat with Shop Owner <MessageCircle />{" "}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      {open && (
        <ChatPopup
          userId={data?.addedBy?.owner._id}
          open={open}
          setOpen={setOpen}
          product={data?._id}
        />
      )}
      {productLoading ? (
        <Shimmer shape="rectange" height="500px" />
      ) : (
        <ProductDescription
          description={data?.description}
          features={data?.features}
          review={data?.review}
          data={data}
        />
      )}
      <HeaderBar heading="Our Others Products" btnText="See More" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {productLoading ? (
          <Shimmer count={4} height="300px" shape="rectange" />
        ) : (
          data?.ourOtherProducts?.map((ele: ProductType) => {
            return <ProductCard key={ele._id} product={ele} />;
          })
        )}
      </div>
      <HeaderBar heading="Related Products" btnText="See More" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {productLoading ? (
          <Shimmer count={4} height="300px" shape="rectange" />
        ) : (
          data?.relatedProducts?.map((ele: ProductType) => {
            return <ProductCard key={ele._id} product={ele} />;
          })
        )}
      </div>
    </>
  );
};

export default ProductDetails;
