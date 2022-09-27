import React from 'react';
import image from '../images/content-box-bg-pink.svg';
import PrimaryBtn from './PrimaryBtn';
const Feature = () => {
    return (
        <div className='mt-[20px] pt-[30px] pb-[20px] px-[20px]' style={{ background: `url(${image})` }}>
            <h4 className='text-[34px] mb-[10px]'>Free Delivery</h4>
            <p className='text-xl mb-[20px]'>When you spend over £30, you can now enjoy free shipping on our soaps!</p>
            <PrimaryBtn>Shop Now</PrimaryBtn>
        </div>
    );
};

export default Feature;