import React from "react";

interface optionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: string;
  value: string;
  className?:string
}

const Option = React.forwardRef<HTMLOptionElement, optionProps>(
  ({ value,className,children }) => {
    return <option className={className} value={value}>{children}</option>;
  },
);

export default Option;
