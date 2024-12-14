import { FaStar } from "react-icons/fa";

const ProductReview = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <div className="shrink-0">
        <div className="flex flex-row sm:flex-col gap-2">
          <div className="w-full max-w-16 bg-slate-100 rounded-full p-1">
            <img
              className="rounded-full"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
          <div>
            <p className="text-sm font-semibold ">Joby John</p>
            <p className="text-xs">October 24, 2017</p>
            <p className="text-xs">1 days ago</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex items-center gap-1 mb-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          commodi quos esse atque voluptate dolore magnam amet labore architecto
          fugiat.
        </p>
      </div>
    </div>
  );
};

export default ProductReview;
