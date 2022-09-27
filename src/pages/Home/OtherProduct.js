import React from 'react';
import image from '../../images/Products/TILE_ARTISAN.jpg';
import WhiteBgBtn from '../../shared/WhiteBgBtn';
const OtherProduct = () => {
    return (
        <div className='relative pb-[30px] bg-slate-100'>
            <img src={image} alt="" />
            <div className='py-[15px] px-[20px] flex justify-between absolute bottom-[12px] w-full' style={{backgroundColor: 'rgba(48, 62, 71, 0.8)'}}>
                <div className='text-white'>
                    <h2 className='text-[20px]'>Eco Warrior</h2>
                    <p className='text[18px]'>From $4.50</p>
                </div>
                <WhiteBgBtn>Shop Now</WhiteBgBtn>
            </div>
        </div>
    );
};

export default OtherProduct;