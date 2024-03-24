"use client";
import Image from "next/image";
import khejur_gur from "@/assets/banner/khejur_gur.jpg";
import khejur from "@/assets/banner/khejur.jpg";
import hightlights from "@/assets/banner/highlights.jpg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  const bannerItems = [
    {
      img: khejur_gur,
    },
    {
      img: khejur,
    },
    {
      img: hightlights,
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {bannerItems.map((item) => (
          <SwiperSlide>
            <div>
              <Image src={item?.img} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
