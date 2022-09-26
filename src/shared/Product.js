import React from 'react';
import image from '../images/soap/Org-Home-1.jpg';
import PrimaryBtn from './PrimaryBtn';
const Product = () => {
    return (
        <div className='text-center'>
            <div className='py-[20px]'>
                <a href="#">
                    <img className='w-[100%] mx-[auto]' src={image} alt="" />
                </a>
            </div>
            <h2 className='text-[18px] mb-[20px] font-bold'>Organic Rose Geranium Soap Bar</h2>
            <h4 className='text-[18px] mb-[20px]'>£3.99</h4>
            <PrimaryBtn>Shop Now</PrimaryBtn>
        </div>
    );
};

export default Product;