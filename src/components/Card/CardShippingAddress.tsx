import { FiEdit } from "react-icons/fi";
import { LuTrash2 } from "react-icons/lu";
import { useDeleteAddressMutation } from "../../redux/features/shippingAddress/shippingAddressApi";
import ConfirmationDialogue from "../Modal/ConfirmationDialogue";
import { TShippingAddress } from "../../types/shippingAddress";

type PropsType = {
  data: TShippingAddress;
  selectedShippingAddress: TShippingAddress | null;
  setSelectedShippingAddress: React.Dispatch<
    React.SetStateAction<TShippingAddress | null>
  >;
};

const CardShippingAddress = ({
  data,
  selectedShippingAddress,
  setSelectedShippingAddress,
}: PropsType) => {
  const [handleDeleteAddress] = useDeleteAddressMutation();

  const handleDelete = async () => {
    const res = await handleDeleteAddress(data._id);
    if (res?.data?.success) {
      console.log("deleted");
    }
  };

  const handleCheckAddress = () => {
    setSelectedShippingAddress(data);
  };

  return (
    <>
      <div className="bg-gray-50 rounded-md p-5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg font-bold">{data?.fullName}</p>
          <input
            onChange={handleCheckAddress}
            type="checkbox"
            className="checkbox"
            checked={data?._id === selectedShippingAddress?._id}
          />
        </div>
        <p className="mb-5">
          {data?.addressLine1}, {data?.city}
        </p>
        <div className="grid grid-cols-2 gap-5">
          <button className="btn btn-sm bg-gray-200 border-gray-200 px-6">
            <FiEdit />
            Edit
          </button>
          <button
            onClick={() =>
              (
                document.getElementById(
                  "confirmation_modal"
                ) as HTMLDialogElement
              )?.showModal()
            }
            className="btn btn-sm bg-red-200 border-red-200 text-red-500 hover:bg-red-400 hover:text-slate-800 px-6"
          >
            <LuTrash2 />
            Delete
          </button>
        </div>
      </div>
      <ConfirmationDialogue action={handleDelete} />
    </>
  );
};

export default CardShippingAddress;
