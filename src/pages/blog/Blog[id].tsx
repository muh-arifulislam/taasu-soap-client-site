import { useParams } from "react-router-dom";
import { useGetBlogByIdQuery } from "../../redux/features/blog/blogApi";
import { IBlog } from "../../types/blog";
import RichDataComponent from "../../components/ui/RichDataComponent";

const BlogDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetBlogByIdQuery({ id: id as string });

  if (isLoading) {
    return (
      <>
        <div>loading...</div>
      </>
    );
  }

  return (
    <>
      <div className="max-w-[1200px] mx-auto px-4 my-10">
        <div>
          <div className="relative">
            <img
              src="https://blog.feedspot.com/wp-content/uploads/2018/06/uk-soap-making-copy.jpg"
              alt="car!"
              className="w-full rounded-lg object-cover"
            />
            {/* Subtle Blended Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/100 to-transparent mix-blend-overlay"></div>

            {/* Content Area */}
            <div className="absolute bottom-0 sm:bottom-6 left-2 sm:left-6 right-2 sm:right-6 p-2 sm:p-4 text-slate-100">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <h2 className="text-lg sm:text-2xl font-semibold">
                  {data?.data?.title}
                </h2>
                <div className="hidden sm:flex items-center gap-2">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-12 rounded-full">
                      <span className="text-xl">
                        {data?.data?.user?.firstName[0]}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h6 className="text-xs text-slate-200">Written by</h6>
                    <h4 className="font-bold text-md">
                      {data?.data?.user?.firstName +
                        " " +
                        data?.data?.user?.lastName}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <RichDataComponent
              htmlContent={(data?.data as IBlog)?.mainContent}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
