import Ingredients from "../../components/ui/Ingredients";
import Subscribe from "../../components/ui/Subscribe";
import OnlinePartner from "./OnlinePartner";
import OtherProducts from "./OtherProducts";
import Products from "./Products";
import Testimonial from "./Testimonial";
import TopBanner from "./TopBanner";

const Home = () => {
  return (
    <>
      <TopBanner />
      <Ingredients />
      <Products />
      <Testimonial></Testimonial>
      <OnlinePartner></OnlinePartner>
      <OtherProducts />
      <Subscribe />
    </>
  );
};

export default Home;
