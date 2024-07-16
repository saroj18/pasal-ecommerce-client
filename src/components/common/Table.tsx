import React from "react";

const Table = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <table className={"w-full text-center mt-5 bg-white shadow-lg" + className}>
      {children}
    </table>
  );
};

export default Table;
