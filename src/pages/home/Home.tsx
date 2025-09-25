import Subscribe from "../../components/ui/Subscribe";
import DiscountSection from "./DiscountSection";
import OnlinePartner from "./OnlinePartner";
import OtherProducts from "./OtherProducts";
import Products from "./Products";
import Testimonial from "./Testimonial";
import TestimonialSection from "./TestimonialSection";
import TopBanner from "./TopBanner";

import TopProduct from "./TopProduct";
const Home = () => {
  return (
    <>
      <TopBanner />
      {/* <Ingredients /> */}
      <Products />
      <Testimonial></Testimonial>
      <OnlinePartner></OnlinePartner>
      <TopProduct />
      <OtherProducts />
      <DiscountSection />
      <TestimonialSection />
      <div className="container mx-auto px-4 py-10">
        <Subscribe />
      </div>
    </>
  );
};

export default Home;
