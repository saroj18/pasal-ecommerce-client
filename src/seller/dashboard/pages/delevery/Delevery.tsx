import React from "react";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import ParaTypo from "../../../../components/common/ParaTypo";
import SearchBox from "../../../../components/common/Search";
import jacket from "../../../../assets/jacket.png";
import Button from "../../../../components/common/Button";

const Delevery = () => {
  return (
    <div className="overflow-auto">
      <div className="flex flex-col md:flex-row justify-between items-center sticky left-0 top-0">
        <div>
          <HeadingTypo className="text-2xl">Delevery List</HeadingTypo>
          <ParaTypo className="text-[15px] opacity-75">
            All delevery list
          </ParaTypo>
        </div>
        <SearchBox className="w-full md:max-w-[45%] lg:max-w-[30%]" />
      </div>

      <table className="w-full text-sm md:text-base text-center mt-5 bg-white shadow-md">
        <thead>
          <tr className="sticky top-0 left-0 bg-white border-t-2">
            <th className="p-4">Product</th>
            <th className="p-4">Product ID</th>
            <th className="p-4">Order By</th>
            <th className="p-4">Placed Date</th>
            <th className="p-4">Delevery By</th>
            <th className="p-4">Delevery Location</th>
            <th className="p-4">Expected Time</th>
            <th className="p-4">Delevery Charges</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {Array(15)
            .fill(null)
            .map((_, index) => {
              return (
                <tr key={index} className="border-b-2 border-t-2 ">
                  <td className="p-2 flex flex-col items-center justify-center gap-x-2">
                    {" "}
                    <img
                      className="w-[60px] border-2 border-gray-300 shadow-md rounded-md p-1"
                      src={jacket}
                    />{" "}
                    Leather Jacket
                  </td>
                  <td className="p-2">985943879872934</td>
                  <td className="p-2">John Doe</td>
                  <td className="p-2">2024-01-22</td>
                  <td className="p-2">Ram Yadav</td>
                  <td className="p-2">Kalanki,Kathmandu</td>
                  <td className="p-2">2 days</td>
                  <td className="p-2">30</td>
                  <td>
                    {/* <Button className='bg-gray-500 px-3 py-2 text-white rounded-md'>Searching Delevery Person</Button> */}
                    {/* <Button className='bg-blue-500 px-3 py-2 text-white rounded-md'>Send From Here</Button> */}
                    <Button className="bg-green-500 px-3 py-2 text-white rounded-md text-xs">
                      Delevery Complete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Delevery;
