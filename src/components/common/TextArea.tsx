import React from "react";

interface textAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, textAreaProps>(
  ({ className,...props }, ref) => {
    return (
      <textarea
        className={
          "border-2 border-gray-500 rounded-md outline-none" + className
        }
        ref={ref}
        {...props}
      ></textarea>
    );
  },
);

export default TextArea;
