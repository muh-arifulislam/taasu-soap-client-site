import { useEffect, useState } from "react";
import BlogCard from "../../components/Card/BlogCard";
import {
  useGetBlogsQuery,
  useGetFeaturedBlogsQuery,
} from "../../redux/features/blog/blogApi";
import { IBlog } from "../../types/blog";
import { scrollToTop } from "../../utils/scrollToTop";
import BlogCardSkeleton from "../../components/Skeleton/BlogCardSkeleton";
import FeaturedBlogCard from "../../components/ui/FeaturedBlogCard";

const Blog = () => {
  const [tab, setTab] = useState<
    "" | "making" | "instructions" | "experiences"
  >("");

  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const limit = 9;

  const { data: featuredBlogData, isLoading: isLoadingFeaturedBlog } =
    useGetFeaturedBlogsQuery(undefined);

  const { data, isLoading, isFetching } = useGetBlogsQuery({
    page,
    limit,
    searchTerm,
    category: tab,
  });

  useEffect(() => {
    if (data?.success) {
      scrollToTop(650);
    }
  }, [page]);

  return (
    <div className="my-10 max-w-[1200px] mx-auto px-4">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-3 mb-5">
        <div className="col-span-1 sm:col-span-2">
          {isLoadingFeaturedBlog ? (
            <div>
              <BlogCardSkeleton />
            </div>
          ) : (
            <FeaturedBlogCard data={featuredBlogData?.data[0]} />
          )}
        </div>
        <div className="">
          {isLoadingFeaturedBlog ? (
            <BlogCardSkeleton />
          ) : (
            <BlogCard data={featuredBlogData?.data[1]} />
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-20">
        <div role="tablist" className="tabs tabs-bordered w-[80%]">
          <a
            role="tab"
            onClick={() => setTab("")}
            className={`tab ${tab === "" && "tab-active"}`}
          >
            All
          </a>
          <a
            role="tab"
            onClick={() => setTab("making")}
            className={`tab ${tab === "making" && "tab-active"}`}
          >
            Making
          </a>
          <a
            role="tab"
            onClick={() => setTab("instructions")}
            className={`tab ${tab === "instructions" && "tab-active"}`}
          >
            Instructions
          </a>
          <a
            role="tab"
            onClick={() => setTab("experiences")}
            className={`tab ${tab === "experiences" && "tab-active"}`}
          >
            Experiences
          </a>
        </div>
        <div className="w-full">
          <label className="max-w-full sm:max-w-sm input input-bordered flex items-center gap-2 ml-auto">
            <input
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(`${e.target.value}`);
                setPage(1);
              }}
              type="text"
              className="grow"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-3">
        {isFetching || isLoading ? (
          <>
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
          </>
        ) : (
          <>
            {data?.data?.map((blog: IBlog) => (
              <BlogCard key={blog._id} data={blog} />
            ))}
          </>
        )}
      </div>
      <div className="flex items-center justify-end my-5">
        <div className="max-w-[300px] join grid grid-cols-2">
          <button
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
            className="join-item btn btn-outline"
            disabled={page === 1}
          >
            Previous page
          </button>
          <button
            onClick={() => setPage(page + 1)}
            className="join-item btn btn-outline"
            disabled={!data?.meta?.hasMore}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
