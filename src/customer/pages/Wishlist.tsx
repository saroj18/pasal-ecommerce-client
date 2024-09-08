import Button from "../../components/common/Button";
import ProductCard from "../../components/ProductCard";
import HeadingTypo from "../../components/common/HeadingTypo";
import { useQuery } from "../../utils/useQuery";
import Shimmer from "../../components/common/Shimmer";

type barProps = {
  heading: string;
  btnText: string;
};

export const HeaderBar = ({ heading, btnText }: barProps) => {
  return (
    <div className="flex justify-between items-center my-4">
      <HeadingTypo className="text-xl font-semibold">{heading}</HeadingTypo>
      <Button className="border-2 p-2 px-6 bg-red-500 text-white">
        {btnText}
      </Button>
    </div>
  );
};

const Wishlist = () => {
  const { data, loading } = useQuery<any>("/product/wishlist");
  const { data: randomProducts, loading: randomProductsLoading } =
    useQuery<any>("/product/randomproducts");
  console.log(randomProducts);
  return (
    <div>
      <HeaderBar btnText="See All" heading={`Wishlist(${data?.length})`} />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 mb-10">
        {loading ? (
          <Shimmer shape="rectange" height="300px" count={4} />
        ) : (
          data?.map((ele: any, index: number) => (
            <ProductCard key={index} remove={true} product={ele.product} />
          ))
        )}
      </div>
      <hr />
      <HeaderBar btnText="See All" heading="Just for You" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 ">
        {randomProductsLoading ? (
          <Shimmer shape="rectange" height="300px" count={4} />
        ) : (
          randomProducts?.map((ele: any) => (
            <ProductCard key={ele._id} product={ele} />
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
