import { useEffect, useState } from "react";
import Product from "../../components/ui/Product";
import { useGetAllProductsQuery } from "../../redux/features/product/productApi";
import { TProduct } from "../../types";

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
    <div className="container mx-auto px-4 py-10">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-center">
          Our Latest Products
        </h2>
        <h4 className="text-lg text-center text-gray-600 mb-4">
          Discover our newest and most popular products, carefully selected for
          you.
        </h4>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px]">
        {isLoading && <LoadingComponent />}
        {products.length &&
          products.map((product: TProduct) => (
            <Product data={product} key={product?._id} />
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
  </>
);
