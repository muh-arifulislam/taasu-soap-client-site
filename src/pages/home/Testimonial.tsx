import CardFeature from "../../components/Card/CardFeature";

import contentImgWhite from "../../assets/icons/content-box-bg.svg";
import contentImgPink from "../../assets/icons/content-box-bg-pink.svg";
import contentImgNude from "../../assets/icons/content-box-bg-nude.svg";

const Testimonial = () => {
  return (
    <section className="mt-[100px] lg:mx-[100px] mx-[20px] text-center">
      <h1 className="mb-[20px] font-secondary text-xl md:text-2xl leading-10">
        Simple ingredients you understand…
      </h1>
      <h4 className="text-[20px] mb-[20px] font-bold">
        Vegan, cruelty-free and hand-crafted in the UK, our soaps are made using
        the finest natural ingredients, all ethically sourced.
      </h4>
      <p className="text-[18px] mb-[20]">
        Our luxurious range of natural handmade soaps are made using the finest,
        pure ingredients, including only pure essential oils to create our
        uplifting, nurturing scents. Our natural soaps and all-natural skincare
        products gently work in harmony with your skin making them perfect for
        all skin types and ages. Our Little Beast range caters for the furry
        friends in your life! We are proud to produce beautiful soaps crafted
        with love and sustainability in mind. Browse our soap shop and find the
        perfect little soap for you.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <CardFeature
          title="Free Delivery"
          description="When you spend over £30, you can now enjoy free shipping on our soaps!"
          image={contentImgPink}
        />
        <CardFeature
          title="Bulk Buy"
          description="Save by buying our soaps in cases, available for up to 1/3 off RRP."
          image={contentImgNude}
        />
        <CardFeature
          title="Available on Amazon"
          description="Save on postage & packing by purchasing via Amazon Prime."
          image={contentImgWhite}
        />
      </div>
    </section>
  );
};

export default Testimonial;
