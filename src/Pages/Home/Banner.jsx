import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { StaticImage } from "gatsby-plugin-image";

const Banner = () => {
  return (
    <div className="mb-12">
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>
          <div>
            <StaticImage
              src="https://i.ibb.co/0hZLYm0/banner-3.jpg"
              // alt="A kitten"
              // placeholder="blurred"
              // layout="fixed"
              // width={200}
              // height={200}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Banner;
