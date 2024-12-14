import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper class for typing
import { Swiper as SwiperClass } from "swiper";

const ProductSlider = ({ images }: { images: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null); // Specify the state type

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={false}
        {...(thumbsSwiper ? { thumbs: { swiper: thumbsSwiper } } : {})}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumSwiperMain"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <img
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto object-cover"
              src={image}
              alt="Product"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)} // Ensure the callback matches the type
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        navigation={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumSwiperThumb"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} alt="Thumbnail" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductSlider;
