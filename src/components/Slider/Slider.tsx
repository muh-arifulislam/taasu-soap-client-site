import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./slider.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

type PropsType<T> = {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  slidesPerView?: number;
};

const Slider = <T,>({ data, renderItem }: PropsType<T>) => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-0 2xl:px-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        // autoplay={{ delay: 5000 }}
        autoplay={true}
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
