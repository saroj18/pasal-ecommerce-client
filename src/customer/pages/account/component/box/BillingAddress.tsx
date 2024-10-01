import ParaTypo from "../../../../../components/common/ParaTypo";
import HeadingTypo from "../../../../../components/common/HeadingTypo";
import { AddressProps } from "./AddressBox";

const BillingAddress = ({ address, cityWard, mobile, user }: AddressProps) => {
  return (
    <div className="grow border-2 border-gray-300 rounded-md shadow-sm p-4">
      <div className="flex items-center gap-x-6 mb-4">
        <HeadingTypo className="text-xl">Billing Address</HeadingTypo>
      </div>
      <ParaTypo className="font-semibold mb-2">
        Default Billing Address
      </ParaTypo>
      {user?.verify ? (
        <div className="flex flex-col gap-y-1 text-gray-500">
          <ParaTypo>{cityWard}</ParaTypo>
          <ParaTypo>{address}</ParaTypo>
          <ParaTypo>{mobile}</ParaTypo>
        </div>
      ) : (
        <ParaTypo className="text-red-500">Please verify first</ParaTypo>
      )}
    </div>
  );
};

export default BillingAddress;
