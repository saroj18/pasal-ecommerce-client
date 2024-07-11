import React from "react";
import { twMerge } from "tailwind-merge";

interface selectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  className?:string
};

const Select = React.forwardRef<HTMLSelectElement,selectProps>(({ children,className }) => {
  return <select className={twMerge('h-[40px] border-2 border-neutral-400 outline-none rounded-md px-1',className)}>{children}</select>;
});

export default Select;
