import React from "react";
import Button from "../Button/Button";

interface CardFeatureProps {
  title: string;
  description: string;
  buttonText?: string;
  className?: string;
  image: string;
  onButtonClick?: () => void;
}

const CardFeature: React.FC<CardFeatureProps> = ({
  title,
  description,
  image,
  buttonText = "Shop Now",
  className,
  onButtonClick,
}) => {
  return (
    <div
      className={`mt-[20px] pt-[30px] pb-[20px] px-[20px] flex flex-col items-center justify-between text-gray-900 dark:bg-gray-900 dark:text-white ${className}`}
      style={
        image ? { background: `url(${image})`, backgroundSize: "cover" } : {}
      }
    >
      <div className="dark:bg-transparent rounded p-4 w-full">
        <h4 className="mb-[10px] font-secondary text-xl leading-10">{title}</h4>
        <p className="text-xl mb-[20px]">{description}</p>
      </div>
      {buttonText && (
        <Button variant="primary" onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default CardFeature;
