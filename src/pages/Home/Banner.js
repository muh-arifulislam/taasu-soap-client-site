import React from 'react';
import bg from '../../images/content-box-bg.svg';
import banner1 from '../../images/Banner/banner1.jpg';
import PrimaryBtn from '../../shared/PrimaryBtn';
const Banner = ({banner}) => {
    return (
        <div className='relative '>
            <img className='w-[100%] lg:min-h-full min-h-[500px]' src={banner.image} alt="" />
            <div className='absolute lg:top-[25%] top-[12%] lg:mx-[80px] mx-[15px]'>
                <div className='lg:w-[50%]  w-[100%] px-[40px]  pt-[40px] pb-[20px]' style={{ background: `url(${bg})` }}>
                    <h4 className='mb-[20px] text-[22px]'>{banner.title}</h4>
                    <p className='mb-[20px] text-[18px]'>{banner.article}</p>
                    <PrimaryBtn>{banner.btnText}</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;