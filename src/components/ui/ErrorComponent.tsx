import { BiErrorCircle } from "react-icons/bi";

type PropsType = {
  message?: string;
};

const ErrorComponent = ({ message }: PropsType) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center p-6 bg-red-100 border border-red-300 rounded-lg shadow-md w-full max-w-lg">
        <div className="flex items-center gap-2 text-red-700">
          <BiErrorCircle className="text-2xl" />
          <span className="text-xl font-semibold">Error</span>
        </div>
        <p className="text-sm text-red-600 mt-2">
          {message ??
            "Something went wrong...! Please check your internet or refresh the page."}
        </p>
      </div>
    </div>
  );
};

export default ErrorComponent;
