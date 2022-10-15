import React from 'react';
import { useForm } from "react-hook-form";
import bgImage from '../../images/SOAP_BANNER.jpg';
import btnBg from '../../images/btn-bg-rough.svg';
import roughImage from '../../images/rough-edge-white.svg';
const SentEmail = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <section className='mt-[60px] relative'>
            <span className='absolute w-full top-0'>
                <img className='w-full h-[25px]' src={roughImage} alt="" />
            </span>
            <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='lg:px-[100px] px-[40px] pt-[50px] pb-[70px] text-white'>
                <h2 style={{ color: 'white' }} className='font-secondary text-center'>Send Us a Message</h2>
                <p className='text-xl text-center'>Fill in the form below and one of our team will get back to you as soon as possible.</p>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <div className='flex flex-col mb-[20px]'>
                            <label htmlFor="">Name <sup>*</sup></label>
                            <input type="text" className="input input-bordered w-full mt-[2px] text-black"  {...register("name", { required: true })} />
                            {
                                errors.name && <p className='px-[10px] py-[10px] rounded-t-sm rounded-b-md text-[1rem]' style={{ color: 'red', background: "rgba(255,255,255,0.4)" }}>This field is required.</p>
                            }
                        </div>
                        {/* include validation with required or other standard HTML validation rules */}
                        <div className='flex flex-col mb-[20px]'>
                            <label htmlFor="">Email</label>
                            <input type="text" className="input input-bordered w-full mt-[2px] text-black" {...register("email", { required: true })} />
                            {
                                errors.email && <p className='px-[10px] py-[10px] rounded-t-sm rounded-b-md text-[1rem]' style={{ color: 'red', background: "rgba(255,255,255,0.4)" }}>This field is required.</p>
                            }
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='text-center'>Your Message</label>
                            <textarea className="textarea textarea-bordered mt-[2px] h-[120px] text-black"  {...register("message", { required: true })}></textarea>
                        </div>
                        <div className='flex justify-end mt-[30px] mb-[20px]'>
                            <input style={{ backgroundImage: `url(${btnBg})` }} className='px-[40px] py-[15px] cursor-pointer' type="submit" value="Send" />
                        </div>
                        {/* errors will return when field validation fails  */}
                        {(errors.email || errors.name || errors.message) && <p className='text-center text-xl bg-white py-[5px] border-2 border-yellow-400 text-primary '>One or more fields have an error. Please check and try again.</p>}
                    </form>
                </div>
            </div>
            <span className='absolute w-full bottom-0'>
                <img className='w-full h-[25px] rotate-180' src={roughImage} alt="" />
            </span>
        </section>
    );
};

export default SentEmail;