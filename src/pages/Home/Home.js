import React from 'react';
import Indgredients from './Indgredients';
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
        </>
    );
};

export default Home;