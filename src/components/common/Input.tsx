import React from "react";
import { twMerge } from "tailwind-merge";

type inputProps = {
  className: string;
  type: "text" | "number" | "password";
  placeholder:string
};

const Input = React.forwardRef(({ className, type='text',placeholder,...props }: inputProps,ref) => {
    return <input  className={twMerge('border-2 border-neutral-400 outline-none rounded-md pl-2 h-[40px]',className)} placeholder={placeholder} type={type} {...props} />;
  })

export default Input;
