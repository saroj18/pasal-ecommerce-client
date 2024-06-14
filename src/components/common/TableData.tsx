import React from "react";

export const TableData = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
  tableDataStyle?: string;
}) => {
  return <td className={className}>{children}</td>;
};

export default TableData;
