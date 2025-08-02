import Button from "../Button/Button";
import { TProduct } from "../../types";
import { NavLink } from "react-router-dom";

const HomeProductCard = ({ data }: { data: TProduct }) => {
  return (
    <div className="text-center flex flex-col items-center justify-between border p-4 rounded-lg">
      <div>
        <div className="py-[20px]">
          <a href="#">
            <img
              className="w-[100%] mx-[auto]"
              src={
                "https://res.cloudinary.com/dmiorpsf7/image/upload/v1738833868/taasu-soap-website/Org-Home-2_dbwagp.jpg"
              }
              alt="product_image"
            />
          </a>
        </div>
        <h2 className="text-[18px] mb-3 font-bold text-slate-600">
          {data?.name}
        </h2>
      </div>
      <div className="w-full">
        <h4 className="text-xl mb-[20px] font-bold">${data?.price}</h4>
        <NavLink to={"/shop"}>
          <Button>Shop Now</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeProductCard;
