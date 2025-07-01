import { NavLink } from "react-router-dom";
import { TProduct } from "../../types";
import { useDispatch } from "react-redux";
import { addToCart, selectCart } from "../../redux/features/cart/cartSlice";
import { useAppSelector } from "../../redux/hook";
import { useEffect, useState } from "react";

const ProductCard = ({ product }: { product: TProduct }) => {
  const cartProducts = useAppSelector(selectCart);

  const dispatch = useDispatch();

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

  const renderRatingIcons = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span
          key={`full-${i}`}
          aria-label="Full star"
          className="text-yellow-400"
        >
          ★
        </span>
      );
    }
    if (halfStar) {
      stars.push(
        <span key="half" aria-label="Half star" className="text-yellow-400">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
            <defs>
              <linearGradient id="half-grad">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" stopOpacity="1" />
              </linearGradient>
            </defs>
            <polygon
              points="10,1 12.59,6.99 19,7.64 14,12.26 15.18,18.63 10,15.27 4.82,18.63 6,12.26 1,7.64 7.41,6.99"
              fill="url(#half-grad)"
            />
          </svg>
        </span>
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span
          key={`empty-${i}`}
          aria-label="Empty star"
          className="text-gray-300"
        >
          ★
        </span>
      );
    }
    return <span className="flex">{stars}</span>;
  };

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
    <div className="card bg-base-100  shadow-sm border rounded-xl ">
      <figure className="px-10 pt-10">
        <img
          src={
            "https://res.cloudinary.com/dmiorpsf7/image/upload/v1738833868/taasu-soap-website/Org-Home-2_dbwagp.jpg"
          }
          alt=""
        />
      </figure>
      <div className="card-body items-center text-center">
        <NavLink to={`/shop/${product._id}`}>
          <h2 className="font-bold text-slate-600">{product?.name}</h2>
        </NavLink>
        <h4 className="text-xl font-semibold">
          {renderRatingIcons(product?.rating ?? 5)}
        </h4>
        <h4 className="mb-[9px] text-xl font-bold text-slate-900">
          ${product?.price}
        </h4>

        <div className="card-actions w-full">
          <button
            onClick={() => {
              handleAddToCart(product);
            }}
            className={`btn btn-primary text-white w-full py-[10px] rounded-md ${
              isProductInCart ? "btn-disabled" : ""
            }`}
          >
            {isProductInCart ? "Already added" : "Add to basket"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

{
  /* <div className="border shadow-sm rounded-xl p-[20px] text-center">
      <div
        onClick={() => navigate(`/shop/${product._id}`)}
        className="hover:cursor-pointer"
      >
        <div>
          <img
            src={
              "https://res.cloudinary.com/dmiorpsf7/image/upload/v1738833868/taasu-soap-website/Org-Home-2_dbwagp.jpg"
            }
            alt=""
          />
          <h2 className="font-bold my-[9px]">{product?.name}</h2>
          <h4 className="mb-[9px]">
            ${product?.price} <span>inc. VAT</span>
          </h4>
        </div>
        <h4 className="mb-[40px]">(One review)</h4>
      </div>
      <div>
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
    </div> */
}
