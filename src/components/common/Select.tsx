import React from "react";
import { twMerge } from "tailwind-merge";

interface selectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  className?: string;
}

const Select = React.forwardRef<HTMLSelectElement, selectProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={twMerge(
          "h-[40px] border-2 border-neutral-400 outline-none rounded-md px-1",
          className,
        )}
        {...props}
      >
        {children}
      </select>
    );
  },
);

export default Select;
