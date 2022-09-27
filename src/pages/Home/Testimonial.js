import React from 'react';
import Feature from '../../shared/Feature';

const Testimonial = () => {
    return (
        <section className='mt-[100px] mx-[100px] text-center'>
            <h2 className='text-[22px] mb-[20px]'>
                Simple ingredients you understand…
            </h2>
            <h4 className='text-[20px] mb-[20px] font-bold'>
                Vegan, cruelty-free and hand-crafted in the UK, our soaps are made using the finest natural ingredients, all ethically sourced.
            </h4>
            <p className='text-[18px] mb-[20]'>
            Our luxurious range of natural handmade soaps are made using the finest, pure ingredients, including only pure essential oils to create our uplifting, nurturing scents. Our natural soaps and all-natural skincare products gently work in harmony with your skin making them perfect for all skin types and ages.  Our Little Beast range caters for the furry friends in your life! We are proud to produce beautiful soaps crafted with love and sustainability in mind. Browse our soap shop and find the perfect little soap for you.
            </p>
            <div className='flex gap-[20px]'>
                <Feature></Feature>
                <Feature></Feature>
                <Feature></Feature>
            </div>
        </section>
    );
};

export default Testimonial;