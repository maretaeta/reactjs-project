/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Banner1 from "../assets/logo.png";

const banners = [Banner1, Banner1, Banner1];

const Banner = () => {
  return (
    <div className="w-full h-48 relative bg-white ">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        direction="horizontal"
   
        // Autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        Pagination={{
          clickable: true,
        }}
        navigation={true}
        scrollbar={{ draggable: true }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center">
              <img src={banner} alt="Banner" className="w-1/4" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
