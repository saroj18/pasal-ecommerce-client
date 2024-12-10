import { useEffect, useState } from "react";
import HeadingTypo from "../../components/common/HeadingTypo";
import ProductCard from "../../components/ProductCard";
import { useQuery } from "../../hooks/useQuery";
import FilterBar from "./account/component/FilterBar";
import Shimmer from "../../components/common/Shimmer";
import Button from "../../components/common/Button";
import { useThrottle } from "../../hooks/useThrottle";
import ParaTypo from "../../components/common/ParaTypo";
import { ProductType } from "../../types/ProductType";

const AllProducts = () => {
  const [product, setProduct] = useState<ProductType[]>([]);
  const [skip, setSkip] = useState(0);
  const [open, setOpen] = useState(false);
  const [end, setEnd] = useState(false);
  const { data, loading } = useQuery<ProductType[]>(
    `/product?skip=${skip}&limit=8`,
    false,
  );

  useEffect(() => {
    if (product.length === 0) {
      setTimeout(() => {
        window.scrollTo({ top: 0 });
      }, 0);
    }
    if (data && (data as ProductType[]).length <= 8) {
      setProduct((prv) => [...prv, ...(data as ProductType[])]);
    }
    if (data && (data as ProductType[]).length < 8) {
      setEnd(true);
    }
  }, [data]);

  function scrollHandler() {
    if (end) {
      return;
    }

    if (
      !loading &&
      data &&
      window.innerHeight + document.documentElement.scrollTop + 500 >
        document.documentElement.scrollHeight
    ) {
      setSkip((prv) => prv + 8);
    }
  }

  const throttleFunction = useThrottle(scrollHandler, 300);

  useEffect(() => {
    window.addEventListener("scroll", throttleFunction);

    return () => window.removeEventListener("scroll", throttleFunction);
  }, [skip, loading]);

  return (
    <div className="relative">
      <HeadingTypo className="text-2xl my-4">All Products</HeadingTypo>
      <Button
        onClick={() => setOpen(true)}
        className="bg-red-500 px-7 py-1 my-2 md:hidden"
      >
        Filter
      </Button>
      {/* <ProductFilterBar /> */}
      <div className="flex  ">
        <FilterBar
          className={`absolute top-0 ${open ? "left-0" : "-left-full"} bg-white z-10 md:sticky`}
          setProduct={setProduct}
          setOpen={setOpen}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading && !data ? (
            <Shimmer count={6} width="320px" height="300px" shape="rectange" />
          ) : (
            product?.map((ele: ProductType, index: number) => {
              return <ProductCard product={ele} key={index} />;
            })
          )}
        </div>
      </div>
      {loading && data && (
        <div className="flex items-center justify-center space-x-1 text-sm text-gray-700">
          <svg
            fill="none"
            className="h-6 w-6 animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <div className="text-xl">Loading ...</div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
