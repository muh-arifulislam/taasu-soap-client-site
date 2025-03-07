import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import {
  useDeleteAddressMutation,
  useGetAllAddressQuery,
} from "../../redux/features/shippingAddress/shippingAddressApi";
import { MdOutlinePhoneInTalk, MdRefresh } from "react-icons/md";
import { TShippingAddress } from "../../types/shippingAddress";
import AddNewAddress from "../../components/Modal/AddNewAddress";
import { toast } from "sonner";
import AddressCardSkeleton from "../../components/Skeleton/AddressCardSkeleton";
import EditAddressModal from "../../components/Modal/EditAddressModal";
import { useState } from "react";

const ManageAddresses = () => {
  const { data, refetch, isLoading } = useGetAllAddressQuery(undefined);

  const [handleDeleteAddress] = useDeleteAddressMutation();

  const [selectedAddress, setSelectedAddress] =
    useState<null | TShippingAddress>(null);

  const deleteAddress = async (id: string) => {
    const toastId = toast.loading("Address is deleting...!");
    try {
      const result = await handleDeleteAddress(id);
      if (result?.data?.success) {
        toast.success("Address have been deleted.", { id: toastId });
      } else {
        throw new Error(result?.data?.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err?.message ?? "Failed to delete address.", { id: toastId });
    }
  };

  return (
    <>
      <div className="px-4">
        <div>
          <div className=" space-x-4">
            <button className="">
              <label
                htmlFor="add_new_address_modal"
                className="btn btn-primary btn-wide"
              >
                <FaPlus />
                Add new Address
              </label>
            </button>
            <button onClick={() => refetch()} className="btn">
              <MdRefresh />
              Refetch
            </button>
          </div>
          <div className="my-5">
            {isLoading ? (
              <>
                <div>
                  <AddressCardSkeleton />
                  <AddressCardSkeleton />
                  <AddressCardSkeleton />
                </div>
              </>
            ) : (
              data?.data?.map((address: TShippingAddress) => (
                <div key={address._id}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold mb-2">
                        {address?.fullName}
                      </h2>
                      <p className="mb-1">
                        {address?.addressLine1}, {address?.city}
                      </p>
                      <p className="flex items-center gap-2">
                        <MdOutlinePhoneInTalk /> {address?.mobile}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => {
                          setSelectedAddress(address);
                        }}
                        className=""
                      >
                        <label
                          htmlFor="edit_address_modal"
                          className="btn w-full"
                        >
                          <FaEdit />
                          Edit
                        </label>
                      </button>
                      <button
                        onClick={() => {
                          deleteAddress(address._id);
                        }}
                        className="btn bg-red-200 text-red-500 hover:bg-red-500 hover:text-white"
                      >
                        <FaTrash />
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="divider" />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <AddNewAddress />
      <EditAddressModal addressData={selectedAddress} />
    </>
  );
};

export default ManageAddresses;
