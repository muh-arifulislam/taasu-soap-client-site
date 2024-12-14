import { FaArrowRightLong } from "react-icons/fa6";
import { useGetMyOrdersQuery } from "../../redux/features/order/orderApi";
import { TOrder } from "../../types/order";
import { NavLink } from "react-router-dom";

const MyOrders = () => {
  const { data, isLoading } = useGetMyOrdersQuery(undefined);

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
        <div className="flex flex-col gap-4 sm:flex-row items-center justify-between bg-white p-4 shadow rounded border-green-500 border-t-2 mb-4">
          <div>আপনার কার্টে ২টি পণ্য সিলেক্ট করা আছে, মোট 788.0 TK.</div>
          <div>
            <button className="btn btn-primary">Go To Cart</button>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row items-center justify-between bg-white p-4 shadow rounded border-green-500 border-t-2 mb-4">
          <div className="flex items-center gap-2">
            <p className="text-2xl">My Orders</p>
            <span className="text-md text-slate-600">
              (Your Total Order: 4)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <label htmlFor="status">Status:</label>
              <select className=" select select-bordered w-full max-w-xs">
                <option disabled>Select Any</option>
                <option>Placed</option>
                <option>Approved</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Completed</option>
                <option>Halt</option>
                <option>Canceled</option>
              </select>
            </div>
            <button className="btn btn-primary">Submit</button>
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
