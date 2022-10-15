import React, { useEffect, useState } from 'react';
import Products from '../Home/Products';
import ingredientsImage from '../../images/lsc-usp-icons.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faTriangleCircleSquare } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom';
const ProductsDetails = () => {
    const {productName} = useParams();
    const productNameConv = productName.replaceAll("-"," ");
    const [product, setProduct] = useState({});
    const [orderQuantity, setOrderQuantity] = useState(1);
    const [active, setActive] = useState("ingredients");
    useEffect(() => {
        fetch("../products.json")
            .then(res => res.json())
            .then(data => {
                const result = data.find(d=>d.name === productNameConv);
                console.log(result)
                setProduct(result);
            })
    }, []);
    function sub() {
        console.log(orderQuantity);
    }
    return (
        <>
            {
                product &&
                <div className=''>
                    <div className="text-sm breadcrumbs bg-secondary">
                        <ul className='justify-center'>
                            <li><a className='underline' href='/'>Home</a></li>
                            <li><a className='underline' href="/shop-all">shop</a></li>
                            <li>{product.name}</li>
                        </ul>
                    </div>
                    <div className='mt-[70px] lg:mx-[100px] mx-[15px] grid lg:grid-cols-2 grid-cols-1'>
                        <div className=' text-primary flex items-center justify-center'>
                            this is image
                        </div>
                        <div>
                            <h1 className='font-secondary'>{product.name}</h1>
                            <p className='mb-[20px]'>
                                ${product.price}
                                <span className='text-primary opacity-80'>
                                    <small> inc.VAT</small>
                                    <small className='ml-[20px]'>SKU: {product.productId}</small>
                                    <small className='ml-[20px] border p-[5px]'>
                                        {
                                            product.quantity ? "In stock" : "Stock Out"
                                        }
                                    </small>
                                </span>
                            </p>
                            <div className='flex gap-[5px]'>
                                <span className='py-[10px] pl-[10px] border-2 border-primary rounded-md'>
                                    <input className='outline-0 w-[45px] h-[30px] text-lg' type="number" min="1" value={orderQuantity} onChange={(event) => setOrderQuantity(event.target.value)} />
                                </span>
                                <button onClick={() => sub()} className='bg-primary text-white px-[30px] font-bold text-xl rounded-md'>Add to basket</button>
                            </div>

                            <img className='mt-[40px]' src={ingredientsImage} alt="" />
                            <div>
                                <h2 className='font-secondary'>{product.title}</h2>
                                {
                                    product.descriptions?.map(des => <h2 className='text-xl mb-[20px]'>{des}</h2>)
                                }
                                {
                                    product.advantages?.map(adv => <p className='text-xl mb-[20px]'><span className='mr-[5px]'>✓</span>{adv}</p>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className='lg:mx-[100px] mx-[15px]'>
                        <ul className='flex lg:flex-row flex-col text-xl font-bold'>
                            <li style={active === "ingredients" ? { backgroundColor: "white", borderBottom: "1px solid white" } : { backgroundColor: "#f0e8e6" }} className='rounded-sm bg-secondary border py-[10px] px-[20px]'>
                                <Link to="#" onClick={() => setActive("ingredients")} >Ingredients</Link>
                            </li>
                            <li style={active === "information" ? { backgroundColor: "white", borderBottom: "1px solid white" } : { backgroundColor: "#f0e8e6" }} className='rounded-sm bg-secondary border py-[10px] px-[20px]'>
                                <Link to="#" onClick={() => setActive("information")} >Additional Information</Link>
                            </li>
                            <li style={active === "reviews" ? { backgroundColor: "white", borderBottom: "1px solid white" } : { backgroundColor: "#f0e8e6" }} className='rounded-sm bg-secondary border py-[10px] px-[20px]'>
                                <Link to="#" onClick={() => setActive("reviews")} >Reviews</Link>
                            </li>
                        </ul>
                        <div>
                            <div style={active === "ingredients" ? { display: "block" } : { display: "none" }} id='ingredients' className='hidden'>
                                <h2 className='font-secondary my-[10px]'>Ingredients</h2>
                                {
                                    product.indgredients?.map(ingredient => <p className='text-xl mb-[20px]'>{ingredient}</p>)
                                }
                            </div>
                            <div style={active === "information" ? { display: "block" } : { display: "none" }} id='information' className='hidden'>
                                <h2 className='font-secondary my-[10px]'>Additional Information</h2>
                                <div className="overflow-x-auto">
                                    <table className="table table-zebra w-full border-2 border-black">
                                        <tbody>
                                            <tr className='border-b-2 border-black'>
                                                <td className='border-r-2 border-black'>Weight</td>
                                                <td>{product.addInformation?.weight}</td>
                                            </tr>
                                            <tr className='border-b-2 border-black'>
                                                <td className='border-r-2 border-black'>Dimensions</td>
                                                <td>{product.addInformation?.dimension}</td>
                                            </tr>
                                            <tr className='border-b-2 border-black'>
                                                <td className='border-r-2 border-black'>Directions</td>
                                                <td>{product.addInformation?.direction}</td>
                                            </tr>
                                            <tr>
                                                <td className='border-r-2 border-black'>Warning</td>
                                                <td>{product.addInformation?.warnings}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div style={active === "reviews" ? { display: "block" } : { display: "none" }} id='reviews' className='hidden'>
                                <p >Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default ProductsDetails;