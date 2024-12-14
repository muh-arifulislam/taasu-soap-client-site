import divBg from "../../assets/icons/content-box-bg.svg";
import Button from "../Button/Button";
import { TBanner } from "../../types";

type PropsType = {
  data: TBanner;
};

const BannerSlider = ({ data }: PropsType) => {
  return (
    <div
      className="relative h-[70vh] sm:h-[80vh] bg-center bg-cover bg-no-repeat z-0"
      style={{
        backgroundImage: `url(${data.image})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-neutral opacity-30 -z-10"></div>
      <div className="z-10 px-[10px] lg:px-[100px]  lg:py-[100px] py-[50px] grid  grid-cols-1 sm:grid-cols-2">
        <div className="mx-6 sm:mx-0 flex flex-col justify-center">
          <div
            style={{ backgroundImage: `url(${divBg})` }}
            className="px-[40px] pt-[40px] pb-[20px]"
          >
            <h2 className="font-secondary mb-[10px]">{data.title}</h2>

            <h4 className="text-md sm:text-xl mb-[20px]">{data.description}</h4>

            <div>{data.btn && <Button>{data.btnText}</Button>}</div>
          </div>
        </div>
        <div className="hidden sm:flex justify-center items-center">
          {data.secondaryImage && (
            <img className="w-[80%] h-[80%]" src={data.secondaryImage} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;

{
  /* <div className="relative">
      <img src={data.image} alt="" />
      <div className="lg:px-[100px] px-[10px] lg:py-[100px] py-[50px] absolute top-0 w-full h-full grid lg:grid-cols-2 grid-cols-1">
        <div className="flex flex-col justify-center">
          <div
            style={{ backgroundImage: `url(${divBg})` }}
            className="px-[40px] pt-[40px] pb-[20px]"
          >
            <h2 className="font-secondary mb-[10px]">{data.title}</h2>

            <h4 className="text-xl mb-[20px]">{data.description}</h4>

            <div>{data.btn && <Button>{data.btnText}</Button>}</div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {data.secondaryImage && (
            <img className="w-[80%] h-[80%]" src={data.secondaryImage} alt="" />
          )}
        </div>
      </div>
    </div> */
}
