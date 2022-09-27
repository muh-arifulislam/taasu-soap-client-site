import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

import image from '../../images/logo/Amazon_logo (1).png';
import image1 from '../../images/logo/Boots_logo.png';
import image2 from '../../images/logo/Lloyds_logo.png';
import image3 from '../../images/logo/Morrisons_logo.png';
import image4 from '../../images/logo/Sainsburys_logo.png';
import image5 from '../../images/logo/Tesco_logo.png';
const OnlinePartner = () => {
    let width = window.screen.width;
    return (
        <div className="text-center mt-[100px] mb-[100px] lg:mx-[100px] mx-[20px]">
            <h4 className="text-[34px] mb-[20px] font-bold">
                Where to find us
            </h4>
            <Swiper
                slidesPerView={width > 570 ? 5 : 2}
                spaceBetween={30}
                slidesPerGroup={2}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="" style={{ width: '200px' }} src={image} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="" style={{ width: '200px' }} src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="" style={{ width: '200px' }} src={image2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="" style={{ width: '200px' }} src={image3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="" style={{ width: '200px' }} src={image4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="" style={{ width: '200px' }} src={image5} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OnlinePartner;