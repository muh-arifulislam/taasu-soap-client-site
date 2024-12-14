import { IoCardOutline, IoHomeOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import Stepper from "../../components/Stepper/Stepper";
import CardShippingAddress from "../../components/Card/CardShippingAddress";
import { useGetAllAddressQuery } from "../../redux/features/shippingAddress/shippingAddressApi";
import { TShippingAddress } from "../../types/shippingAddress";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
            >
              Deliver Here
            </button>
          </div>
          <div className="divider"></div>
          {/* <div>
            <div className="">
              <div className="grid grid-cols-1 gap-4">
                <div className="">
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Street Address</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full  outline-none"
                    />
                  </label>
                </div>
                <div className="">
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Street Address</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full  outline-none"
                    />
                  </label>
                </div>
                <div className="">
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Street Address</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full  outline-none"
                    />
                  </label>
                </div>
                <div className="">
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Street Address</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full  outline-none"
                    />
                  </label>
                </div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">
                      Pick the best fantasy franchise
                    </span>
                  </div>
                  <select className="select select-bordered">
                    <option disabled selected>
                      Pick one
                    </option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                  </select>
                </label>
                <div className="">
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Street Address</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full  outline-none"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer justify-start gap-4">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                    <span className="label-text font-medium">
                      Use as my default address
                    </span>
                  </label>
                </div>
                <div>
                  <button className="btn btn-wide text-lg bg-slate-950 text-slate-100 hover:bg-slate-700">
                    Add New Address
                  </button>
                </div>
              </div>
            </div>
          </div> */}
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
  );
};

export default Checkout;
