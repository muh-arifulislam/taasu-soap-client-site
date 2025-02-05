const AddressCardSkeleton = () => {
  return (
    <div className="flex items-center justify-between my-4 gap-4">
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      <div className="flex w-24 flex-col gap-4">
        <div className="skeleton h-10 w-full rounded-md"></div>
        <div className="skeleton h-10 w-full rounded-md"></div>
      </div>
    </div>
  );
};

export default AddressCardSkeleton;
