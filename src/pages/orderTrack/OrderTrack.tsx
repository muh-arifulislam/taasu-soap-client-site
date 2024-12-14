import { FaRegStar } from "react-icons/fa";
import locationIcon from "../../assets/icons/icon-delivery-location.svg";
import { useLocation } from "react-router-dom";
import { useGetOrderByIdQuery } from "../../redux/features/order/orderApi";

const OrderTrack = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const orderId = queryParams.get("orderId") ?? "";
  const { data, isLoading, isFetching, isError } =
    useGetOrderByIdQuery(orderId);

  if (isLoading || isFetching) {
    return (
      <>
        <div>loading</div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <div>error</div>
      </>
    );
  }

  const { data: order } = data;
  console.log(order);
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
                  Oh Md Ariful Islam! Need your review to improve our service
                  better.
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
                  Paduar Bazar Biswaroad , (HOME) , সদর দক্ষিণ পৌরসভা , সদর
                  দক্ষিণ , কুমিল্লা , বাংলাদেশ
                </p>
                <p className="text-sm text-slate-600">Phone: 8801995212706</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-5">
          <div className="bg-amber-500 pt-7 pb-20">
            <div className="flex items-center justify-center gap-4 px-6">
              <div className="w-16 h-16 bg-white rounded-full"></div>
              <h4 className="text-lg sm:text-2xl font-bold text-white">
                This order has been delivered
              </h4>
            </div>
          </div>
          <div className="mx-6 bg-white -mt-14 p-6 border rounded">
            <h3 className="text-md sm:text-xl font-bold text-primary">
              Order No: 47148315767262
            </h3>
            <div className="divider" />

            <div className="">
              {/* <div className="flex items-start gap-4">
                <div className="bg-slate-100 w-[60px] h-[60px] rounded-full flex items-center justify-center">
                  <img
                    className="w-9 h-9 opacity-30"
                    src={
                      "https://www.rokomari.com/static/200/images/svg/icons/rok-icon-order-placed.svg"
                    }
                    alt=""
                  />
                </div>
                <div className="">
                  <h4 className="font-semibold mb-2 text-slate-700">
                    Order Placed
                  </h4>
                  <h5 className="text-sm mb-2 text-slate-600">
                    13 Nov 2024, 2:16 PM
                  </h5>
                  <p className="text-sm mb-2 text-slate-600">
                    অর্ডারটি গ্রহন করা হয়েছে। কনফার্মেশনের জন্য অপেক্ষমান।
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTrack;
