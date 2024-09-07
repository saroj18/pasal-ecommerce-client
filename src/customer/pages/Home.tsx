import CategorySideBar from "../../components/bar/CategorySideBar";
import Crousel from "../../components/Crousel";
import ProductSectionBar from "../../components/bar/ProductSectionBar";
import CategoryCard from "../../components/CategoryCard";
import { TabletSmartphone } from "lucide-react";
import { VerifyPopup } from "../popup/VerifyPopup";
import { useQuery } from "../../utils/useQuery";
import "swiper/css";
import Slider from "../../customer/pages/account/component/Slider";

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
              <Slider productList={ele?.product} />
              
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
      <Slider productList={bestSellingProducts?.product} />

      <section className="mt-7">
        <Crousel />
      </section>

      <section>
        <ProductSectionBar option={false} heading="Explore Our Products" />
        <Slider productList={randomProducts} />

        {data && !data?.verify && <VerifyPopup />}
      </section>
    </>
  );
};

export default Home;
