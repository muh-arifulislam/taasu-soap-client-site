import React from 'react';
import image from '../../images/lsc-usp-icons.svg';
import image1 from '../../images/rough-edge-white.svg';
const Indgredients = () => {
    return (
        <div className='bg-secondary pt-[20px] pb-[40px] relative mb-[300px]'>
            <img className='w-[50%] mx-[auto]' src={image} alt="" />
            <p className='absolute bottom-[0] w-full'>
                <img className='w-full h-[25px] rotate-180' src={image1} alt="" />
            </p>
        </div>
    );
};

export default Indgredients;