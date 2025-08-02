import { Swiper, SwiperSlide } from "swiper/react";

import image from "../../assets/images/client-logo/Amazon_logo.png";
import image1 from "../../assets/images/client-logo/Boots_logo.png";
import image2 from "../../assets/images/client-logo/Lloyds_logo.png";
import image3 from "../../assets/images/client-logo/Morrisons_logo.png";
import image4 from "../../assets/images/client-logo/Sainsburys_logo.png";
import image5 from "../../assets/images/client-logo/Tesco_logo.png";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const OnlinePartner = () => {
  const width = window.screen.width;
  return (
    <div className="text-center container mx-auto px-4 py-5 md:py-8 lg:py-10">
      <h1 className="mb-[20px] font-secondary text-xl md:text-2xl leading-10 text-gray-900 dark:text-white/90">
        Where to find us
      </h1>
      <h4 className="mb-[20px] text-gray-800 dark:text-gray-200 w-full max-w-2xl mx-auto text-center">
        We're available online and in select local stores—find us wherever it's
        convenient for you.
      </h4>
      <Swiper
        slidesPerView={width > 570 ? 5 : 2}
        spaceBetween={30}
        slidesPerGroup={2}
        loop={true}
        loopAddBlankSlides={true}
        autoplay={true}
        pagination={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="" style={{ width: "200px" }} src={image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" style={{ width: "200px" }} src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" style={{ width: "200px" }} src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" style={{ width: "200px" }} src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" style={{ width: "200px" }} src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" style={{ width: "200px" }} src={image5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" style={{ width: "200px" }} src={image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" style={{ width: "200px" }} src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" style={{ width: "200px" }} src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" style={{ width: "200px" }} src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" style={{ width: "200px" }} src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" style={{ width: "200px" }} src={image5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OnlinePartner;
