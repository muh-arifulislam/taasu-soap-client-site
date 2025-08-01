import { useState } from "react";

import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const StripeCheckoutForm = ({
  handleStripePayment,
}: {
  handleStripePayment: () => void;
}) => {
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

    await handleStripePayment();
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
