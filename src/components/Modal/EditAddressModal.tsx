import { useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateAddressMutation } from "../../redux/features/shippingAddress/shippingAddressApi";
import { TShippingAddress } from "../../types/shippingAddress";

type FormInputs = {
  fullName: string;
  mobile: string;
  email?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postalCode: string;
};
const EditAddressModal = ({
  addressData,
}: {
  addressData: TShippingAddress | null;
}) => {
  const modalRef = useRef<HTMLInputElement>(null);

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.checked = false;
    }
  };

  const [handleUpdateAddress] = useUpdateAddressMutation();

  const { register, handleSubmit, reset } = useForm<FormInputs>({});

  useEffect(() => {
    if (addressData) {
      reset({
        fullName: addressData?.fullName,
        mobile: addressData?.mobile,
        email: addressData?.email,
        addressLine1: addressData?.addressLine1,
        city: addressData?.city,
        postalCode: addressData?.postalCode,
      });
    }
  }, [addressData]);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    closeModal();

    const toastId = toast.loading("Address data is saving.");
    try {
      const result = await handleUpdateAddress({
        id: addressData?._id,
        data: data,
      });
      if (result.data?.success) {
        toast.success("Address has been saved.", { id: toastId });
      } else {
        throw new Error("Failed to save address...!");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err?.message ?? "Failed to save address...!", {
        id: toastId,
      });
    }
  };
  return (
    <>
      <input
        ref={modalRef}
        type="checkbox"
        id="edit_address_modal"
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Edit address</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full max-w-xl mb-3">
              <div className="label">
                <span className="label-text">
                  Name <span className="text-red-500">*</span>
                </span>
              </div>
              <input
                type="text"
                placeholder="Enter Full Name"
                {...register("fullName", { required: true })}
                className="input input-bordered w-full max-w-xl"
              />
            </label>
            <label className="form-control w-full max-w-xl mb-3">
              <div className="label">
                <span className="label-text">
                  Mobile Number <span className="text-red-500">*</span>
                </span>
              </div>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                {...register("mobile", { required: true })}
                className="input input-bordered w-full max-w-xl"
              />
            </label>
            <label className="form-control w-full max-w-xl mb-3">
              <div className="label">
                <span className="label-text">
                  Address Line <span className="text-red-500">*</span>
                </span>
              </div>
              <input
                type="text"
                placeholder="Enter Full Address"
                {...register("addressLine1", { required: true })}
                className="input input-bordered w-full max-w-xl"
              />
            </label>
            <label className="form-control w-full max-w-xl mb-3">
              <div className="label">
                <span className="label-text">
                  City <span className="text-red-500">*</span>
                </span>
              </div>
              <input
                type="text"
                placeholder="Enter City"
                {...register("city", { required: true })}
                className="input input-bordered w-full max-w-xl"
              />
            </label>
            <label className="form-control w-full max-w-xl mb-3">
              <div className="label">
                <span className="label-text">Postal Code</span>
              </div>
              <input
                type="text"
                placeholder="Enter Postal Code"
                {...register("postalCode")}
                className="input input-bordered w-full max-w-xl"
              />
            </label>
            <label className="form-control w-full max-w-xl mb-3">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                placeholder="Enter Email Address"
                {...register("email")}
                className="input input-bordered w-full max-w-xl"
              />
            </label>
            <label className="label cursor-pointer justify-normal gap-2 mb-3">
              <input type="checkbox" defaultChecked className="checkbox" />
              <span className="label-text">Use as my default address</span>
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="">
                <label htmlFor="edit_address_modal" className="btn w-full">
                  Cancel
                </label>
              </button>
              <button type="submit" className="">
                <label className="btn btn-primary w-full">
                  Add New Address
                </label>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditAddressModal;
