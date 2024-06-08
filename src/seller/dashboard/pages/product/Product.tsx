import React from "react";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import ParaTypo from "../../../../components/common/ParaTypo";
import ProductInfo from "../../components/ProductInfo";
import ProductImage from "../../components/ProductImage";
import CategoryCard from "../../components/CategoryCard";
import PriceCard from "../../components/PriceCard";
import SearchBox from "../../../../components/common/Search";
import jacket from "../../../../assets/jacket.png";
import { Edit, Layers, Trash } from "lucide-react";
import Button from "../../../../components/common/Button";
const Product = () => {
  return (
    <div className="w-full ">
      <HeadingTypo className="text-3xl">Add Product</HeadingTypo>
      <ParaTypo className="opacity-75 text-[15px]">
        Add your product for your customer
      </ParaTypo>

      <div className="flex gap-x-7 mt-5">
        <ProductInfo />
        <div className="flex grow flex-col border-2 border-gray-300 shadow-md rounded-md p-5 gap-y-3 bg-white ">
          <div className=" gap-y-5 flex items-start   gap-x-3">
            <ProductImage />
            <CategoryCard />
          </div>
          <PriceCard />
        </div>
      </div>
      <Button className="bg-red-500 px-6 py-2 rounded-md text-white my-2">Save</Button>

      <div className="relative flex items-center justify-between my-4">
        <div>
          <HeadingTypo className="text-3xl  mt-7">Product Lists</HeadingTypo>
          <ParaTypo className="text-[15px] opacity-75">
            See all your's products
          </ParaTypo>
        </div>
        <SearchBox className="w-[25%]" />
      </div>
      <hr />

      <div className="bg-white ">
        <table className="w-full text-center rounded-md shadow-md">
            <thead>
          <tr className="border-2 border-gray-300">
              <th className="p-3 text-xl">Product</th>
              <th className="p-3 text-xl">Price</th>
              <th className="p-3 text-xl">Brand</th>
              <th className="p-3 text-xl">Category</th>
              <th className="p-3 text-xl">Review</th>
              <th className="p-3 text-xl">Total Sale</th>
              <th className="p-3 text-xl">Added Date</th>
              <th className="p-3 text-xl">Action</th>
          </tr>
            </thead>

          <tbody>
            <tr className="border-2 border-gray-300 text-xl">
              <td className="flex flex-col items-center p-2">
                <img className="h-[80px] rounded-md" src={jacket} alt="" />
                <ParaTypo>Leather Jacket</ParaTypo>
              </td>
              <td>Rs 200</td>
              <td>Puma</td>
              <td>Fashion</td>
              <td>22</td>
              <td>20</td>
              <td>2024-03-11</td>
              <td className="flex justify-around items-center px-5">
                <Trash strokeWidth={0.9} className="cursor-pointer"/>
                <Edit strokeWidth={0.9} className="cursor-pointer"/>
                <Layers color="red" strokeWidth={0.9} className="cursor-pointer"/>
              </td>
            </tr>
            <tr className="border-2 border-gray-300 text-xl">
              <td className="flex flex-col items-center p-2">
                <img className="h-[80px] rounded-md" src={jacket} alt="" />
                <ParaTypo>Leather Jacket</ParaTypo>
              </td>
              <td>Rs 200</td>
              <td>Puma</td>
              <td>Fashion</td>
              <td>22</td>
              <td>20</td>
              <td>2024-03-11</td>
              <td className="flex justify-around items-center px-5">
                <Trash strokeWidth={0.9} className="cursor-pointer"/>
                <Edit strokeWidth={0.9} className="cursor-pointer"/>
                <Layers color="green" strokeWidth={0.9} className="cursor-pointer"/>
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default Product;
