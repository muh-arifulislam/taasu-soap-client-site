// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper";

import image from "../../assets/images/client-logo/Amazon_logo.png";
import image1 from "../../assets/images/client-logo/Boots_logo.png";
import image2 from "../../assets/images/client-logo/Lloyds_logo.png";
import image3 from "../../assets/images/client-logo/Morrisons_logo.png";
import image4 from "../../assets/images/client-logo/Sainsburys_logo.png";
import image5 from "../../assets/images/client-logo/Tesco_logo.png";
import { Pagination } from "swiper/modules";

const OnlinePartner = () => {
  const width = window.screen.width;
  return (
    <div className="text-center mt-[100px] mb-[100px] lg:mx-[100px] mx-[20px]">
      <h4 className="text-[34px] mb-[20px] font-bold">Where to find us</h4>
      <Swiper
        slidesPerView={width > 570 ? 5 : 2}
        spaceBetween={30}
        slidesPerGroup={2}
        loop={true}
        // loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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
      </Swiper>
    </div>
  );
};

export default OnlinePartner;
