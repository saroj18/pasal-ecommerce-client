import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

const Crousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <img
          src="https://img.freepik.com/premium-psd/horizontal-website-banne_451189-111.jpg"
          className="w-[90%] mx-auto"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://img.freepik.com/premium-psd/horizontal-website-banne_451189-111.jpg"
          className="w-[90%] mx-auto"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://img.freepik.com/premium-psd/horizontal-website-banne_451189-111.jpg"
          className="w-[90%] mx-auto"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://img.freepik.com/premium-psd/horizontal-website-banne_451189-111.jpg"
          className="w-[90%] mx-auto"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Crousel;
