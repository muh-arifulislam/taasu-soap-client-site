const ThumbImagesSkeleton = () => {
  return (
    <div>
      <div className="flex w-full flex-col gap-4">
        <div className="skeleton h-60 w-full"></div>
        <div className="flex justify-between gap-4">
          <div className="skeleton h-20 w-full"></div>
          <div className="skeleton h-20 w-full"></div>
          <div className="skeleton h-20 w-full"></div>
          <div className="skeleton h-20 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ThumbImagesSkeleton;
