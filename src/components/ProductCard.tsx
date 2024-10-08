import { Star, Trash } from "lucide-react";
import React, { useCallback, useEffect } from "react";
import ParaTypo from "./common/ParaTypo";
import { Link } from "react-router-dom";
import { useMutation } from "../hooks/useMutation";
import { useContextProvider } from "../context/Context";
import { ProductType } from "../types/ProductType";

type cardProps = {
  hideBtn?: string;
  icon?: React.ReactNode;
  product: ProductType;
  remove?: boolean;
  refetch?:()=>void
};

const ProductCard = ({ remove = false, icon, product,refetch }: cardProps) => {
  const { mutate, response } = useMutation();
  const{setWishList}=useContextProvider()

  const deleteHandler = useCallback(
    (e: React.MouseEvent<SVGSVGElement>, id: string) => {
      e.preventDefault();
      mutate("/product/wishlist", "DELETE", { productId: id });
    },
    [],
  );

  useEffect(() => {
    if (response?.success) {
      setWishList(prv => prv - 1)
      refetch&&refetch()
    }
  },[response])

  return (
    <>
      <Link to={`/details/${product?._id}`} className=" h-fit shadow-md ">
        <div className="bg-gray-100 flex items-center justify-center overflow-hidden p-2 cursor-pointer cart relative h-[200px] sm:h-[300px] md:h-[300px] ">
          <img
            className="sm:w-[300px] w-[200px]"
            src={product?.images?.[0]}
            alt=""
          />

          <span className="absolute top-1 left-[86%]">{icon}</span>
        </div>
        <div className="p-3 flex flex-col gap-y-2 min-h-[150px] border-2 border-gray-200 shadow-md">
          <p
            title={product?.name}
            className="font-semibold text-sm sm:text-lg truncate "
          >
            {product?.name}
          </p>
          <div className="flex items-center gap-x-3 my-1">
            <p className="font-bold opacity-60">
              Rs {""}
              {product?.priceAfterDiscount}
            </p>
            {product?.discount != 0 && (
              <p className="line-through opacity-[0.5]">Rs {product?.price}</p>
            )}
            {product?.discount != 0 && (
              <ParaTypo className="text-green-500 text-sm font-semibold">
                {Number(product?.discount)} % off
              </ParaTypo>
            )}
          </div>
          <div className="flex items-center gap-x-3">
            <ParaTypo className="bg-green-500 text-white px-2 py-1 rounded-md text-sm flex gap-x-1">
              {product?.rating?.toFixed(1) || "0"}
              <Star strokeWidth={2} fill="white" size={18} />
            </ParaTypo>
            <ParaTypo className="opacity-60">
              ({product?.starArray?.length})
            </ParaTypo>
            {product?.offer && (
              <img
                className="h-[30px] place-content-end"
                src="https://png.pngtree.com/png-clipart/20230119/original/pngtree-creative-special-offer-banner-shape-tag-png-image_8922232.png"
                alt=""
              />
            )}
            {remove && (
              <Trash
                className="cursor-pointer"
                onClick={(e) => deleteHandler(e, product?._id)}
                strokeWidth={0.9}
                color="red"
              />
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
