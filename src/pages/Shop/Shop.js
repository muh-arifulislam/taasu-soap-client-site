import React from 'react';
import ShopProducts from './ShopProducts';

const Shop = () => {
    return (
        <section className='my-[50px] '>
            <div className="text-sm breadcrumbs bg-secondary">
                <ul className='justify-center'>
                    <li><a href='/'>Home</a></li>
                    <li>shop</li>
                </ul>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-3 lg:mx-[100px] mx-[10px]'>
                <div className='lg:block hidden'>
                    this is query section
                </div>
                <div className='col-span-3'>
                    <ShopProducts></ShopProducts>
                </div>
            </div>
        </section>

    );
};

export default Shop;