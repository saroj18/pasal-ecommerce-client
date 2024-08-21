import CategorySideBar from "../../components/bar/CategorySideBar";
import Crousel from "../../components/Crousel";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/common/Button";
import ProductSectionBar from "../../components/bar/ProductSectionBar";
import CategoryCard from "../../components/CategoryCard";
import { TabletSmartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { VerifyPopup } from "../popup/VerifyPopup";
import { useQuery } from "../../utils/useQuery";

const Home = () => {
  const { data } = useQuery<any>("/user");
  const { data: offerList } = useQuery<any>("/offers");
  console.log("sroa", offerList);
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row gap-2 mt-5 p-3">
        <CategorySideBar />
        <Crousel />
      </section>
      <ProductSectionBar heading="Flash Sales(30% Off)" option={false} />
      <section className="flex flex-col  items-center mt-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
          {offerList &&
            offerList
              .filter((ele: any) => ele.name == "Flash Sale")
              .map((ele: any) => {
                return ele.product?.map((ele: any, index: number) => {
                  return <ProductCard key={index} product={ele} />;
                });
              })}
        </div>
        <Link to={"/allproducts"}>
          <Button className="bg-red-500 w-fit text-white mt-6 px-6 py-2">
            View All Products
          </Button>
        </Link>
      </section>
      <ProductSectionBar option={false} heading="Browse By Category" />
      <div className="flex flex-wrap gap-3 justify-center my-5 ">
        <CategoryCard
          icon={<TabletSmartphone size={60} strokeWidth={1} />}
          category="Phones"
        />
        <CategoryCard
          icon={<TabletSmartphone size={60} strokeWidth={1} />}
          category="Phones"
        />
        <CategoryCard
          icon={<TabletSmartphone size={60} strokeWidth={1} />}
          category="Phones"
        />
        <CategoryCard
          icon={<TabletSmartphone size={60} strokeWidth={1} />}
          category="Phones"
        />
        <CategoryCard
          icon={<TabletSmartphone size={60} strokeWidth={1} />}
          category="Phones"
        />
        <CategoryCard
          icon={<TabletSmartphone size={60} strokeWidth={1} />}
          category="Phones"
        />
        <CategoryCard
          icon={<TabletSmartphone size={60} strokeWidth={1} />}
          category="Phones"
        />
        <CategoryCard
          icon={<TabletSmartphone size={60} strokeWidth={1} />}
          category="Phones"
        />
      </div>
      <ProductSectionBar option={false} heading="Best Selling Products" />
      <section className="flex flex-col items-center mt-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-x-3 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <Link to={"/allproducts"}>
          <Button className="bg-red-500 w-fit text-white mt-6 px-6 py-2">
            View All Products
          </Button>
        </Link>
      </section>

      <section className="mt-7">
        <Crousel />
      </section>

      <section>
        <ProductSectionBar option={false} heading="Explore Our Products" />
        <div className="flex flex-col items-center mt-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <Link to={"/allproducts"}>
            <Button className="bg-red-500 w-fit text-white mt-6 px-6 py-2">
              View All Products
            </Button>
          </Link>
        </div>
        {data && !data?.verify && <VerifyPopup />}
      </section>
    </>
  );
};

export default Home;
