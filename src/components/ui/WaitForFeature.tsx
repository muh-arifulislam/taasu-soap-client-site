import icon from "../../assets/icons/cloud.gif";

const WaitForFeature = () => {
  return (
    <div className="w-full h-[70vh] flex items-center justify-center text-center">
      <div>
        <div className="w-full max-w-60">
          <img src={icon} alt="icon" />
        </div>
        <h1 className="text-xl font-medium">Feature is cooking...!</h1>
      </div>
    </div>
  );
};

export default WaitForFeature;
