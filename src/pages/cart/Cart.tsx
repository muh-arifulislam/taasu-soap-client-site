import { useAppSelector } from "../../redux/hook";
import { selectCart } from "../../redux/features/cart/cartSlice";
import CartTable from "../../components/Table/CartTable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../../redux/features/user/userApi";

const Cart = () => {
  const [subtotal, setSubtotal] = useState<number>(0);

  const cartItems = useAppSelector(selectCart);

  const navigate = useNavigate();

  const { data } = useGetUserQuery(undefined);

  const handleProcessCheckout = () => {
    if (cartItems.length > 0 && data?.success) {
      const payload = {
        items: cartItems,
        user: data?.data?._id,
        totalAmount: subtotal,
      };

      sessionStorage.setItem("shopping_session", JSON.stringify(payload));
      navigate("/checkout");
    }
  };

  useEffect(() => {
    if (cartItems.length) {
      const total = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      setSubtotal(total);
    }
  }, [cartItems]);

  const sessionData = sessionStorage.getItem("shopping_session");
  useEffect(() => {
    if (sessionData) {
      navigate("/checkout");
    }
  }, []);
  return (
    <div className="container mx-auto px-4">
      <div className="my-10">
        <h1 className="text-3xl font-semibold">Checkout</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-0 sm:gap-x-10 gap-y-10">
          <div className="col-span-2">
            <CartTable data={cartItems} />
          </div>
          <div className="border p-4">
            <div className="flex justify-between items-center">
              <h4 className="text-md font-semibold">Subtotal</h4>
              <p>${subtotal?.toFixed(2)}</p>
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
              <p>${subtotal?.toFixed(2)}</p>
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
