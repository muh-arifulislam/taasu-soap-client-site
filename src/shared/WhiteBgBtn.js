import React from 'react';
import btnBg from '../images/btn-bg-rough-white.svg';
const WhiteBgBtn = (props) => {
    return (
        <div className=''>
            <a href="#" className='text-primary px-[28px] pt-[16px] pb-[22px] inline-block' style={{ background: `url(${btnBg})` }}>{props.children}</a>
        </div>
    );
};

export default WhiteBgBtn;