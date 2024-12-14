import { useEffect, useState } from "react";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "../../redux/features/user/userApi";
import { BiEdit } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { GiCancel } from "react-icons/gi";
import { toast } from "sonner";

import profileImg from "../../assets/images/astronaut.png";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  addressLine1: string;
  city: string;
  postalCode: string;
};

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      addressLine1: "",
      city: "",
      postalCode: "",
    },
  });

  const { data, isLoading, isError } = useGetUserQuery(undefined);

  const [handleUpdateUser] = useUpdateUserMutation();

  useEffect(() => {
    if (data?.success) {
      const { data: user } = data;
      reset({
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        mobile: user?.mobile,
        addressLine1: user?.addressLine1,
        city: user?.city,
        postalCode: user?.postalCode,
      });
    }
  }, [data, isLoading]);

  if (isLoading) {
    return <>loading</>;
  }

  if (isError) {
    return <>something went wrong</>;
  }

  const onSubmit = async (userPayload: FormData) => {
    const toastId = toast.loading("Updating your profile...");

    const res = await handleUpdateUser({
      id: data?.data?._id,
      data: userPayload,
    });

    if (res?.data?.success) {
      toast.success("Your profile successfully updated.", { id: toastId });
      setIsEditing(false);
    } else {
      toast.error("Failed to update your profile...!", { id: toastId });
      setIsEditing(false);
    }
  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <div className="relative">
            <img
              className="w-16 rounded-full"
              alt="Tailwind CSS Navbar component"
              src={profileImg}
            />
            <div className="absolute bottom-0 right-0 bg-neutral text-white p-1 rounded-md">
              <BiEdit size={12} />
            </div>
          </div>
          <button
            onClick={() => setIsEditing((prev) => !prev)}
            className={`btn ${
              isEditing ? "btn-error text-slate-100" : "btn-neutral"
            }`}
          >
            {isEditing ? (
              <>
                <GiCancel size={20} />
                Cancel
              </>
            ) : (
              <>
                <BiEdit size={20} />
                Edit Profile
              </>
            )}
          </button>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  {...register("firstName", {})}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xl"
                  readOnly={!isEditing}
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xl"
                  {...register("lastName", {})}
                  readOnly={!isEditing}
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Phone Number</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  {...register("mobile")}
                  readOnly={!isEditing}
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Email Address</span>
                </div>
                <input
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  {...register("email", {})}
                  disabled={true}
                />
              </label>
              <label className="form-control w-full col-span-1 sm:col-span-2">
                <div className="label">
                  <span className="label-text">Address</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  {...register("addressLine1", {})}
                  readOnly={!isEditing}
                />
              </label>
              <div className=" col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">City</span>
                  </div>
                  <input
                    {...register("city", {})}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xl"
                    readOnly={!isEditing}
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Zip Code</span>
                  </div>
                  <input
                    {...register("postalCode", {})}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    readOnly={!isEditing}
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Gender</span>
                  </div>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled>Select Gender</option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                    <option value={"third"}>Third</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className={`btn btn-success px-10 text-md text-white font-medium ${
                  isEditing ? "inline" : "hidden"
                }`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
