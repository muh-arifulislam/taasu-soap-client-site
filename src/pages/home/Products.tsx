import { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../../redux/features/product/productApi";
import { TProduct } from "../../types";
import Product from "../../components/Product";

const Products = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data?.success) {
      const selectedProducts = data.data.filter(
        (item: TProduct, idx: number) => {
          if (idx < 4) {
            return item;
          }
        }
      );
      setProducts(selectedProducts);
    }
  }, [isLoading, data]);

  return (
    <div className="container mx-auto px-4 pt-10 md:pt-16 lg:pt-20 pb-5 md:pb-8 lg:pb-10">
      <div className="text-center mb-12">
        <h1 className="mb-2 font-secondary text-xl md:text-2xl leading-10 text-gray-900 dark:text-white/90">
          Our Latest Products
        </h1>
        <h4 className="text-gray-800 dark:text-gray-200 w-full max-w-2xl mx-auto text-center">
          Discover our newest and most popular products, carefully selected for
          you.
        </h4>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px]">
        {isLoading && <LoadingComponent />}
        {products.length > 0 &&
          products.map((product: TProduct) => (
            <Product.Home data={product} key={product?._id} />
          ))}
      </section>
    </div>
  );
};

export default Products;

const LoadingComponent = () => (
  <>
    <div className="skeleton min-h-[350px] w-full"></div>
    <div className="skeleton min-h-[350px] w-full"></div>
    <div className="skeleton min-h-[350px] w-full"></div>
    <div className="skeleton min-h-[350px] w-full"></div>
  </>
);
