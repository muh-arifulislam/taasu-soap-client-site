import { useNavigate } from "react-router-dom";
import { TProduct } from "../../types";
import { useDispatch } from "react-redux";
import { addToCart, selectCart } from "../../redux/features/cart/cartSlice";
import { useAppSelector } from "../../redux/hook";
import { useEffect, useState } from "react";

const ProductCard = ({ product }: { product: TProduct }) => {
  const cartProducts = useAppSelector(selectCart);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const productName = product.name.replaceAll(" ", "-");

  const handleAddToCart = (payload: TProduct) => {
    dispatch(
      addToCart({
        product: payload._id,
        quantity: 1,
        price: payload.price,
        image: "",
      })
    );
  };

  const [isProductInCart, setIsProductInCart] = useState(false);

  useEffect(() => {
    if (cartProducts.length > 0) {
      const findItemInCart = cartProducts.find(
        (item) => item.product === product._id
      );
      if (findItemInCart) {
        setIsProductInCart(true);
      } else {
        setIsProductInCart(false);
      }
    }
  }, [handleAddToCart]);
  return (
    <div className="shadow-lg p-[20px] text-center">
      <div
        onClick={() => navigate(`/shop/${productName}`)}
        className="hover:cursor-pointer"
      >
        <img src={product?.images[0]} alt="" />
        <h2 className="font-bold my-[9px]">{product?.name}</h2>
        <h4 className="mb-[9px]">
          ${product?.price} <span>inc. VAT</span>
        </h4>
      </div>
      <h4 className="mb-[40px]">(One review)</h4>
      <button
        onClick={() => {
          handleAddToCart(product);
        }}
        className={`btn bg-slate-300 w-full py-[10px] rounded-md ${
          isProductInCart ? "btn-disabled" : ""
        }`}
      >
        {isProductInCart ? "Added to Cart" : "Add to basket"}
      </button>
    </div>
  );
};

export default ProductCard;
