import divBg from "../../assets/icons/content-box-bg.svg";
import Button from "../Button/Button";

type PropsType = {
  data: {
    description: string;
    image: string;
    image2?: string;
    title: string;
    btn?: {
      url: string;
      title: string;
    };
  };
};

const PageHeader = ({ data }: PropsType) => {
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
            {data.btn && <Button>{data.btn.title}</Button>}
          </div>
        </div>
        <div className="flex justify-center items-center">
          {data.image2 && (
            <img className="w-[80%] h-[80%]" src={data.image2} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
