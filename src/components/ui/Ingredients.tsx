import icon1 from "../../assets/icons/lsc-usp-icons.svg";
import icon2 from "../../assets/icons/rough-edge-white.svg";

const Ingredients = () => {
  return (
    <div className="bg-secondary pt-[30px] pb-[40px] relative mb-[100px]">
      <img className="w-[50%] mx-[auto]" src={icon1} alt="" />
      <p className="absolute bottom-[0] w-full">
        <img className="w-full h-[25px] rotate-180" src={icon2} alt="" />
      </p>
    </div>
  );
};

export default Ingredients;
