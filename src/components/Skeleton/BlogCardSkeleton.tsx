const BlogCardSkeleton = () => {
  return (
    <div className="flex w-full flex-col gap-4 ">
      <div className="skeleton h-48"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="flex items-center gap-4">
        <div className="skeleton h-10 w-10 shrink-0 rounded-full"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-2 w-12"></div>
          <div className="skeleton h-2 w-28"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
