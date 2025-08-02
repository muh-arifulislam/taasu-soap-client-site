import { useEffect, useState } from "react";

import ingredientsImage from "../../assets/icons/lsc-usp-icons.svg";

import { Link, useParams } from "react-router-dom";

import ThumbImagesSkeleton from "../../components/Skeleton/ThumbImagesSkeleton";
import { FaStar } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
import RatingProgress from "../../components/ui/RatingProgress";
import ProductReviewLongCard from "../../components/Card/ProductReviewLongCard";
import ReviewSlider from "../../components/Slider/ReviewSlider";

import soapImg1 from "../../assets/images/Org-Home-1.jpg";
import soapImg2 from "../../assets/images/Org-Home-2.jpg";
import soapImg3 from "../../assets/images/Org-Home-3.jpg";
import { useGetProductByIdQuery } from "../../redux/features/product/productApi";
import { TProduct } from "../../types";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { addToCart, selectCart } from "../../redux/features/cart/cartSlice";
import PageHeader from "../../components/ui/PageHeader";
import ProductImagesGallery from "../../components/Slider/ProductImagesGallery";

const ProductDetails = () => {
  const [reviews, setReviews] = useState(5);
  const { productId } = useParams();
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [active, setActive] = useState("ingredients");

  const { data, isLoading } = useGetProductByIdQuery(productId as string);

  const images = [soapImg1, soapImg2, soapImg3];

  const dispatch = useAppDispatch();

  const cartProducts = useAppSelector(selectCart);

  const [isProductInCart, setIsProductInCart] = useState(false);

  const handleAddToBasket = (payload: TProduct, quantity: number) => {
    dispatch(
      addToCart({
        product: payload._id,
        quantity: quantity < 1 ? 1 : quantity,
        price: payload.price,
        image: "",
      })
    );
  };

  useEffect(() => {
    if (cartProducts.length > 0 && data?.success) {
      const findItemInCart = cartProducts.find(
        (item) => item.product === data?.data?._id
      );
      if (findItemInCart) {
        setIsProductInCart(true);
      } else {
        setIsProductInCart(false);
      }
    }
  }, [handleAddToBasket]);

  if (isLoading) {
    return <PageLoaderSkeleton />;
  }

  return (
    <>
      {data.data && (
        <div className="">
          <PageHeader
            breadcrumbs={[
              {
                label: "Home",
                url: "/",
              },
              {
                label: "Shop",
                url: "/shop",
              },
              {
                label: data?.data?.name ?? "Product Name",
              },
            ]}
          />
          <div className="mt-8 lg:mx-[100px] mx-[15px] grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="">
              <div>
                {images ? (
                  <ProductImagesGallery images={images} />
                ) : (
                  <ThumbImagesSkeleton />
                )}
              </div>
            </div>
            <div>
              <h1 className="font-secondary text-primary font-bold leading-[2.5rem]  sm:leading-[4rem] text-xl sm:text-[1.6rem] mb-2">
                {data?.data?.name}
              </h1>
              <div className="flex items-center mb-4 gap-3">
                <p className="text-3xl font-semibold">
                  ${data?.data?.price}
                  <small className="text-sm opacity-60"> inc.VAT</small>
                </p>
                <span className="text-primary opacity-80">
                  <small className="">SKU: {data?.data?.productId}</small>
                </span>
                <button className="px-3 py-1 border rounded">In stock</button>
              </div>

              <div className="flex gap-[5px]">
                <span className="py-[10px] pl-[10px] border-2 border-primary rounded-md">
                  <input
                    className="outline-0 w-[45px] h-[30px] text-lg"
                    type="number"
                    min="1"
                    value={orderQuantity}
                    onChange={(event) =>
                      setOrderQuantity(Number(event.target.value))
                    }
                  />
                </span>
                <button
                  onClick={() => {
                    handleAddToBasket(data.data, orderQuantity);
                  }}
                  className={`btn bg-primary text-white px-[30px] font-bold text-xl rounded-md ${
                    isProductInCart ? "btn-disabled" : "btn-primary"
                  }`}
                  disabled={isProductInCart}
                >
                  {isProductInCart ? "Already added" : "Add to basket"}
                </button>
              </div>

              <img className="mt-[40px]" src={ingredientsImage} alt="" />
              <div className="my-5">
                {data?.data?.descriptions?.map((des: string, idx: number) => (
                  <h2 key={idx} className="text-xl mb-[20px]">
                    {des}
                  </h2>
                ))}
                {data?.data?.advantages?.map((adv: string, idx: number) => (
                  <p key={idx} className="text-xl mb-[20px]">
                    <span className="mr-[5px]">✓</span>
                    {adv}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:mx-[100px] mx-[15px]">
            <ul className="flex lg:flex-row flex-col text-xl font-bold">
              <li
                style={
                  active === "ingredients"
                    ? {
                        backgroundColor: "white",
                        borderBottom: "1px solid white",
                      }
                    : { backgroundColor: "#f0e8e6" }
                }
                className="rounded-sm bg-secondary border py-[10px] px-[20px]"
              >
                <Link
                  className="w-full"
                  to="#"
                  onClick={() => setActive("ingredients")}
                >
                  Ingredients
                </Link>
              </li>
              <li
                style={
                  active === "information"
                    ? {
                        backgroundColor: "white",
                        borderBottom: "1px solid white",
                      }
                    : { backgroundColor: "#f0e8e6" }
                }
                className="rounded-sm bg-secondary border py-[10px] px-[20px]"
              >
                <Link to="#" onClick={() => setActive("information")}>
                  Additional Information
                </Link>
              </li>
              <li
                style={
                  active === "reviews"
                    ? {
                        backgroundColor: "white",
                        borderBottom: "1px solid white",
                      }
                    : { backgroundColor: "#f0e8e6" }
                }
                className="rounded-sm bg-secondary border py-[10px] px-[20px]"
              >
                <Link to="#" onClick={() => setActive("reviews")}>
                  Reviews
                </Link>
              </li>
            </ul>
            <div className="my-10">
              <div
                style={
                  active === "ingredients"
                    ? { display: "block" }
                    : { display: "none" }
                }
                id="ingredients"
                className="hidden"
              >
                {data?.data?.ingredients?.map(
                  (ingredient: string, idx: number) => (
                    <p key={idx} className="text-xl mb-[20px]">
                      {ingredient}
                    </p>
                  )
                )}
              </div>
              <div
                style={
                  active === "information"
                    ? { display: "block" }
                    : { display: "none" }
                }
                id="information"
                className="hidden"
              >
                <div className="overflow-x-auto my-10">
                  <table className="table table-zebra w-full border-2 border-black">
                    <tbody>
                      <tr className="border-b-2 border-black">
                        <td className="border-r-2 border-black">Weight</td>
                        <td>{data?.data?.addInformation?.weight}</td>
                      </tr>
                      <tr className="border-b-2 border-black">
                        <td className="border-r-2 border-black">Dimensions</td>
                        <td>{data?.data?.addInformation?.dimension}</td>
                      </tr>
                      <tr className="border-b-2 border-black">
                        <td className="border-r-2 border-black">Directions</td>
                        <td>{data?.data?.addInformation?.direction}</td>
                      </tr>
                      <tr>
                        <td className="border-r-2 border-black">Warning</td>
                        <td>{data?.data?.addInformation?.warnings}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                style={
                  active === "reviews"
                    ? { display: "block" }
                    : { display: "none" }
                }
                id="reviews"
                className="hidden"
              >
                <div className="py-10">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <OverallRatings />
                    <RatingsBreakdown />
                    <div className="col-span-1 md:col-span-2 shadow-md p-2">
                      <p className="flex items-center gap-2 font-semibold">
                        <span>
                          <FaCircleDot size={20} className="text-blue-600" />
                        </span>
                        Most Helpful Reviews
                      </p>
                      <div className="p-3">
                        <ReviewSlider />
                      </div>
                    </div>
                  </div>
                  <div className="my-6 grid grid-cols-1 gap-6">
                    {[...Array(reviews)].map((idx: number) => (
                      <ProductReviewLongCard key={idx} />
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => {
                        setReviews(reviews + 5);
                      }}
                      className="btn sm:btn-wide btn-success text-white"
                    >
                      Load more
                    </button>
                    <button
                      onClick={() => {
                        if (reviews > 5) {
                          setReviews(reviews - 5);
                        }
                      }}
                      className="btn sm:btn-wide btn-accent text-white"
                    >
                      Show less
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;

const PageLoaderSkeleton = () => {
  return (
    <div className="container mx-auto px-5 my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-full">
          <div className="skeleton h-[300px] w-[90%] mx-auto"></div>
          <div className="flex items-center justify-center gap-4 my-5">
            <div className="skeleton h-24 w-full"></div>
            <div className="skeleton h-24 w-full"></div>
            <div className="skeleton h-24 w-full"></div>
            <div className="skeleton h-24 w-full"></div>
          </div>
        </div>
        <div className="flex flex-col justify-around">
          <div className="skeleton h-6 w-full mb-5"></div>
          <div className="flex items-center gap-4 mb-5">
            <div className="skeleton h-4 w-36"></div>
            <div className="skeleton h-4 w-36"></div>
            <div className="skeleton h-4 w-36"></div>
          </div>
          <div className="flex items-center gap-4 mb-5">
            <div className="skeleton h-36 w-36"></div>
            <div className="skeleton h-36 w-36"></div>
          </div>
          <div className="skeleton h-4 w-full mb-2"></div>
          <div className="skeleton h-4 w-full mb-2"></div>
          <div className="skeleton h-4 w-full mb-2"></div>
          <div className="skeleton h-4 w-full mb-2"></div>
        </div>
      </div>
    </div>
  );
};

const OverallRatings = () => {
  return (
    <div className="shadow-md p-2">
      <div className="">
        <h2 className="text-xl font-semibold mb-3">Overall Rating</h2>
        <div className="text-center">
          <p className="text-4xl font-semibold mb-2">
            4.5 <span className="text-3xl text-slate-500">/5</span>
          </p>
          <div className="flex items-center justify-center gap-2 text-xl mb-2 text-amber-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-slate-400 font-semibold">202 reviews</p>
        </div>
      </div>
    </div>
  );
};

const RatingsBreakdown = () => {
  return (
    <div className="shadow-md p-2">
      <p className="flex items-center gap-2">
        <span>
          <FaCircleDot size={20} className="text-blue-600" />
        </span>
        Rating Breakdown
      </p>
      <div className="mt-2 px-4">
        <RatingProgress star={5} value={90} total={202} />
        <RatingProgress star={4} value={55} total={202} />
        <RatingProgress star={3} value={29} total={202} />
        <RatingProgress star={2} value={18} total={202} />
        <RatingProgress star={1} value={10} total={202} />
      </div>
    </div>
  );
};
