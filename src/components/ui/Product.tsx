import Button from "../Button/Button";
import { TProduct } from "../../types";
import { NavLink } from "react-router-dom";

const Product = ({ data }: { data: TProduct }) => {
  return (
    <div className="text-center flex flex-col items-center justify-between">
      <div>
        <div className="py-[20px]">
          <a href="#">
            <img
              className="w-[100%] mx-[auto]"
              src={data?.images[0]}
              alt="product_image"
            />
          </a>
        </div>
        <h2 className="text-[18px] mb-[20px] font-bold">{data?.name}</h2>
      </div>
      <div>
        <h4 className="text-[18px] mb-[20px]">${data?.price}</h4>
        <NavLink to={"/shop"}>
          <Button>Shop Now</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Product;
