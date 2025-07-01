import { useAppSelector } from "../../redux/hook";
import { selectCart } from "../../redux/features/cart/cartSlice";
import CartTable from "../../components/Table/CartTable";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../../redux/features/user/userApi";
import { FaCartShopping } from "react-icons/fa6";
import useCalculateSubtotal from "../../utils/calculateSubtotal";

const Cart = () => {
  const cartItems = useAppSelector(selectCart);

  const navigate = useNavigate();

  const { data, isLoading } = useGetUserQuery(undefined);

  const handleProcessCheckout = () => {
    if (cartItems.length > 0 && data?.success) {
      const payload = {
        items: cartItems,
        user: data?.data?._id,
        totalAmount: subtotal,
      };

      sessionStorage.setItem("shopping_session", JSON.stringify(payload));
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  const subtotal = useCalculateSubtotal();

  const sessionData = sessionStorage.getItem("shopping_session");
  useEffect(() => {
    if (sessionData && data?.success) {
      navigate("/checkout");
    }
  }, [isLoading]);
  return (
    <div className="container mx-auto px-4">
      <div className="my-10">
        <h1 className="text-3xl font-semibold">Checkout</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-0 sm:gap-x-10 gap-y-10">
          <div className="col-span-2">
            {cartItems?.length > 0 ? (
              <CartTable data={cartItems} />
            ) : (
              <div className="text-center w-full h-full flex items-center justify-center py-8">
                <div>
                  <div className="flex items-center justify-center">
                    <FaCartShopping size={68} />
                  </div>
                  <p className="text-3xl font-bold mb-3">
                    Your Cart Is Currently Empty!
                  </p>
                  <p className="w-[70%] mx-auto mb-4">
                    Before process to checkout you must add some products to
                    your shopping cart. You will find a lot of interesting
                    products on our "Shop" page.
                  </p>
                  <NavLink to={`/shop`}>
                    <button className="btn btn-primary">Return to Shop</button>
                  </NavLink>
                </div>
              </div>
            )}
          </div>
          <div className="border p-4">
            <div className="flex justify-between items-center">
              <h4 className="text-md font-semibold">Subtotal</h4>
              <p>${subtotal}</p>
            </div>
            <div className="divider" />
            <div className="mb-4">
              <div className="flex items-end">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">What is your name?</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs rounded-r-none focus:outline-none"
                  />
                </label>
                <button className="btn btn-primary rounded-l-none ">
                  Apply
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p>Delivery Charge</p>
              <p>$0.00</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Discount</p>
              <p>$0.00</p>
            </div>
            <div className="divider" />
            <div className="flex justify-between items-center font-bold mb-4">
              <p className="">Grant Total</p>
              <p>${subtotal}</p>
            </div>
            <div>
              <button
                onClick={() => {
                  handleProcessCheckout();
                }}
                disabled={!(cartItems.length > 0)}
                className="btn btn-primary text-white w-full text-lg font-normal"
              >
                Processed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
