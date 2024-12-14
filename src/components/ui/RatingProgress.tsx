import { FaStar } from "react-icons/fa";

type PropsType = {
  star: 1 | 2 | 3 | 4 | 5;
  value: number;
  total: number;
};

const RatingProgress = ({ value, total, star }: PropsType) => {
  const variantColorCss = {
    5: "progress-success",
    4: "progress-accent",
    3: "progress-info",
    2: "progress-warning",
    1: "progress-error",
  };

  return (
    <div className="flex items-center">
      <span className="mr-1 text-slate-500">{star}</span>
      <span className="mr-2">
        <FaStar className="text-amber-400" />
      </span>
      <progress
        className={`progress ${variantColorCss[star]} w-full mr-1`}
        value={Math.ceil((value * 100) / total)}
        max="100"
      ></progress>
      <span className="text-slate-500">{value}</span>
    </div>
  );
};

export default RatingProgress;
