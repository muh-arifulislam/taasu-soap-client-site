import React from 'react';
import Indgredients from './Indgredients';
import OnlinePartner from './OnlinePartner';
import OtherProducts from './OtherProducts';
import Products from './Products';
import Testimonial from './Testimonial';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <>
            <TopBanner></TopBanner>
            <Indgredients></Indgredients>
            <Products></Products>
            <Testimonial></Testimonial>
            <OnlinePartner></OnlinePartner>
            <OtherProducts></OtherProducts>
        </>
    );
};

export default Home;