import React, { useState } from "react";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import jacket from "../../../../assets/jacket.png";
import Button from "../../../../components/common/Button";
import ParaTypo from "../../../../components/common/ParaTypo";
import Popup from "reactjs-popup";
import { Cross, X } from "lucide-react";
import SearchBox from "../../../../components/common/Search";

const Review = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="flex justify-between">
      <div>
        <HeadingTypo className="text-3xl">Reviews</HeadingTypo>
        <ParaTypo className="opacity-75 text-[16px]">
          Your's all products review
        </ParaTypo>
      </div>
      <SearchBox className="w-full max-w-[25%]" />
      </div>
      <div>
        <table className="w-full text-center mt-5 bg-white shadow-md">
          <thead>
            <tr className="sticky top-0 left-0 bg-white border-t-2">
              <th className="p-4">Product</th>
              <th className="p-4">Product ID</th>
              <th className="p-4">Review By</th>
              <th className="p-4">Review Date</th>
              <th className="p-4">Review Time</th>
              <th className="p-4">Review Image</th>
              <th className="p-4">Message</th>
              <th className="p-4">Like</th>
              <th className="p-4">Dislike</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array(15)
              .fill(null)
              .map((_, index) => {
                return (
                  <tr
                    onClick={() => setOpen(!open)}
                    key={index}
                    className="border-b-2 border-t-2 cursor-pointer "
                  >
                    <td className="p-2 flex flex-col items-center justify-center gap-x-2">
                      <img
                        className="w-[60px] border-2 border-gray-300 shadow-md rounded-md p-1"
                        src={jacket}
                      />
                      Leather Jacket
                    </td>
                    <td className="p-2">985943879872934</td>
                    <td className="p-2">John Doe</td>
                    <td className="p-2">2024-01-22</td>
                    <td className="p-2">02:44 PM</td>
                    <td className="p-2 flex justify-center items-center">
                      <img
                        className="w-[60px] border-2 border-gray-300 shadow-md rounded-md p-1"
                        src={jacket}
                      />
                    </td>
                    <td className="p-2">yo product ramro xa</td>
                    <td className="p-2">30</td>
                    <td className="p-2">5</td>
                    <td className="p-2">
                      <Button className="bg-red-500 px-3 py-2 text-white ml-2 rounded-md">
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <Popup open={open} onClose={() => setOpen(false)}>
        <div className="w-full p-3  ">
          <HeadingTypo className="text-3xl my-2">Review</HeadingTypo>
          <ParaTypo className="font-bold my-2">By John Doe</ParaTypo>
          <div className="border-2 border-gray-500 rounded-md p-2">
            <img className="h-[100px] rounded-md" src={jacket} alt="" />
            <ParaTypo className="text-[16px] my-2">
              Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aliquid a quasi, quos eius vel nostrum nam perspiciatis maiores
              consequuntur vitae! ipsum dolor sit amet consectetur adipisicing
              elit. Laborum, facilis!
            </ParaTypo>
          </div>
        </div>
        <X
          className="absolute left-[96%] cursor-pointer top-3"
          onClick={() => setOpen(false)}
        />
      </Popup>
    </div>
  );
};

export default Review;
