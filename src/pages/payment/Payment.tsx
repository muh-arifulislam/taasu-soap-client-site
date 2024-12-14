import { IoCardOutline, IoHomeOutline } from "react-icons/io5";
import Stepper from "../../components/Stepper/Stepper";
import { TiDocumentText } from "react-icons/ti";
import { useEffect, useState } from "react";
import { usePlaceOrderMutation } from "../../redux/features/order/orderApi";
import { toast } from "sonner";
import OrderConfirmedModal from "../../components/Modal/OrderConfirmedModal";
import { useAppDispatch } from "../../redux/hook";
import { emptyCart } from "../../redux/features/cart/cartSlice";
import { FaCreditCard } from "react-icons/fa";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckoutForm from "./StripeCheckoutForm";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

const steps = [
  {
    id: 1,
    label: "Address",
    icon: <IoHomeOutline />,
    isComplete: true,
  },
  {
    id: 2,
    label: "Payment Method",
    icon: <IoCardOutline />,
    isComplete: true,
  },
  {
    id: 3,
    label: "Complete",
    icon: <TiDocumentText />,
    isComplete: false,
  },
];

const stripePromise = loadStripe(
  "pk_test_51L3CzjIh6oFyk2898M9rKncSQrWXYgy7mvPZBysrRU1f5LtKxZwJRgrbKOtwz6diPKrNMo4EgR6a73WJgCkFA00g00afXexeG7"
);

const options: StripeElementsOptions = {
  mode: "payment",
  amount: 1099,
  currency: "usd",
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

const Payment = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const isOrderCompleted = queryParams.get("completed") ? true : false;

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    "Stripe" | "COD"
  >("Stripe");

  const session = sessionStorage.getItem("shopping_session");

  const dispatch = useAppDispatch();

  const [handlePlaceOrder] = usePlaceOrderMutation();

  const HandCashOnDelivery = async () => {
    if (session) {
      const toastId = toast.loading("Your order is placing...");

      const sessionData = JSON.parse(session);

      const res = await handlePlaceOrder({
        data: sessionData,
        method: "cash-on-delivery",
      });

      if (res?.data?.success) {
        toast.success("Your order have been placed.", {
          id: toastId,
          style: { display: "none" },
        });
        (
          document.getElementById("order_confirmed_modal") as HTMLDialogElement
        )?.showModal();

        //clear session
        sessionStorage.removeItem("shopping_session");
        //clear cart items
        dispatch(emptyCart());
      } else {
        toast.error("Your order did not placed...!", { id: toastId });
        console.log("failed to place order.");
      }
    }
  };

  const handleStripeDelivery = async () => {
    if (session) {
      const toastId = toast.loading("Your order is placing...");

      const sessionData = JSON.parse(session);

      const res = await handlePlaceOrder({
        data: sessionData,
        method: "stripe",
      });

      if (res?.data?.success) {
        toast.success("Your order have been placed.", {
          id: toastId,
          style: { display: "none" },
        });
        (
          document.getElementById("order_confirmed_modal") as HTMLDialogElement
        )?.showModal();

        //clear session
        sessionStorage.removeItem("shopping_session");
        //clear cart items
        dispatch(emptyCart());
      } else {
        toast.error("Your order did not placed...!", { id: toastId });
        console.log("failed to place order.");
      }
    }
  };

  useEffect(() => {
    if (isOrderCompleted && session) {
      handleStripeDelivery();
    }
  }, []);

  return (
    <>
      <div className="bg-slate-50">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-3xl font-medium">Payment Method</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 my-10 gap-x-0 sm:gap-x-10">
            <div className="col-span-2 m-0 sm:mr-10 mb-10">
              <Stepper steps={steps} />

              <div className="my-8">
                <p className="text-xl font-semibold text-slate-800">
                  Payment Method
                </p>
              </div>

              {/* credit and debit card  */}
              <div
                className={`border rounded-md p-4 b bg-white shadow ${
                  selectedPaymentMethod === "Stripe" ? "border-green-600" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <input
                      onClick={() => {
                        setSelectedPaymentMethod("Stripe");
                      }}
                      type="radio"
                      name="radio-1"
                      className={`radio h-5 w-5 ${
                        selectedPaymentMethod === "Stripe"
                          ? "radio-success"
                          : ""
                      }`}
                      defaultChecked
                    />
                    <p className="text-lg font-semibold">
                      Credit or Debit Card
                    </p>
                  </div>
                  <FaCreditCard />
                </div>
                <div
                  className={`transition-all ease-linear duration-500 ${
                    selectedPaymentMethod === "Stripe"
                      ? "max-h-[600px]"
                      : " max-h-0 overflow-hidden"
                  }`}
                >
                  <Elements stripe={stripePromise} options={options}>
                    <StripeCheckoutForm />
                  </Elements>
                </div>
              </div>
              {/* Cash on Delivery  */}
              <div
                className={`flex items-center gap-4 bg-white p-4 my-4 border rounded-md ${
                  selectedPaymentMethod === "COD" ? "border-green-500" : ""
                }`}
              >
                <input
                  onClick={() => {
                    setSelectedPaymentMethod("COD");
                  }}
                  type="radio"
                  name="radio-1"
                  className={`radio h-5 w-5 ${
                    selectedPaymentMethod === "COD" ? "radio-success" : ""
                  }`}
                  defaultChecked
                />
                <p>Cash on Delivery</p>
              </div>

              <div>
                <button
                  onClick={HandCashOnDelivery}
                  className={`btn btn-wide btn-primary ${
                    selectedPaymentMethod == "COD" ? "inline" : "hidden"
                  }`}
                >
                  Confirm Order
                </button>
              </div>
            </div>
            <div className="">
              <div className="border p-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-md font-semibold">Subtotal</h4>
                  <p>$200.0</p>
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
                  <p>$800</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Discount</p>
                  <p>$800</p>
                </div>
                <div className="divider" />
                <div className="flex justify-between items-center font-bold mb-4">
                  <p className="">Grant Total</p>
                  <p>$800</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrderConfirmedModal />
    </>
  );
};

export default Payment;
