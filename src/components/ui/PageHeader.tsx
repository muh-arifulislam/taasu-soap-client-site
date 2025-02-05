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
    <div
      className="relative h-[70vh] sm:h-[80vh] bg-no-repeat bg-cover bg-center z-0"
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

            <div>{data.btn && <Button>{data?.btn?.title}</Button>}</div>
          </div>
        </div>
        <div className="hidden sm:flex justify-center items-center">
          {data.image2 && (
            <img className="w-[80%] h-[80%]" src={data.image2} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
