import React from "react";

interface TableDataProps
  extends React.TableHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  className: string;
}

export const TableData = ({ children, className,...props }: TableDataProps) => {
  return <td className={className} {...props}>{children}</td>;
};

export default TableData;
