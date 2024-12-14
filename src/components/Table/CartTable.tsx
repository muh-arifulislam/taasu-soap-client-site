import { TCartItem } from "../../types";
import CartTableRow from "./CartTableRow";

type PropsType = {
  data: TCartItem[];
};

const CartTable = ({ data }: PropsType) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <CartTableRow key={item.product} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
