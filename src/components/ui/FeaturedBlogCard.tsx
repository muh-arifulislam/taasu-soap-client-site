import { BiCalendar } from "react-icons/bi";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IBlog } from "../../types/blog";
import dayjs from "dayjs";

const FeaturedBlogCard = ({ data }: { data: IBlog }) => {
  return (
    <div
      className="relative w-full h-full bg-no-repeat bg-cover bg-center rounded-xl min-h-[400px]"
      style={{
        backgroundImage: `url("https://www.shutterstock.com/image-photo/blogging-concept-web-blog-social-600nw-2484136087.jpg")`,
      }}
    >
      <div className="absolute bottom-0 left-0 w-full">
        <div className="card backdrop-blur-xl w-full rounded-t-none">
          <div className="card-body p-4">
            <div className="flex items-center justify-between">
              <h2 className="card-title text-white">{data?.title}</h2>
              <NavLink to={"/"}>
                <MdArrowOutward size={20} color="white" />
              </NavLink>
            </div>
            <p className="text-slate-200">{data?.summary}</p>
            <div className="card-actions">
              <div className="flex items-center justify-center gap-10">
                <div className="flex items-center gap-2">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-10 rounded-full">
                      <span className="text-xl">A</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-md text-slate-200">Admin</h4>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="inline-flex w-10 h-10 border rounded-full items-center justify-center">
                    <BiCalendar size={20} color="white" />
                  </span>
                  <span className="text-sm font-medium text-slate-200">
                    {dayjs(data?.createdAt).format("MMMM D, YYYY")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogCard;
