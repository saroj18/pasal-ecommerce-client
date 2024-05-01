import React, { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type: "text" | "number" | "password";
  placeholder?:string
};

const Input = React.forwardRef<HTMLInputElement,inputProps>(({ className, type='text',placeholder,...props },ref) => {
    return <input ref={ref} className={twMerge('border-2 border-neutral-400 outline-none rounded-md pl-2 h-[40px]',className)} placeholder={placeholder} type={type} {...props} />;
  })

export default Input;
