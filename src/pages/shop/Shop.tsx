import bannerBg from "../../assets/images/TESTIMONIALS_BANNER.jpg";
import PageHeader from "../../components/ui/PageHeader";
import { useEffect, useState } from "react";
import ProductCard from "../../components/Card/ProductCard";
import Breadcrum from "../../components/Breadcrum/Breadcrum";
import { useGetAllProductsQuery } from "../../redux/features/product/productApi";
import { NavLink } from "react-router-dom";
const Shop = () => {
  const banner = {
    title: "Shop",
    description: `The search for natural, organic, affordable soap is over.
      Beautifully fragranced or naturally un-fragranced. Hair, body or shave. Everyday essential or pampering gift. You’re just one step away from natural organic beauty delivered to your door.`,
    image: bannerBg,
    btn: {
      url: "www.google.com",
      title: "How to play",
    },
  };

  const [products, setProducts] = useState([]);

  const { data, isLoading } = useGetAllProductsQuery(undefined);

  useEffect(() => {
    console.log(data);
    if (data?.success) {
      setProducts(data?.data);
    }
  }, [isLoading]);

  return (
    <section className="">
      <Breadcrum
        items={[
          { label: "Home", path: "/" },
          { label: "Shop", path: "/shop" },
        ]}
      />
      <PageHeader data={banner} />
      <div className="relative py-[20px] bg-secondary bottom-edge-secondary">
        <div className="flex justify-center items-center gap-[50px] ">
          <h2 style={{ fontSize: "5rem" }} className="font-secondary">
            Special Offers!
          </h2>
          <div className="text-xl">
            <p>Save up to 20% when you buy in Bulk</p>
            <p>FREE delivery on orders over £30</p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-3 lg:mx-[100px] mx-[10px] mt-[50px] gap-8 my-10">
        <div className="lg:block hidden">
          <div className="bg-slate-100 p-5 ">
            <div className="mb-5">
              <h2 className="text-2xl font-caveat-brush font-bold mb-2">
                By Fragrance
              </h2>
              <ul>
                <li className="mb-1 text-lg">
                  <NavLink to={`/shop`}>Citrus</NavLink>
                </li>
                <li className="mb-1 text-lg">
                  <NavLink to={`/shop`}>Exotic</NavLink>
                </li>
                <li className="mb-1 text-lg">
                  <NavLink to={`/shop`}>Floral</NavLink>
                </li>
                <li className="mb-1 text-lg">
                  <NavLink to={`/shop`}>Mixed</NavLink>
                </li>
                <li className="mb-1 text-lg">
                  <NavLink to={`/shop`}>Unscented</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl mb-2 font-caveat-brush font-bold">
                By For
              </h2>
              <ul>
                <li className="mb-1 text-lg">
                  <NavLink to={`/shop`}>Face and Body</NavLink>
                </li>
                <li className="mb-1 text-lg">
                  <NavLink to={`/shop`}>Gifting</NavLink>
                </li>
                <li className="mb-1 text-lg">
                  <NavLink to={`/shop`}>Hair</NavLink>
                </li>
                <li className="mb-1 text-lg">
                  <NavLink to={`/shop`}>Hands</NavLink>
                </li>
                <li className="mb-1 text-lg">
                  <NavLink to={`/shop`}>Sensitive</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-[10px]">
            {products?.map((product, idx) => (
              <ProductCard key={idx} product={product}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
