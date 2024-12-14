import { useState } from "react";

import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const StripeCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError?.message ?? null);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    fetch("http://localhost:5000/api/v1/payments/create-intent", {
      method: "POST",
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.success) {
          const { client_secret: clientSecret } = data.data;
          if (stripe && clientSecret) {
            const { error } = await stripe.confirmPayment({
              //`Elements` instance that was used to create the Payment Element
              elements,
              clientSecret,
              confirmParams: {
                return_url: "http://localhost:5173/payment?completed=true",
              },
            });
            if (error) {
              // This point will only be reached if there is an immediate error when
              // confirming the payment. Show error to your customer (for example, payment
              // details incomplete)
              setErrorMessage(error?.message ?? null);
            } else {
              // Your customer will be redirected to your `return_url`. For some payment
              // methods like iDEAL, your customer will be redirected to an intermediate
              // site first to authorize the payment, then redirected to the `return_url`.
            }
          }
        }
      });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <PaymentElement />
      <button
        type="submit"
        className="btn btn-success text-white mt-5 px-8"
        disabled={!stripe || !elements}
      >
        Pay
      </button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default StripeCheckoutForm;
