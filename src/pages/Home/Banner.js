import React from 'react';
import bg from '../../images/content-box-bg.svg';
import banner1 from '../../images/Banner/banner1.jpg';
import PrimaryBtn from '../../shared/PrimaryBtn';
const Banner = ({banner}) => {
    return (
        <div className='relative'>
            <img className='w-[100%]' src={banner.image} alt="" />
            <div className='absolute top-[25%] mx-[80px]'>
                <div className='w-[50%] px-[40px] pt-[40px] pb-[20px]' style={{ background: `url(${bg})` }}>
                    <h4 className='mb-[20px] text-[22px]'>{banner.title}</h4>
                    <p className='mb-[20px] text-[18px]'>{banner.article}</p>
                    <PrimaryBtn>{banner.btnText}</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;