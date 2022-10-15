import React from 'react';
import divBg from '../images/content-box-bg.svg';
import PrimaryBtn from './PrimaryBtn';
const BannerPrimary = ({ banner, bannerBg }) => {
    return (
        <div className='relative'>
            <img src={bannerBg} alt="" />
            <div className='lg:px-[100px] px-[10px] lg:py-[100px] py-[50px] absolute top-0 w-full h-full grid lg:grid-cols-2 grid-cols-1'>
                <div className="flex flex-col justify-center">
                    <div style={{ backgroundImage: `url(${divBg})` }} className='px-[40px] pt-[40px] pb-[20px]'>
                        <h2 className='font-secondary mb-[10px]'>{banner.title}</h2>
                        {
                            banner.descriptions?.map(des => <h4 className='text-xl mb-[20px]'>{des}</h4>)
                        }
                        {
                            banner.btn && <PrimaryBtn>{banner.btnText}</PrimaryBtn>
                        }
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    {
                        banner.secondaryImage && <img className='w-[80%] h-[80%]' src={banner.secondaryImage} alt="" />
                    }
                </div>
            </div>
        </div>
    );
};

export default BannerPrimary;