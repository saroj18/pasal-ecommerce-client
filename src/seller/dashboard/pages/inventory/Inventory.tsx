import React from "react";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import ParaTypo from "../../../../components/common/ParaTypo";
import SearchBox from "../../../../components/common/Search";
import Button from "../../../../components/common/Button";

const Inventory = () => {
  return (
    <div>
        <div className="flex justify-between relative">
      <div>
        <HeadingTypo className="text-2xl font-bold">Inventory</HeadingTypo>
        <ParaTypo className="opacity-75 text-[15px]">
          Inventory of all products
        </ParaTypo>
      </div>
      <div className="flex justify-between w-full max-w-[40%] items-center gap-x-3 ">
        <SearchBox className="w-full max-w-[60%]" />
        <div className="flex gap-x-3">
          <Button className="bg-green-500 px-4 py-2 text-white rounded-md">
            High Sale
          </Button>
          <Button className="bg-red-500 px-4 py-2 text-white rounded-md">
            Low Sale
          </Button>
        </div>
      </div>
    </div>

      <table className="w-full text-center bg-white shadow-md my-4">
        <thead>
            <tr className="border-gray-300 border-t-2 border-b-2 border-l-0 border-r-0 sticky top-0 left-0 bg-white">
                <th className="p-2">Product ID</th>
                <th className="p-2">Product Name</th>
                <th className="p-2">Category</th>
                <th className="p-2">Stock</th>
                <th className="p-2">Added Date</th>
                <th className="p-2">Price</th>
                <th className="p-2">Discount</th>
                <th className="p-2">Brand</th>
                <th className="p-2">Total Sale</th>
                <th className="p-2">Total Sale Amount</th>
            </tr>
        </thead>

        <tbody>
           {
            Array(30).fill(null).map((_,index)=>{
                return  <tr key={index} className=" border-gray-300 border-t-2 border-b-2 border-l-0 border-r-0">
                <td className="p-3">0932901471239234</td>
                <td className="p-3">Leather Jacket</td>
                <td className="p-3">Fashain</td>
                <td className="p-3">33</td>
                <td className="p-3">2024-01-22</td>
                <td className="p-3">Rs 445</td>
                <td className="p-3">20%</td>
                <td className="p-3">Puma</td>
                <td className="p-3">55</td>
                <td className="p-3">Rs 40000</td>
            </tr>
            })
           }
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
