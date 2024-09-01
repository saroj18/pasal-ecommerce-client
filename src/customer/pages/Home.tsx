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
  const { data: bestSellingProducts } = useQuery<any>("/product/bestselling");
  const { data: randomProducts } = useQuery<any>("/product/randomproducts");
  console.log("sroa", randomProducts);
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row gap-2 mt-5 p-3">
        <CategorySideBar />
        <Crousel />
      </section>
      {offerList &&
        offerList.map((ele: any) => {
          return (
            <>
              <ProductSectionBar
                heading={ele.name + ` (with extra % off)`}
                option={false}
              />
              <section
                key={ele._id}
                className="flex flex-col  items-center mt-5"
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                  {ele?.product.map((ele: any) => {
                    return <ProductCard product={ele} key={ele._id} />;
                  })}
                </div>
                <Link to={"/allproducts"}>
                  <Button className="bg-red-500 w-fit text-white mt-6 px-6 py-2">
                    View All Products
                  </Button>
                </Link>
              </section>
            </>
          );
        })}
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
          {bestSellingProducts &&
            bestSellingProducts.map((ele: any) => {
              return <ProductCard key={ele._id} product={ele} />;
            })}
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
            {
              randomProducts&&randomProducts.map((ele:any)=>{
                return <ProductCard key={ele._id} product={ele}/>
              })
            }
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
