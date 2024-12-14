import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { TCartItem } from "../../types";
import { useAppDispatch } from "../../redux/hook";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  updateCartQuantity,
} from "../../redux/features/cart/cartSlice";
import { useEffect, useState } from "react";

type PropsType = {
  data: TCartItem;
};

const CartTableRow = ({ data }: PropsType) => {
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart({ id }));
  };

  const [quantity, setQuantity] = useState(data.quantity);

  useEffect(() => {
    setQuantity(data.quantity);
  }, [data.quantity]);

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(decreaseQuantity({ id: data.product }));
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(increaseQuantity({ id: data.product }));
  };

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setQuantity(value);
    e.target.onblur = () => {
      if (value > 0) {
        dispatch(
          updateCartQuantity({
            id: data.product,
            quantity: value,
          })
        );
      } else {
        dispatch(
          updateCartQuantity({
            id: data.product,
            quantity: 1,
          })
        );
        setQuantity(1);
      }
    };
  };

  return (
    <tr key={data.product}>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>{data.price.toFixed(2)}</td>
      <td className="">
        <div className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg">
          <div className="flex items-center gap-x-1.5">
            <button
              onClick={handleDecrease}
              type="button"
              className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              aria-label="Decrease"
            >
              <FaMinus />
            </button>
            <input
              onChange={handleChange}
              className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              //   style={{ MozAppearance: "textfield" }}
              type="number"
              aria-roledescription="Number field"
              value={quantity.toFixed(0)}
              id="cartItemQuantity"
            />
            <button
              onClick={handleIncrease}
              type="button"
              className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              aria-label="Increase"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </td>
      <th>{(data.price * data.quantity).toFixed(2)}</th>
      <th>
        <button
          onClick={() => {
            handleRemoveFromCart(data.product);
          }}
          className="btn btn-ghost btn-sm"
        >
          <FaTrash className="text-red-500" />
        </button>
      </th>
    </tr>
  );
};

export default CartTableRow;
