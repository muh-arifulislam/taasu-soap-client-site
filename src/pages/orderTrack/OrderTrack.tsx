/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRegStar } from "react-icons/fa";
import locationIcon from "../../assets/icons/icon-delivery-location.svg";
import { useLocation } from "react-router-dom";
import { useGetOrderByIdQuery } from "../../redux/features/order/orderApi";
import dayjs from "dayjs";

import processing from "../../assets/icons/icon-order-processing.svg";
import delivered from "../../assets/icons/icon-delivered.svg";
import placed from "../../assets/icons/icon-order-placed.svg";
import halt from "../../assets/icons/icon-halt.svg";
import courier from "../../assets/icons/icon-order-courier.svg";

const orderStateIcons: Record<string, string> = {
  Pending: placed,
  Processing: processing,
  Shipped: courier,
  Delivered: courier,
  Completed: delivered,
  Cancelled: halt,
  Halted: halt,
};

const orderStateColors: Record<string, string> = {
  Pending: "bg-yellow-500",
  Processing: "bg-blue-500",
  Shipped: "bg-purple-500",
  Delivered: "bg-green-500",
  Completed: "bg-green-600",
  Cancelled: "bg-red-500",
  Halted: "bg-gray-500",
};

const OrderTrack = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const orderId = queryParams.get("orderId") ?? "";
  const { data, isLoading, isFetching, isError } =
    useGetOrderByIdQuery(orderId);

  if (isLoading || isFetching) {
    return (
      <>
        <div className="w-full h-[80vh] flex items-center justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <div className="w-full h-[80vh] flex items-center justify-center">
          <h2>Something went wrong!</h2>
        </div>
      </>
    );
  }

  const { data: order } = data;

  return (
    <div className="bg-slate-50 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-7 gap-8">
        <div className="col-span-1 sm:col-span-2">
          <div className="bg-white p-8 border mb-8">
            <div className="flex gap-6 items-start">
              <img src={locationIcon} alt="" />
              <div>
                <h4 className="font-medium mb-2">Don't forget to rate</h4>
                <p className="text-sm text-slate-600 mb-4">
                  Oh Mr.! Need your review to improve our service better.
                </p>
                <div className="flex items-center gap-x-3">
                  <FaRegStar className="text-amber-500" size={20} />
                  <FaRegStar className="text-amber-500" size={20} />
                  <FaRegStar className="text-amber-500" size={20} />
                  <FaRegStar className="text-amber-500" size={20} />
                  <FaRegStar className="text-amber-500" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 border border-t-4 border-t-green-500">
            <h5 className="text-xl font-semibold">Delivery Address</h5>
            <div className="divider"></div>
            <div className="flex gap-6 items-start">
              <img src={locationIcon} alt="" />
              <div>
                <h4 className="font-medium mb-2">Address:</h4>
                <p className="text-sm text-slate-600 mb-2">
                  {order?.shippingAddress?.addressLine1},{" "}
                  {order?.shippingAddress?.city}
                </p>
                <p className="text-sm text-slate-600">
                  Phone: {order?.shippingAddress?.mobile}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-5">
          <div className="bg-amber-500 pt-7 pb-20">
            <div className="flex items-center justify-center gap-4 px-6">
              <div
                className={`w-16 h-16 rounded-full ${
                  orderStateColors[order?.orderStatus]
                }`}
              ></div>
              <h4 className="text-lg sm:text-2xl font-bold text-white">
                This order has been {order?.orderStatus}
              </h4>
            </div>
          </div>
          <div className="mx-6 bg-white -mt-14 p-6 border rounded">
            <h3 className="text-md sm:text-xl font-bold text-primary">
              Order No: 47148315767262
            </h3>
            <div className="divider" />

            <div className="">
              {order?.statusHistory?.map((item: any) => (
                <div key={item._id} className="flex items-start gap-4">
                  <div className="bg-slate-100 w-[60px] h-[60px] rounded-full flex items-center justify-center">
                    <img
                      className="w-9 h-9 opacity-30"
                      src={orderStateIcons[item?.status]}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h4 className="font-semibold mb-2 text-slate-700">
                      Order {item?.status}
                    </h4>
                    <h5 className="text-sm mb-2 text-slate-600">
                      {dayjs(item?.timestamp).format("DD MMM YYYY, h:mm A")}
                    </h5>
                    <p className="text-sm mb-2 text-slate-600">
                      {item?.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTrack;
