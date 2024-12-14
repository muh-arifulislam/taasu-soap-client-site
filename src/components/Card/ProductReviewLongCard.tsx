import { useState } from "react";
import { FaStar, FaThumbsDown, FaThumbsUp } from "react-icons/fa";

const ProductReviewLongCard = () => {
  const [like, setLike] = useState(31);
  const [dislike, setDislike] = useState(5);

  return (
    <div className="shadow-xl p-3 sm:p-0 rounded">
      <div className="flex flex-col sm:flex-row">
        <div className="flex items-center gap-1 relative">
          <div className="w-full max-w-16 bg-slate-100 p-1 sm:p-0 rounded-full sm:rounded-none sm:max-w-[120px]">
            <img
              className="rounded-full sm:rounded"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
          <div className="block sm:hidden">
            <div className="mb-1">
              <p className="text-sm font-semibold">Jolly Jon</p>
              <p className="text-xs text-slate-400">October 8, 2001</p>
              <p className="text-xs text-slate-400">1 days ago</p>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="absolute top-0 right-0 block sm:hidden">
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setLike(like + 1);
                }}
                className="btn btn-accent btn-xs sm:btn-sm"
              >
                <FaThumbsUp />
                <span>{like}</span>
              </button>
              <button
                onClick={() => {
                  setDislike(dislike + 1);
                }}
                className="btn btn-xs sm:btn-sm"
              >
                <FaThumbsDown />
                <span>{dislike}</span>
              </button>
            </div>
          </div>
        </div>
        <div className="shrink-0 hidden sm:block">
          <div className="p-3 flex items-center justify-center">
            <div>
              <p className="text-sm font-semibold mb-2">Jolly Jon</p>
              <p className="text-xs text-slate-400">October 8, 2001</p>
              <p className="text-xs text-slate-400">1 days ago</p>
            </div>
          </div>
        </div>

        <div className="  w-full p-2">
          <div className="hidden sm:flex items-center justify-between">
            <div className="flex items-center gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  setLike(like + 1);
                }}
                className="btn btn-accent btn-xs sm:btn-sm"
              >
                <FaThumbsUp />
                <span>Like</span>
                <span>{like}</span>
              </button>
              <button
                onClick={() => {
                  setDislike(dislike + 1);
                }}
                className="btn btn-xs sm:btn-sm"
              >
                <FaThumbsDown />
                <span>Dislike</span>
                <span>{dislike}</span>
              </button>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-sm">
              <q>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                impedit provident aperiam, quod sit quaerat dolorum amet unde
                reiciendis harum expedita hic! Unde expedita sequi modi nesciunt
                dignissimos nisi libero.
              </q>
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div className="shadow-xl">
    //   <div className="grid grid-cols-4 sm:grid-cols-12">
    //     <div className="">
    //       <div className="p-4 flex items-center justify-center">
    //         <FaUser size={42} />
    //       </div>
    //       <div className="block sm:hidden">
    //         <div className="p-3  flex items-center justify-center">
    //           <div>
    //             <p className="text-sm font-semibold mb-2">Joby Jon</p>
    //             <p className="text-xs text-slate-400">October 8, 2001</p>
    //             <p className="text-xs text-slate-400">1 days ago</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="hidden sm:block">
    //       <div className="p-3 bg-yellow-50 flex items-center justify-center">
    //         <div>
    //           <p className="text-sm font-semibold mb-2">Joby Jon</p>
    //           <p className="text-xs text-slate-400">October 8, 2001</p>
    //           <p className="text-xs text-slate-400">1 days ago</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-span-3 sm:col-span-10 bg-slate-50 w-full p-2">
    //       <div className="flex items-center justify-between">
    //         <div className="flex items-center gap-1">
    //           <FaStar />
    //           <FaStar />
    //           <FaStar />
    //           <FaStar />
    //           <FaStar />
    //         </div>
    //         <div className="flex items-center gap-4">
    //           <button className="p-1 bg-slate-300 rounded">
    //             <FaThumbsUp />
    //           </button>
    //           <button className="p-1 bg-slate-300 rounded">
    //             <FaThumbsDown />
    //           </button>
    //         </div>
    //       </div>
    //       <div className="mt-2">
    //         <p className="text-sm">
    //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
    //           impedit provident aperiam, quod sit quaerat dolorum amet unde
    //           reiciendis harum expedita hic! Unde expedita sequi modi nesciunt
    //           dignissimos nisi libero.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductReviewLongCard;
