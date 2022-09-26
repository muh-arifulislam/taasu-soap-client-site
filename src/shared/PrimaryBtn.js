import React from 'react';
import btnBg from '../images/btn-bg-rough.svg';
const PrimaryBtn = (props) => {
    return (
        <div className=''>
            <a href="#" className='text-white px-[28px] pt-[16px] pb-[22px] inline-block' style={{background: `url(${btnBg})`}}>{props.children}</a>
        </div>
    );
};

export default PrimaryBtn;