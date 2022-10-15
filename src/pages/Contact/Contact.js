import React from 'react';
import BannerPrimary from '../../shared/BannerPrimary';
import PrimaryBtn from '../../shared/PrimaryBtn';
import SentEmail from './SentEmail';
import contactBannerBg from '../../images/CONTACTUS_BANNER.jpg';
const Contact = () => {
    const banner = { title: "Contact Us", descriptions: ["We love to hear from customers and retailers. For any questions or feedback, get in touch now!"] }
    return (
        <div>
            <BannerPrimary banner={banner} bannerBg={contactBannerBg}></BannerPrimary>
            <div className='text-center'>
                <h1 className='font-secondary my-[20px]'>Contact Details:</h1>
                <h2 className='mb-[20px]'><span className='font-bold'>Address:</span>The Workshop, 99 Upper High Street, Broadway, Worcestershire, WR12 7AL</h2>
                <h2 className='mb-[20px]'><span className='font-bold'>Phone:</span> 01386 853 025 (during office hours Monday to Friday)</h2>
                <h1 className='font-secondary mt-[40px] mb-[20px]'>Online Press Pack</h1>
                <h4 className='mb-[20px]'>We have a downloadable bank of images and documents for the media. Please email us for the current password to access.</h4>
                <PrimaryBtn>Press & Media Enquiries</PrimaryBtn>
            </div>
            <SentEmail></SentEmail>
        </div>
    );
};

export default Contact;