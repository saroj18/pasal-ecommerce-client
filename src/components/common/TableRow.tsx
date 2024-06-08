import React from "react";

const TableRow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <tr className={className}>{children}</tr>;
};

export default TableRow;
