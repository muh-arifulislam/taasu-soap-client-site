import Button from "../Button/Button";

import image from "../../assets/images/TILE_ARTISAN.jpg";

const ProductAlt = () => {
  return (
    <div className="relative pb-[30px] bg-slate-100">
      <img src={image} alt="" />
      <div
        className="py-[15px] px-[20px] flex justify-between absolute bottom-[12px] w-full"
        style={{ backgroundColor: "rgba(48, 62, 71, 0.8)" }}
      >
        <div className="text-white">
          <h2 className="text-[20px]">Eco Warrior</h2>
          <p className="text[18px]">From $4.50</p>
        </div>
        <Button variant="secondary">Shop Now</Button>
      </div>
    </div>
  );
};

export default ProductAlt;
