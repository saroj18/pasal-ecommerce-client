import React, { useEffect } from "react";
import HeadingTypo from "../../components/common/HeadingTypo";
import ProductCard from "../../components/ProductCard";
import { useQuery } from "../../utils/useQuery";

export type ElementType= {
  addedBy:{[key:string]:string},
  category:string,
  description:string,
  discount:string,
  chat:string,
  features:string[],
  images:string[],
  name:string,
  price:number
  stock:number,
  brand:string,
  barganing:string
  _id:string
  review:[]
}

const AllProducts = () => {
  const {data} = useQuery<any>("/product");
  console.log(data);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <HeadingTypo className="text-2xl my-4">All Products</HeadingTypo>
      <div className="flex">
        {/* <FilterBar /> */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {data?.length > 0 && data
            .map((ele:ElementType, index:number) => {
              console.log('jj',ele)
              return <ProductCard product={ele} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
