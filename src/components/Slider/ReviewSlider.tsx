// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ReviewSlider.css";

// import required modules
import { Pagination } from "swiper/modules";
import ProductReview from "../ui/ProductReview";

const ReviewSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Pagination]}
      className="reviewSlider"
    >
      <SwiperSlide>
        <ProductReview />
      </SwiperSlide>
      <SwiperSlide>
        <ProductReview />
      </SwiperSlide>
      <SwiperSlide>
        <ProductReview />
      </SwiperSlide>
      <SwiperSlide>
        <ProductReview />
      </SwiperSlide>
      <SwiperSlide>
        <ProductReview />
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewSlider;
