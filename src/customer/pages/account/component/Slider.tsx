import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Button from "../../../../components/common/Button";
import ProductCard from "../../../../components/ProductCard";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Shimmer from "../../../../components/common/Shimmer";
import { ProductType } from "../../../../types/ProductType";

const Slider = ({
  productList,
  loadingState,
}: {
  productList: ProductType[];
  loadingState?: boolean;
}) => {
  console.log(productList);
  return (
    <>
      <Swiper
        spaceBetween={10}
        // slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <section className="flex flex-col md:flex-row items-center mt-5 ">
          {loadingState ? (
            <Shimmer shape="rectange" width="300px" height="300px" count={4} />
          ) : (
            productList?.map((ele: ProductType) => {
              return (
                <SwiperSlide key={ele._id} className="">
                  <ProductCard key={ele._id} product={ele} />
                </SwiperSlide>
              );
            })
          )}
        </section>
      </Swiper>
      <Link to={"/allproducts"} className="flex justify-center">
        <Button className="bg-red-500 w-fit text-white mt-6 px-6 py-2">
          View All Products
        </Button>
      </Link>
    </>
  );
};

export default Slider;
