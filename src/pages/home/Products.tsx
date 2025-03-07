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
          if (idx < 3) {
            return item;
          }
        }
      );
      setProducts(selectedProducts);
    }
  }, [isLoading, data]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] lg:px-[100px] px-[30px]">
      {isLoading && <LoadingComponent />}
      {products.length &&
        products.map((product: TProduct) => (
          <Product data={product} key={product?._id} />
        ))}
    </section>
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
