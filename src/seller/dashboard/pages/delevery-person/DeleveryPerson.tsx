import React, { useState } from "react";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import ParaTypo from "../../../../components/common/ParaTypo";
import AddDeleveryPerson from "../../components/AddDeleveryPerson";
import person from "../../../../assets/person.avif";
import SearchBox from "../../../../components/common/Search";
import Popup from "reactjs-popup";
import Label from "../../../../components/common/Label";
import { X } from "lucide-react";

const DeleveryPerson = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="overflow-auto">
      {/* <HeadingTypo className="text-3xl">Delevery Person</HeadingTypo>
      <ParaTypo className="opacity-75 text-[15px]">
        Add and View Delevery Persons
      </ParaTypo> */}
      {/* <AddDeleveryPerson /> */}
      <div className="md:relative flex flex-col md:flex-row justify-between items-center sticky left-0 top-0">
        <HeadingTypo className="text-2xl font-semibold  mt-6">
          All Delevery Person
        </HeadingTypo>
        <SearchBox className="w-full md:max-w-[45%] lg:max-w-[30%]" />
      </div>

      <table className="w-full text-sm md:text-base text-center bg-white shadow-md my-4">
        <thead>
          <tr className="border-gray-300 border-t-2 border-b-2 border-l-0 border-r-0 sticky top-0 left-0 bg-white">
            <th className="p-2">Image</th>
            <th className="p-2">UserID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Address</th>
            <th className="p-2">Gender</th>
            <th className="p-2">Joined On</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {Array(30)
            .fill(null)
            .map((_, index) => {
              return (
                <tr
                  onClick={() => setOpen(true)}
                  key={index}
                  className=" border-gray-300 border-t-2 border-b-2 border-l-0 border-r-0 cursor-pointer"
                >
                  <td className="p-3 flex items-center justify-center">
                    <img
                      className="h-[30px] lg:h-[70px] rounded-md"
                      src={person}
                      alt=""
                    />
                  </td>
                  <td className="p-3">0932901471239234</td>
                  <td className="p-3">John Doe</td>
                  <td className="p-3">Kathmandu</td>
                  <td className="p-3">Male</td>
                  <td className="p-3">2024-01-22</td>
                  <td className="p-3">9876545676</td>
                  <td className="p-3">On Leave</td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <Popup open={open} onClose={() => setOpen(false)}>
        <HeadingTypo className="text-2xl font-semibold mb-5">
          User Info
        </HeadingTypo>
        <div className="flex gap-x-5">
          <X
            onClick={() => setOpen(false)}
            className="absolute cursor-pointer left-[95%] top-4"
          />
          <img className="w-[30%] h-[250px] rounded-md" src={person} alt="" />
          <div className="grid grid-cols-2 justify-between w-full">
            <div className="my-1 border-2 border-gray-300 shadow-md rounded-md mx-2 p-1">
              <Label className="text-2xl  ">User ID</Label>
              <ParaTypo className="opacity-75">4025834058340</ParaTypo>
            </div>
            <div className="my-1 border-2 border-gray-300 shadow-md rounded-md mx-2 p-1">
              <Label className="text-2xl  ">First Name</Label>
              <ParaTypo className="opacity-75">John</ParaTypo>
            </div>
            <div className="my-1 border-2 border-gray-300 shadow-md rounded-md mx-2 p-1">
              <Label className="text-2xl  ">Last Name</Label>
              <ParaTypo className="opacity-75">Doe</ParaTypo>
            </div>
            <div className="my-1 border-2 border-gray-300 shadow-md rounded-md mx-2 p-1">
              <Label className="text-2xl  ">Address</Label>
              <ParaTypo className="opacity-75">Kathmandu</ParaTypo>
            </div>
            <div className="my-1 border-2 border-gray-300 shadow-md rounded-md mx-2 p-1">
              <Label className="text-2xl  ">Email</Label>
              <ParaTypo className="opacity-75">johndoe@gmail.com</ParaTypo>
            </div>
            <div className="my-1 border-2 border-gray-300 shadow-md rounded-md mx-2 p-1">
              <Label className="text-2xl  ">Password</Label>
              <ParaTypo className="opacity-75">password@123</ParaTypo>
            </div>
            <div className="my-1 border-2 border-gray-300 shadow-md rounded-md mx-2 p-1">
              <Label className="text-2xl  ">Gender</Label>
              <ParaTypo className="opacity-75">Male</ParaTypo>
            </div>
            <div className="my-1 border-2 border-gray-300 shadow-md rounded-md mx-2 p-1">
              <Label className="text-2xl  ">Phone</Label>
              <ParaTypo className="opacity-75">98623849876</ParaTypo>
            </div>
            <div className="my-1 border-2 border-gray-300 shadow-md rounded-md mx-2 p-1">
              <Label className="text-2xl  ">Citizenship Number</Label>
              <ParaTypo className="opacity-75">34-54-2343</ParaTypo>
            </div>
            <div className="my-1 border-2 border-gray-300 shadow-md rounded-md mx-2 p-1">
              <Label className="text-2xl  ">Joined On</Label>
              <ParaTypo className="opacity-75">2024-02-12</ParaTypo>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default DeleveryPerson;
