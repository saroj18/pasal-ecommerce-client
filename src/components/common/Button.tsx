import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, buttonProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        {...rest}
        className={twMerge("bg-blue-500 text-white p-3 rounded-md", className)}
      >
        {children}
      </button>
    );
  },
);

export default Button;
