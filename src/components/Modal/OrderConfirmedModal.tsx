import { useNavigate } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";

const OrderConfirmedModal = () => {
  const navigate = useNavigate();
  return (
    <dialog
      id="order_confirmed_modal"
      className="modal max-w-sm mx-auto text-center"
    >
      <div className="modal-box">
        <div>
          <div className="w-20 h-20 mx-auto my-4 bg-slate-200  rounded-full relative">
            <div className="absolute z-0 w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 bg-slate-300 rounded-full"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                <IoBagHandleOutline size={20} />
              </div>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">Your order is confirmed</h3>
          <p className="text-sm leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            voluptatum modi eaque dicta nam molestias nisi
          </p>
        </div>
        <div className="modal-action">
          <form method="dialog" className="w-full">
            {/* if there is a button in form, it will close the modal */}
            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  navigate("/my-section/orders");
                }}
                className="btn btn-primary"
              >
                View Order
              </button>
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="btn btn-outline"
              >
                Back to Home
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default OrderConfirmedModal;
