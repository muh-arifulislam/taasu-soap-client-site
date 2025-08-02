import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { IBlog } from "../../types/blog";
import truncateByWords from "../../utils/truncateByWords";
import { NavLink } from "react-router-dom";

dayjs.extend(relativeTime);

const BlogCard = ({ data }: { data: IBlog }) => {
  return (
    <div className="card w-full">
      <figure>
        <img
          src={
            data.featuredImage ??
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt="blog_image"
          className="rounded-[1rem]"
        />
      </figure>
      <div className="card-body px-0">
        <NavLink to={`/blogs/${data._id}`}>
          <h2 className="card-title">{data?.title}</h2>
        </NavLink>
        <p>{truncateByWords(data?.summary, 15, 90)}</p>
        <div className="card-actions">
          <div className="flex items-center gap-2">
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content w-10 rounded-full">
                <span className="text-xl">A</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-md">Admin</h4>
              <h4 className="font-medium text-sm text-slate-500">
                {dayjs(data?.createdAt).fromNow()}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
