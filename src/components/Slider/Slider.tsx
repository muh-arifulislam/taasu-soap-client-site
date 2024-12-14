import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./slider.css";

import { Pagination, Autoplay } from "swiper/modules";
// import required modules

type PropsType<T> = {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  slidesPerView?: number;
};

const Slider = <T,>({ data, renderItem }: PropsType<T>) => {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        // autoplay={{ delay: 5000 }}
        autoplay={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="topSlider"
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <SwiperSlide key={idx}>{renderItem(item)}</SwiperSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
