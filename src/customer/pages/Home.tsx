import Crousel from "../../components/Crousel";
import ProductSectionBar from "../../components/bar/ProductSectionBar";
import { VerifyPopup } from "../popup/VerifyPopup";
import { useQuery } from "../../hooks/useQuery";
import "swiper/css";
import Slider from "../../customer/pages/account/component/Slider";
import Shimmer from "../../components/common/Shimmer";
import { Fragment } from "react/jsx-runtime";
import { useAuth, UserType } from "../../context/AuthProvider";

const Home = () => {
  const { data: offerList, loading: offerListLoading } =
  useQuery<any>("/offers");
  const { data: bestSellingProducts, loading: bestSellingProductLoading } =
  useQuery<any>("/product/bestselling");
  const { data: randomProducts, loading: randomProductsLoading } =
  useQuery<any>("/product/randomproducts");
  let { data } = useAuth()
  data=data as UserType

  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row gap-2 mt-5 p-3">
        {/* <CategorySideBar /> */}
        <Crousel />
      </section>
      {offerListLoading ? (
        <Shimmer height="350px" count={5} shape="rectange" />
      ) : (
        offerList?.map((ele: any) => {
          return (
            <Fragment key={ele._id}>
              <ProductSectionBar
                heading={ele.name + ` (with extra % off)`}
                option={false}
              />
              <Slider productList={ele?.product} />
            </Fragment>
          );
        })
      )}
      {/* <ProductSectionBar option={false} heading="Browse By Category" />
      <div className="flex flex-wrap gap-3 justify-center my-5 ">
        <CategoryCard
          icon={<TabletSmartphone size={60} strokeWidth={1} />}
          category="Phones"
        />
      </div> */}
      <ProductSectionBar option={false} heading="Best Selling Products" />
      <Slider
        loadingState={bestSellingProductLoading}
        productList={bestSellingProducts?.product || bestSellingProducts}
      />

      <section className="mt-7">
        <Crousel />
      </section>

      <section>
        <ProductSectionBar option={false} heading="Explore Our Products" />
        <Slider
          loadingState={randomProductsLoading}
          productList={randomProducts}
        />

        {data && !data?.verify && <VerifyPopup />}
      </section>
    </>
  );
};

export default Home;
