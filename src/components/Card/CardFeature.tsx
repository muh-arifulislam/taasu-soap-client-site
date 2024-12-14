import image from "../../assets/icons/content-box-bg-pink.svg";

import Button from "../Button/Button";

const CardFeature = () => {
  return (
    <div
      className="mt-[20px] pt-[30px] pb-[20px] px-[20px]"
      style={{ background: `url(${image})` }}
    >
      <h4 className="text-[34px] mb-[10px]">Free Delivery</h4>
      <p className="text-xl mb-[20px]">
        When you spend over £30, you can now enjoy free shipping on our soaps!
      </p>
      <Button variant="secondary">Shop Now</Button>
    </div>
  );
};

export default CardFeature;
