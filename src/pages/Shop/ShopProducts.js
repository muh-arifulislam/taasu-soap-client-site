import React, { useEffect, useState } from 'react';
import ShopProduct from './ShopProduct';

const ShopProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("../products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);
    return (
        <div className='grid lg:grid-cols-3 grid-cols-2 gap-[10px]'>
            {
                products?.map(product => <ShopProduct key={product.productId} product={product}></ShopProduct>)
            }
        </div>
    );
};

export default ShopProducts;