import { NavLink } from "react-router-dom";
import bg from "../../assets/images/hero02.webp";

import { FaArrowRightLong } from "react-icons/fa6";
const DiscountSection = () => {
  const width = window.innerWidth;
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-x-0 md:gap-x-8 gap-y-8">
        <div className="bg-rose-200/40 col-span-2 flex flex-col items-center justify-center px-10 py-28">
          <h2 className="text-6xl font-bold mb-2 text-red-300">10%</h2>
          <div className="mb-2">
            <span className="inline-block bg-red-300 h-[2px] w-10 "></span>
          </div>
          <p className="text-lg font-medium text-slate-600/40">
            Discount on your first order.
          </p>
        </div>
        <div className="col-span-3 p-10 relative z-0">
          <div
            className="absolute top-0 left-0 right-0 bottom-0 -z-10"
            style={{
              background: `url(${bg})`,
              backgroundPosition: `${width < 570 ? "0% 50%" : "100% 48.49%"}`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="z-10 h-full flex items-center">
            <div>
              <div>
                <h2 className="text-xl md:text-3xl font-bold mb-2">
                  Your skin will thank you.
                </h2>
                <div className="mb-2">
                  <span className="inline-block bg-purple-900 h-[3px] w-14 "></span>
                </div>
                <p className="text-lg font-medium text-slate-400">
                  Start your skincare today.
                </p>
              </div>
              <div className="mt-10">
                <NavLink
                  to={"/shop"}
                  className={
                    "font-medium flex items-center gap-2 hover:underline text-fuchsia-400"
                  }
                >
                  Shop Now
                  <FaArrowRightLong className="text-sm" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
