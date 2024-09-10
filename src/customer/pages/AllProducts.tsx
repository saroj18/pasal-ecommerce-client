import { useEffect, useState } from "react";
import HeadingTypo from "../../components/common/HeadingTypo";
import ProductCard from "../../components/ProductCard";
import { useQuery } from "../../utils/useQuery";
import FilterBar from "./account/component/FilterBar";
import ProductFilterBar from "../ProductFilterBar";
import Shimmer from "../../components/common/Shimmer";

export type ElementType = {
  addedBy: { [key: string]: string };
  category: string;
  description: string;
  discount: string;
  chat: string;
  features: string[];
  images: string[];
  name: string;
  price: number;
  stock: number;
  brand: string;
  barganing: string;
  _id: string;
  review: [];
};

const AllProducts = () => {
  const [product, setProduct] = useState<any[]>([]);
  const { data, loading } = useQuery<any>("/product");
  console.log("loading>>", loading);
  useEffect(() => {
   setTimeout(() => {
    window.scrollTo({ top: 0 });
   }, 0);
    if (data) {
      setProduct(data);
    }
  }, [data]);
  return (
    <div>
      <HeadingTypo className="text-2xl my-4">All Products</HeadingTypo>
      <ProductFilterBar />
      <div className="flex">
        <FilterBar setProduct={setProduct} />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          { loading?<Shimmer count={6} width="320px" height="300px" shape="rectange"/>:
            product?.map((ele: ElementType, index: number) => {
              return (
                <ProductCard product={ele} key={index} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
