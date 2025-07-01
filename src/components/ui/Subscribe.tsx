import image from "../../assets/icons/content-box-bg.svg";
const Subscribe = () => {
  return (
    <div
      className=" my-12 p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0"
      style={{ background: `url(${image})` }}
    >
      <h2 className="font-secondary text-primary text-xl dark:text-slate-900">
        Keep uo to date...
      </h2>
      <div className="flex gap-0 md:gap-[10px]">
        <input
          type="text"
          placeholder="Enter your email"
          className="inline-block input input-bordered w-[100%] max-w-xl rounded-none dark:text-white/90"
        />
        <button className="btn btn-primary text-white text-lg rounded-none">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
