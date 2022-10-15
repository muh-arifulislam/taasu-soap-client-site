import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../images/LSC_MumBaby_Bundle_updated.jpg';
const ShopProduct = ({ product }) => {
    const navigate = useNavigate();
    let productName = (product.name).replaceAll(" ", '-');
    return (
        <div className='shadow-lg p-[20px] text-center'>
            <div onClick={()=>navigate(`/p/${productName}`)} className='hover:cursor-pointer'>
                <img src={image} alt="" />
                <h2 className='font-bold my-[9px]'>{product?.name}</h2>
                <h4 className='mb-[9px]'>${product?.price} <span>inc. VAT</span></h4>
            </div>
            <h4 className='mb-[40px]'>(One review)</h4>
            <button className='bg-slate-300 w-full py-[10px] rounded-md'>Add to basket</button>
        </div>
    );
};

export default ShopProduct;