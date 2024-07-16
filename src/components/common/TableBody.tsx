import React from "react";

export const TableBody = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <tbody>
      <tr
        className={
          " border-gray-300 border-t-2 border-b-2 border-l-0 border-r-0 cursor-pointer" +
          className
        }
      >
        {children}
      </tr>
    </tbody>
  );
};

export default TableBody;
