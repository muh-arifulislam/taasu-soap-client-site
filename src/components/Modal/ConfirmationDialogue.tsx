type PropsType = {
  action: () => Promise<void>;
};

const ConfirmationDialogue = ({ action }: PropsType) => {
  const handleConfirm = async () => {
    action();
  };

  return (
    <dialog id="confirmation_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={handleConfirm} className="btn btn-error mx-2">
              Confirm
            </button>
            <button className="btn btn-outline">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ConfirmationDialogue;
