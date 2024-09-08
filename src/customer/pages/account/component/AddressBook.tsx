import { useState } from "react";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import AddAddressForm from "../page/AddAddressForm";
import { useQuery } from "../../../../utils/useQuery";
import Shimmer from "../../../../components/common/Shimmer";
type AddressBookProps = {
  setOpen: (open: boolean) => void;
  userInfo: any;
  loading: boolean;
};

const AddressBookComponent = ({
  setOpen,
  userInfo,
  loading,
}: AddressBookProps) => {
  return (
    <div className="p-4 rounded-md border-2 border-gray-500 flex flex-col gap-y-3">
      <div className="flex justify-between">
        <p>{userInfo?.addressOf.fullname}</p>
        <p
          onClick={() => setOpen(true)}
          className="text-blue-500 cursor-pointer"
        >
          Edit
        </p>
      </div>
      <p>{userInfo?.addressOf.mobile}</p>
      <p className="capitalize">
        {`${userInfo.district} District, ${userInfo.state} Province, ${userInfo.city}-${userInfo.ward}, ${userInfo.tole}, Near By ${userInfo.nearBy}`}
      </p>
      <div className="flex text-sm sm:text-sm">
        <p className="border-2 border-gray-500 rounded-md mx-1 p-1 shadow-md uppercase">
          {userInfo.defaultAddress}
        </p>
      </div>
    </div>
  );
};

const AddressBook = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { data, loading } = useQuery<any>("/user/address");
  return (
    <div className="p-3 w-full">
      <div className="flex justify-between w-full items-center">
        <HeadingTypo className="text-2xl my-3">Address Book</HeadingTypo>
        <p
          onClick={() => setOpen(!open)}
          className="cursor-pointer text-blue-500 font-semibold"
        >
          + Add New Address
        </p>
      </div>
      {data?.length < 1 ? (
        <h1 className="text-center text-4xl font-semibold">0 Address Found</h1>
      ) : null}
      {open && <AddAddressForm setOpen={setOpen} close={true} />}
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-3">
        {loading ? (
          <Shimmer shape="rectange" />
        ) : (
          data?.map((ele: any, index: number) => {
            return (
              <AddressBookComponent
                key={index}
                userInfo={ele}
                setOpen={setOpen}
                loading={loading}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default AddressBook;
