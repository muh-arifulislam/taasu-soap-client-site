import React, { ButtonHTMLAttributes } from "react";

import btnBg from "../../assets/icons/btn-bg-rough.svg";
import btnBgWhite from "../../assets/icons/btn-bg-rough-white.svg";

// Define a type for the button variant prop
type ButtonVariant = "primary" | "secondary";

// Extend ButtonHTMLAttributes to include native button props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary", // Default to 'primary' if no variant is provided
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-[28px] pt-[16px] pb-[22px] text-md font-semibold inline-block ${
        variant === "primary" ? "text-white" : "text-primary"
      }`}
      style={{
        background: `url(${variant === "primary" ? btnBg : btnBgWhite})`,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
