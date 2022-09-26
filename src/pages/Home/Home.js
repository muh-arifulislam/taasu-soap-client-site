import React from 'react';
import Indgredients from './Indgredients';
import Products from './Products';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <>
            <TopBanner></TopBanner>
            <Indgredients></Indgredients>
            <Products></Products>
        </>
    );
};

export default Home;