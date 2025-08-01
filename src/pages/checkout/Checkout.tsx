import { IoCardOutline, IoHomeOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import Stepper from "../../components/Stepper/Stepper";
import CardShippingAddress from "../../components/Card/CardShippingAddress";
import { useGetAllAddressQuery } from "../../redux/features/shippingAddress/shippingAddressApi";
import { TShippingAddress } from "../../types/shippingAddress";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddAddress from "../../components/ui/AddAddress";
import useCalculateSubtotal from "../../utils/calculateSubtotal";

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
    isComplete: false,
  },
  {
    id: 3,
    label: "Review",
    icon: <TiDocumentText />,
    isComplete: false,
  },
];

const Checkout = () => {
  const session = sessionStorage.getItem("shopping_session");
  const navigate = useNavigate();

  const [selectedShippingAddress, setSelectedShippingAddress] =
    useState<null | TShippingAddress>(null);

  const { data, isLoading } = useGetAllAddressQuery(undefined);

  useEffect(() => {
    if (data?.data?.length) {
      setSelectedShippingAddress(data.data[0]);
    }
  }, [isLoading, data]);

  const handleDeliverData = () => {
    if (session) {
      const sessionData = JSON.parse(session);

      const payload = {
        ...sessionData,
        shippingAddress: selectedShippingAddress?._id,
      };

      sessionStorage.setItem("shopping_session", JSON.stringify(payload));
      navigate("/payment");
    }
  };

  const subtotal = useCalculateSubtotal();
  return (
    <div className="w-full max-w-6xl mx-auto px-4 my-10">
      <div className="mb-10">
        <h1 className="text-3xl font-medium">Shipping Address</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 my-10 gap-x-0 sm:gap-x-10">
        <div className="col-span-2 m-0 sm:mr-10 mb-10">
          <Stepper steps={steps} />
          <div className="mb-5"></div>
          <div className="mb-5">
            <p className="text-lg font-bold">Select a delivery address</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              alias explicabo voluptatum libero aspernatur sapiente! Rerum ea
              qui veritatis distinctio?
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {data?.data?.map((address: TShippingAddress) => (
              <CardShippingAddress
                key={address?._id}
                data={address}
                selectedShippingAddress={selectedShippingAddress}
                setSelectedShippingAddress={setSelectedShippingAddress}
              />
            ))}
          </div>
          <div>
            <button
              onClick={handleDeliverData}
              className="btn btn-wide text-lg bg-slate-950 text-slate-100 hover:bg-slate-700"
              disabled={selectedShippingAddress === null}
            >
              Deliver Here
            </button>
          </div>
          <div className="divider"></div>
          <div>
            <div className="">
              <AddAddress />
            </div>
          </div>
        </div>
        <div className="">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
