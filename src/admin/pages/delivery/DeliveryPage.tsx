import React, { useState } from "react";
import person from "../../../../src/assets/person.avif";
import Popup from "reactjs-popup";
import { Edit, Trash, X } from "lucide-react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import ParaTypo from "../../../components/common/ParaTypo";
import Label from "../../../components/common/Label";
import AddDeleveryPerson from "./AddDeleveryPerson";
import { useQuery } from "../../../hooks/useQuery";
import { useMutation } from "../../../hooks/useMutation";
import Shimmer from "../../../components/common/Shimmer";

const DeliveryPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data, refetch, loading } = useQuery<any>("/deleveryperson");
  const { mutate } = useMutation<any>();

  const deleteHandler = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    mutate("/deleveryperson", "DELETE", { id }, refetch);
  };
  return (
    <div className="overflow-auto">
      <div className="sticky left-0 top-0">
        <HeadingTypo className="text-3xl">Delevery Person</HeadingTypo>
        <ParaTypo className="opacity-75 text-[15px]">
          Add and View Delevery Persons
        </ParaTypo>
        <AddDeleveryPerson />
        <div className="md:relative flex justify-between flex-col lg:flex-row items-center">
          <HeadingTypo className="text-2xl font-semibold  mt-6">
            All Delevery Person
          </HeadingTypo>
          {/* <SearchBox className="w-full md:max-w-[45%] lg:max-w-[30%]" /> */}
        </div>
      </div>
      {loading ? <Shimmer shape="rectange" height="60px" count={5} /> : null}
      {data?.length > 0 && (
        <table className="w-full text-xs md:text-base text-center bg-white shadow-md my-4">
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
              <th className="p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((ele: any, index: number) => {
              return (
                <tr
                  onClick={() => setOpen(true)}
                  key={index}
                  className="capitalize border-gray-300 border-t-2 border-b-2 border-l-0 border-r-0 cursor-pointer"
                >
                  <td className="p-3 flex items-center justify-center">
                    <img
                      className="mdh-[70px] h-[30px] rounded-md"
                      src={ele.profileImage}
                      alt=""
                    />
                  </td>
                  <td title={ele._id} className="p-3">
                    {ele._id.slice(15)}
                  </td>
                  <td className="p-3">{ele.firstname + " " + ele.lastname}</td>
                  <td className="p-3">{ele.address}</td>
                  <td className="p-3">{ele.gender}</td>
                  <td className="p-3">
                    {new Date(ele.createdAt).toDateString()}
                  </td>
                  <td className="p-3">{ele.phone}</td>
                  <td className="p-3">{ele.status}</td>
                  <td className="p-3 flex items-center gap-x-3 md:gap-x-6 justify-center">
                    <Edit
                      className="size-4 md:size-5"
                      strokeWidth={1}
                      color="green"
                    />
                    <Trash
                      onClick={(e) => deleteHandler(e, ele._id)}
                      className="size-4 md:size-5"
                      strokeWidth={1}
                      color="red"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

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

export default DeliveryPage;
