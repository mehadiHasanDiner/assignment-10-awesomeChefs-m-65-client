import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const Banner = () => {
  return (
    <div className="mb-12 -mt-16">
      <Swiper
        className="relative group"
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div>
            <img src="https://i.ibb.co/HP0qJRP/image-Banne3.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative ">
            <img src="https://i.ibb.co/8PNY4y7/image-Banne2.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.ibb.co/tH1g85S/image-Banne1.jpg" alt="" />
          </div>
        </SwiperSlide>
        <div className="top-[50%] absolute z-10 button-next-slide group-hover:left-0 -left-[24rem] duration-500 text-white w-[50px] h-[50px] bg-black grid place-items-center">
          <HiOutlineArrowNarrowLeft />
        </div>
        <div className="top-[50%] absolute z-10 button-prev-slide group-hover:right-0 -right-[24rem] duration-500 text-white w-[50px] h-[50px] bg-black grid place-items-center">
          <HiOutlineArrowNarrowRight />
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
