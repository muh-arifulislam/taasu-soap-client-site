import { TProduct } from "../../types";
import BundleProductCard from "./BundleProductCard";
import HomeProductCard from "./HomeProductCard";
import ShopProductCard from "./ShopProductCard";

interface ProductComponent extends React.FC<{ data: TProduct }> {
  Home: typeof HomeProductCard;
  Shop: typeof ShopProductCard;
  Bundle: typeof BundleProductCard;
}

const Product: ProductComponent = ({ data }) => {
  return <ShopProductCard data={data} />;
};

Product.Home = HomeProductCard;
Product.Shop = ShopProductCard;
Product.Bundle = BundleProductCard;

export default Product;
