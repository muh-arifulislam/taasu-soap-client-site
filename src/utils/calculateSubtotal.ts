import { selectCart } from "../redux/features/cart/cartSlice";
import { useAppSelector } from "../redux/hook";

const useCalculateSubtotal = () => {
  const cartItems = useAppSelector(selectCart);

  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return total.toFixed(2);
};

export default useCalculateSubtotal;
