import React from "react";
import { twMerge } from "tailwind-merge";

interface TableDataProps
  extends React.TableHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  className: string;
}

export const TableData = ({
  children,
  className,
  ...props
}: TableDataProps) => {
  return (
    <td className={twMerge("whitespace-nowrap", className)} {...props}>
      {children}
    </td>
  );
};

export default TableData;
