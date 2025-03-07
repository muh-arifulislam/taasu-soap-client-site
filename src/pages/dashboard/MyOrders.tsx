import { FaArrowRightLong } from "react-icons/fa6";
import { useGetMyOrdersQuery } from "../../redux/features/order/orderApi";
import { TOrder } from "../../types/order";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { selectCart } from "../../redux/features/cart/cartSlice";
import useCalculateSubtotal from "../../utils/calculateSubtotal";
import { useState } from "react";

const MyOrders = () => {
  const [status, setStatus] = useState("");
  const { data, isLoading } = useGetMyOrdersQuery(status);

  const cartItems = useAppSelector(selectCart);

  const subtotal = useCalculateSubtotal();

  if (isLoading) {
    return (
      <>
        <div>loading</div>
      </>
    );
  }

  const { data: orders } = data;

  return (
    <div className="">
      <div>
        {cartItems?.length > 0 && (
          <div className="flex flex-col gap-4 sm:flex-row items-center justify-between bg-white p-4 shadow rounded border-green-500 border-t-2 mb-4">
            <div>
              You have {cartItems.length} items selected on the cart. Subtotal $
              {subtotal}
            </div>
            <div>
              <NavLink to={"/cart"}>
                <button className="btn btn-primary">Go To Cart</button>
              </NavLink>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-4 sm:flex-row items-center justify-between bg-white p-4 shadow rounded border-green-500 border-t-2 mb-4">
          <div className="flex items-center gap-2">
            <p className="text-2xl">My Orders</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <label htmlFor="status">Status:</label>
              <select
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                className=" select select-bordered w-full max-w-xs"
              >
                <option disabled>Select Any</option>
                <option value={""}>All</option>
                <option value={`Pending`}>Pending</option>
                <option value={`Approved`}>Approved</option>
                <option value={`Processing`}>Processing</option>
                <option value={`Shipped`}>Shipped</option>
                <option value={`Completed`}>Completed</option>
                <option value={`Halted`}>Halted</option>
                <option value={`Canceled`}>Canceled</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded">
          {orders.map((order: TOrder) => (
            <div key={order._id}>
              <div className="mb-4 ">
                <p>
                  Your Order ID:{" "}
                  <span className="text-green-600">{order?._id}</span>
                  <span className=""> ({order?.items?.length} items)</span>
                </p>
              </div>
              <div className="flex gap-4">
                <span className="inline-block px-3 py-1 border border-green-500 text-green-500 rounded">
                  {order?.orderStatus}
                </span>
                <NavLink
                  to={`/ordertrack?orderId=${order?._id}`}
                  className="px-3 py-1 bg-blue-500 text-white rounded flex items-center gap-2"
                >
                  Track My Order
                  <FaArrowRightLong />
                </NavLink>
              </div>
              <div className="divider"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
