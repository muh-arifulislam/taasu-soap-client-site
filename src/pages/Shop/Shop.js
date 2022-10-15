import React from 'react';
import BannerPrimary from '../../shared/BannerPrimary';
import ShopProducts from './ShopProducts';
import bannerBg from '../../images/TESTIMONIALS_BANNER.jpg';
const Shop = () => {
    const banner = { title: "Shop", descriptions: ["The search for natural, organic, affordable soap is over.", "Beautifully fragranced or naturally un-fragranced. Hair, body or shave. Everyday essential or pampering gift. You’re just one step away from natural organic beauty delivered to your door."] }
    return (
        <section className='my-[50px]'>
            <div className="text-sm breadcrumbs bg-secondary">
                <ul className='justify-center'>
                    <li><a href='/'>Home</a></li>
                    <li>shop</li>
                </ul>
            </div>
            <BannerPrimary banner={banner} bannerBg={bannerBg}></BannerPrimary>
            <div className='relative py-[20px] bg-secondary bottom-edge-secondary'>
                <div className='flex justify-center items-center gap-[50px] '>
                    <h2 style={{ fontSize: "5rem" }} className='font-secondary'>Special Offers!</h2>
                    <div className='text-xl'>
                        <p>Save up to 20% when you buy in Bulk</p>
                        <p>FREE delivery on orders over £30</p>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-3 lg:mx-[100px] mx-[10px] mt-[50px]'>
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