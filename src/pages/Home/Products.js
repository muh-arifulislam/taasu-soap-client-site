import React from 'react';
import Product from '../../shared/Product';

const Products = () => {
    return (
        <section className='flex lg:flex-row flex-col gap-[40px] lg:px-[100px] px-[30px]'>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </section>
    );
};

export default Products;