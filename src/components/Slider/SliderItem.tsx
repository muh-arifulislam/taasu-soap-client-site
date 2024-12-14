import divBg from "../../assets/icons/content-box-bg.svg";
import Button from "../Button/Button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SliderItem = ({ data }: { data: any }) => {
  return (
    <div className="relative">
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
    </div>
  );
};

export default SliderItem;
