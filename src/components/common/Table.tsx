import React from "react";
import { twMerge } from "tailwind-merge";

const Table = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <table
      className={twMerge(
        "w-full text-center mt-5 bg-white shadow-lg",
        className,
      )}
    >
      {children}
    </table>
  );
};

export default Table;
