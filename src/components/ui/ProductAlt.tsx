import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

interface PropsType {
  data: { title: string; price: number; image: string };
}

const ProductAlt: React.FC<PropsType> = ({ data }) => {
  return (
    <div className="relative pb-[30px] bg-slate-100">
      <img src={data.image} alt="product_image" />
      <div
        className="py-[15px] px-[20px] flex justify-between absolute bottom-[12px] w-full"
        style={{ backgroundColor: "rgba(48, 62, 71, 0.8)" }}
      >
        <div className="text-white">
          <h2 className="font-secondary leading-10 text-xl">{data.title}</h2>
          <p className="text[18px]">From ${data.price}</p>
        </div>

        <NavLink to={"/shop"}>
          <Button variant="secondary">Shop Now</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default ProductAlt;
