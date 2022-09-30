import React from 'react';

const Footer = () => {
    return (
        <section>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:text-start text-center lg:px-[100px] px-[20px] bg-primary text-white py-[40px]'>
                <div className='flex flex-col'>
                    <h2 className='mb-[15px] font-bold text-xl'>About Us</h2>
                    <a href="#">Our Story</a>
                    <a href="#">Our Story</a>
                    <a href="#">Our Story</a>
                    <a href="#">Our Story</a>
                    <a href="#">Our Story</a>
                    <a href="#">Our Story</a>
                </div>
                <div className='flex flex-col'>
                    <h2 className='mb-[15px] font-bold text-xl'>Customer Service</h2>
                    <a href="#">Contact</a>
                    <a href="#">Contact</a>
                    <a href="#">Contact</a>
                    <a href="#">Contact</a>
                    <a href="#">Contact</a>
                    <a href="#">Contact</a>
                </div>
                <div className='flex flex-col'>
                    <h2 className='mb-[15px] font-bold text-xl'>Other Information</h2>
                    <a href="#">Terms and Condition</a>
                    <a href="#">Wholesale Terms and Condition</a>
                    <a href="#">Coockings and Company Privacy</a>
                    <a href="#">Careers</a>
                    <a href="#">Careers</a>
                    <a href="#">Careers</a>
                </div>
            </div>
            <p className='py-[20px] px-[20px] text-center text-xl'>
                Copyright 2022 Little Soap Company. Reg. Company Number: 06727643. VAT Number: 135300751.
            </p>
        </section>
    );
};

export default Footer;