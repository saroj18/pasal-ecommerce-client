import React from "react";
import { twMerge } from "tailwind-merge";

interface TableRowProps extends React.TableHTMLAttributes<HTMLTableRowElement> {
  className?: string;
  children: React.ReactNode;
}

const TableRow = ({ className, children, ...props }: TableRowProps) => {
  return (
    <tr
      className={twMerge(
        " border-gray-300 border-t-2 border-b-2 border-l-0 border-r-0 cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  );
};

export default TableRow;
