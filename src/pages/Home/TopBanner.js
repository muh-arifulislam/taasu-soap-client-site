import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import required modules
import { Pagination, Autoplay } from "swiper";
import Banner from './Banner';
const TopBanner = () => {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        fetch("banners.json")
            .then(res => res.json())
            .then(data => {
                setBanners(data);
            })
    }, [])
    return (
        <div className=''>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{ delay: 5000 }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    banners.map(banner => <SwiperSlide key={banner.id}>
                        <Banner banner={banner}></Banner>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default TopBanner;