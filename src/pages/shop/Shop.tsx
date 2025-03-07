import bannerBg from "../../assets/images/TESTIMONIALS_BANNER.jpg";
import PageHeader from "../../components/ui/PageHeader";
import { useEffect, useState } from "react";
import ProductCard from "../../components/Card/ProductCard";
import Breadcrum from "../../components/Breadcrum/Breadcrum";
import { useGetAllProductsQuery } from "../../redux/features/product/productApi";
import { NavLink } from "react-router-dom";
import ErrorComponent from "../../components/ui/ErrorComponent";

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

  const [products, setProducts] = useState<[]>([]);

  const { data, isLoading, isError } = useGetAllProductsQuery(undefined);

  useEffect(() => {
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
      <div className="relative py-8 sm:py-[60px] bg-secondary bottom-edge-secondary">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-[50px] text-center">
          <h2 className="font-secondary text-xl sm:text-[2.5rem] font-caveat-brush">
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
          {isLoading && <LoadingComponent />}
          {isError && <ErrorComponent />}
          {products && <ContentComponent data={products} />}
        </div>
      </div>
    </section>
  );
};

export default Shop;

const ContentComponent = ({ data }: { data: [] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
    {data.map((product, idx) => (
      <ProductCard key={idx} product={product}></ProductCard>
    ))}
  </div>
);

const LoadingComponent = () => (
  <div className="grid lg:grid-cols-3 grid-cols-2 gap-[10px]">
    <div className="skeleton min-h-[350px] w-full"></div>
    <div className="skeleton min-h-[350px] w-full"></div>
    <div className="skeleton min-h-[350px] w-full"></div>
  </div>
);
