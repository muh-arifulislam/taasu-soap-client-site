import React from 'react';
import image from '../images/content-box-bg.svg';
const Subscribe = () => {
    return (
        <div className='lg:mx-[100px] lg:my-[50px] lg:p-[40px] flex justify-between items-center my-[50px]' style={{background:`url(${image})`}}>
            <h2 className='lg:font-secondary'>Keep uo to date...</h2>
            <div className='flex gap-[10px]'>
                <input type="text" placeholder="Enter your email" className="inline-block input input-bordered w-[100%] max-w-xl" />
                <button className="btn btn-primary text-white">Button</button>
            </div>
        </div>
    );
};

export default Subscribe;