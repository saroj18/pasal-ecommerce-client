import React from "react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import { ArrowLeft } from "lucide-react";
import { shopDetails } from "./tableData";
import DetailsCard from "../vendor/DetailsCard";
import shopImage from "../../../../src/assets/shopImage.avif";
import TextArea from "../../../components/common/TextArea";
import Button from "../../../components/common/Button";
import document from "../../../assets/document.jpg";
import owner from "../../../assets/owner.jpg";
import Map from "./Map";

const VendorDetail = () => {
  return (
    <div>
      <ArrowLeft
        onClick={() => history.back()}
        className="mt-3 cursor-pointer"
      />
      <HeadingTypo className="text-3xl font-semibold my-4">
        Vendor Details
      </HeadingTypo>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-between gap-3 my-6 border-2 border-gray-300 p-2 shadow-md rounded-md">
          {shopDetails.map(
            (ele: { label: string; value: string }, index: number) => {
              return (
                <DetailsCard
                  key={index}
                  heading={ele.label}
                  value={ele.value}
                />
              );
            },
          )}
        </div>
      </div>
      <div>
        <HeadingTypo className="md:text-3xl text-xl my-3 font-semibold">
          Shop Image and Map
        </HeadingTypo>
        <div className="border-2 border-gray-500 rounded-md p-2 flex h-[700px] md:h-[500px] flex-col md:flex-row w-full gap-4">
          <img className="md:w-[50%]" src={shopImage} alt="" />
          <Map />
        </div>
      </div>
      <div>
        <HeadingTypo className="md:text-3xl text-xl my-3 font-semibold">
          Document and Owner Photo
        </HeadingTypo>
        <div className="border-2 border-gray-500 rounded-md p-2 flex  items-center">
          <div className="w-full">
            <img className="max-w-[90%] h-[90%]" src={document} alt="" />
          </div>
          <div className="w-full ">
            <img className="w-full " src={owner} alt="" />
          </div>
        </div>
      </div>
      <div>
        <TextArea className=" w-full max-w-[100%]  block h-[150px] p-2 my-4" />
        <div className="flex items-center justify-end gap-x-3 my-3">
          <Button className="bg-green-500 text-white px-5 text-xl py-2 rounded-md">
            Approve
          </Button>
          <Button className="bg-red-500 text-white px-5 text-xl py-2 rounded-md">
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VendorDetail;
