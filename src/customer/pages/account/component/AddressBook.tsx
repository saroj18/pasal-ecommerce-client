import React from "react";
import HeadingTypo from "../../../../components/common/HeadingTypo";

const AddressBookComponent = () => {
  return (
    <>
      <div className="p-4 rounded-md border-2 border-gray-500 flex flex-col gap-y-3">
        <div className="flex justify-between">
          <p>Saroj</p>
          <p className="text-blue-500 cursor-pointer">Edit</p>
        </div>
        <p>9827284143</p>
        <p>
          Bagmati Province,Ratnanagar,Tadi Bazar,Ratnanagar 14,Near By Swarshati
          Mandir
        </p>
        <div className="flex">
          <p className="border-2 border-gray-500 lowercase rounded-md mx-1 p-1 shadow-md">
            DEFAULT DELIVERY ADDRESS
          </p>
          <p className="border-2 border-gray-500 lowercase rounded-md mx-1 p-1 shadow-md">
            DEFAULT BILLING ADDRESS
          </p>
        </div>
      </div>
    </>
  );
};

const AddressBook = () => {
  return (
    <div className="p-3 w-full">
      <div className="flex justify-between w-full items-center">
        <HeadingTypo className="text-2xl my-3">Address Book</HeadingTypo>
        <p className="cursor-pointer text-blue-500 font-semibold">+ Add New Address</p>
      </div>
      <div className="grid grid-cols-2 gap-x-3">
      <AddressBookComponent />
      <AddressBookComponent />
      </div>
    </div>
  );
};

export default AddressBook;
