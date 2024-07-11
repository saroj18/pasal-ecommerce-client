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
    <div>
      <HeadingTypo className="text-3xl">Add Product</HeadingTypo>
      <ParaTypo className="opacity-75 text-[15px]">
        Add your product for your customer
      </ParaTypo>

      <div className="flex flex-col lg:flex-row gap-7 mt-5">
        <ProductInfo />
        <div className="flex grow flex-col border-2 border-gray-300 shadow-md rounded-md sm:p-5 gap-y-3 bg-white ">
          <div className=" gap-y-5 flex items-start flex-col md:flex-row gap-x-3">
            <ProductImage />
            <CategoryCard />
          </div>
          <PriceCard />
        </div>
      </div>
      <Button className="bg-red-500 px-6 py-2 rounded-md text-white my-2">Save</Button>

      <div className="relative flex flex-col sm:flex-row items-center sm:justify-between  my-4">
        <div className="my-4">
          <HeadingTypo className="sm:text-3xl text-2xl ">Product Lists</HeadingTypo>
          <ParaTypo className="sm:text-[15px] text-xs opacity-75">
            See all your's products
          </ParaTypo>
        </div>
        <SearchBox className="sm:max-w-[55%] md:max-w-[50%] lg:max-w-[30%] w-full" />
      </div>
      <hr />

      <div className="bg-white ">
        <table className="w-full overflow-auto text-xs lg:text-base text-center rounded-md shadow-md">
            <thead>
          <tr className="border-2 border-gray-300">
              <th className="p-3">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Brand</th>
              <th className="p-3">Category</th>
              <th className="p-3">Review</th>
              <th className="p-3">Total Sale</th>
              <th className="p-3">Added Date</th>
              <th className="p-3">Action</th>
          </tr>
            </thead>

          <tbody>
            <tr className="border-2 border-gray-300 lg:text-xl text-sm">
              <td className="flex flex-col items-center p-2">
                <img className="lg:h-[80px] h-[40px] rounded-md" src={jacket} alt="" />
                <ParaTypo className="text-sm lg:text-base">Leather Jacket</ParaTypo>
              </td>
              <td>Rs 200</td>
              <td>Puma</td>
              <td>Fashion</td>
              <td>22</td>
              <td>20</td>
              <td>2024-03-11</td>
              <td className="flex justify-around gap-x-1 items-center px-3">
                <Trash strokeWidth={0.9} className="cursor-pointer size-4 md:size-5"/>
                <Edit strokeWidth={0.9} className="cursor-pointer size-4 md:size-5"/>
                <Layers color="red" strokeWidth={0.9} className="cursor-pointer size-4 md:size-5"/>
              </td>
            </tr>
            <tr className="border-2 border-gray-300 lg:text-xl text-sm">
              <td className="flex flex-col items-center p-2">
                <img className="lg:h-[80px] h-[40px] rounded-md" src={jacket} alt="" />
                <ParaTypo className="text-sm lg:text-base">Leather Jacket</ParaTypo>
              </td>
              <td>Rs 200</td>
              <td>Puma</td>
              <td>Fashion</td>
              <td>22</td>
              <td>20</td>
              <td>2024-03-11</td>
              <td className="flex justify-around gap-x-1 items-center px-3">
                <Trash strokeWidth={0.9} className="cursor-pointer size-4 md:size-5"/>
                <Edit strokeWidth={0.9} className="cursor-pointer size-4 md:size-5"/>
                <Layers color="green" strokeWidth={0.9} className="cursor-pointer size-4 md:size-5"/>
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default Product;
