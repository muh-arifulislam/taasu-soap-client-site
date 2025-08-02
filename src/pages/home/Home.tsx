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
      {/* <Ingredients /> */}
      <Products />
      <Testimonial></Testimonial>
      <OnlinePartner></OnlinePartner>
      <OtherProducts />
      <div className="container mx-auto px-4 py-10">
        <Subscribe />
      </div>
    </>
  );
};

export default Home;
