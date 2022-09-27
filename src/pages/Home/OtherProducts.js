import React from 'react';
import OtherProduct from './OtherProduct';

const OtherProducts = () => {
    return (
        <section className='lg:mx-[100px] mx-[20px] grid lg:grid-cols-3 grid-cols-1 lg:gap-[20px] gap-[30px]'>
            <OtherProduct></OtherProduct>
            <OtherProduct></OtherProduct>
            <OtherProduct></OtherProduct>
            <OtherProduct></OtherProduct>
            <OtherProduct></OtherProduct>
            <OtherProduct></OtherProduct>
        </section>
    );
};

export default OtherProducts;