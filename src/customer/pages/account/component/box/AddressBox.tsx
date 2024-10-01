import React from "react";
import ParaTypo from "../../../../../components/common/ParaTypo";
import HeadingTypo from "../../../../../components/common/HeadingTypo";
import Shimmer from "../../../../../components/common/Shimmer";

export type AddressProps = {
  mobile: string;
  cityWard: string;
  address: string;
  loading: boolean;
  user?: any;
};

const AddressBox = ({
  address,
  cityWard,
  mobile,
  loading,
  user,
}: AddressProps) => {
  return (
    <div className="grow border-2 border-gray-300 rounded-md shadow-sm p-4">
      {loading ? (
        <Shimmer shape="rectange" />
      ) : (
        <>
          <div className="flex items-center gap-x-6 mb-4">
            <HeadingTypo className="text-xl">Address Book</HeadingTypo>
          </div>
          <ParaTypo className="mb-2 font-semibold">
            Default Delvery Address
          </ParaTypo>
          {user?.verify ? (
            <div className="flex flex-col gap-y-1 text-gray-500 ">
              <ParaTypo>{cityWard}</ParaTypo>
              <ParaTypo>{address}</ParaTypo>
              <ParaTypo>{mobile}</ParaTypo>
            </div>
          ) : (
            <ParaTypo className="text-red-500">Please verify first</ParaTypo>
          )}
        </>
      )}
    </div>
  );
};

export default AddressBox;
