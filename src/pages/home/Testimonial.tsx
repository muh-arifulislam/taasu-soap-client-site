import CardFeature from "../../components/Card/CardFeature";

const Testimonial = () => {
  return (
    <section className="mt-[100px] lg:mx-[100px] mx-[20px] text-center">
      <h1 className="mb-[20px] font-secondary">
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
      <div className="flex lg:flex-row flex-col  gap-[20px]">
        <CardFeature />
        <CardFeature />
        <CardFeature />
      </div>
    </section>
  );
};

export default Testimonial;
