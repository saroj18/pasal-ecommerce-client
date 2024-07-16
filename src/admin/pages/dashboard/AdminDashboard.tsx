import React from "react";
import AmountCard from "../../../seller/dashboard/components/AmountCard";
import HeadingTypo from "../../../components/common/HeadingTypo";
import MostSellingProductCard from "../../../seller/dashboard/components/MostSellingProductCard";

const AdminDashboard = () => {
  return (
    <div className="w-full py-2">
      <HeadingTypo className="my-6 text-3xl">Welcome,To Dashboard</HeadingTypo>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 justify-between gap-3">
        <AmountCard
          heading="Total Vendors"
          amount="543"
          actAmount="200"
          percent="2%"
          className="grow bg-green-100"
        />
        <AmountCard
          heading="Total DeleveryBoy"
          amount="66"
          actAmount="200"
          percent="2%"
          className="grow bg-red-100"
        />
        <AmountCard
          heading="Total Category"
          amount="444"
          actAmount="200"
          percent="2%"
          className="grow bg-orange-100"
        />
        <AmountCard
          heading="Total Products"
          amount="523"
          actAmount="200"
          percent="2%"
          className="grow bg-blue-100"
        />
        <AmountCard
          heading="Total User"
          amount="124"
          actAmount="200"
          percent="2%"
          className="grow bg-purple-100"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-xs sm:text-base gap-3 mt-6">
        <div className=" border-2 border-gray-300 shadow-md p-2 rounded-md bg-white">
          <HeadingTypo className="text-xl my-3 font-bold">
            Top Vender
          </HeadingTypo>
          <div className="max-h-[400px] overflow-y-scroll">
            <MostSellingProductCard
              name="John Doe Store"
              id="8768979798779"
              result="123 Sales"
            />
            <MostSellingProductCard
              name="John Doe Store"
              id="8768979798779"
              result="123 Sales"
            />
            <MostSellingProductCard
              name="John Doe Store"
              id="8768979798779"
              result="123 Sales"
            />
            <MostSellingProductCard
              name="John Doe Store"
              id="8768979798779"
              result="123 Sales"
            />
          </div>
        </div>
        <div className=" border-2 border-gray-300 shadow-md p-2 rounded-md bg-white">
          <HeadingTypo className="text-xl my-3 font-bold">
            Top Selling Products
          </HeadingTypo>
          <div className="max-h-[400px] overflow-y-scroll">
            <MostSellingProductCard
              name="Leather Jackent"
              id="8768979798779"
              result="123 Sales"
            />
            <MostSellingProductCard
              name="Leather Jackent"
              id="8768979798779"
              result="123 Sales"
            />
            <MostSellingProductCard
              name="Leather Jackent"
              id="8768979798779"
              result="123 Sales"
            />
            <MostSellingProductCard
              name="Leather Jackent"
              id="8768979798779"
              result="123 Sales"
            />
          </div>
        </div>
        <div className=" border-2 border-gray-300 shadow-md p-2 rounded-md bg-white">
          <HeadingTypo className="text-xl my-3 font-bold">
            Top Selling Category
          </HeadingTypo>
          <div className="max-h-[400px] overflow-y-scroll">
            <MostSellingProductCard
              name="Grocery"
              id="8768979798779"
              result="123 Sales"
            />
            <MostSellingProductCard
              name="Grocery"
              id="8768979798779"
              result="123 Sales"
            />
            <MostSellingProductCard
              name="Grocery"
              id="8768979798779"
              result="123 Sales"
            />
            <MostSellingProductCard
              name="Grocery"
              id="8768979798779"
              result="123 Sales"
            />
          </div>
        </div>
        <div className=" border-2 border-gray-300 shadow-md p-2 rounded-md bg-white">
          <HeadingTypo className="text-xl my-3 font-bold">
            Top Delivery Person
          </HeadingTypo>
          <div className="max-h-[400px] overflow-y-scroll">
            <MostSellingProductCard
              name="John Doe"
              id="8768979798779"
              result="123 Delivery"
            />
            <MostSellingProductCard
              name="John Doe"
              id="8768979798779"
              result="123 Delivery"
            />
            <MostSellingProductCard
              name="John Doe"
              id="8768979798779"
              result="123 Delivery"
            />
            <MostSellingProductCard
              name="John Doe"
              id="8768979798779"
              result="123 Delivery"
            />
          </div>
        </div>
        <div className=" border-2 border-gray-300 shadow-md p-2 rounded-md bg-white">
          <HeadingTypo className="text-xl my-3 font-bold">
            Top Profit Product
          </HeadingTypo>
          <div className="max-h-[400px] overflow-y-scroll">
            <MostSellingProductCard
              name="1 Plate Momo"
              id="8768979798779"
              result="$2000"
            />
            <MostSellingProductCard
              name="1 Plate Momo"
              id="8768979798779"
              result="$2000"
            />
            <MostSellingProductCard
              name="1 Plate Momo"
              id="8768979798779"
              result="$2000"
            />
            <MostSellingProductCard
              name="1 Plate Momo"
              id="8768979798779"
              result="$2000"
            />
          </div>
        </div>
        <div className=" border-2 border-gray-300 shadow-md p-2 rounded-md bg-white">
          <HeadingTypo className="text-xl my-3 font-bold">
            Top Profit Category
          </HeadingTypo>
          <div className="max-h-[400px] overflow-y-scroll">
            <MostSellingProductCard
              name="Grocery"
              id="8768979798779"
              result="$3243"
            />
            <MostSellingProductCard
              name="Grocery"
              id="8768979798779"
              result="$3243"
            />
            <MostSellingProductCard
              name="Grocery"
              id="8768979798779"
              result="$3243"
            />
            <MostSellingProductCard
              name="Grocery"
              id="8768979798779"
              result="$3243"
            />
          </div>
        </div>
        <div className=" border-2 border-gray-300 shadow-md p-2 rounded-md bg-white">
          <HeadingTypo className="text-xl my-3 font-bold">
            Top Expensive Products
          </HeadingTypo>
          <div className="max-h-[400px] overflow-y-scroll">
            <MostSellingProductCard
              name="Diamond Ring"
              id="8768979798779"
              result="$3243 Per/ps"
            />
            <MostSellingProductCard
              name="Diamond Ring"
              id="8768979798779"
              result="$3243 Per/ps"
            />
            <MostSellingProductCard
              name="Diamond Ring"
              id="8768979798779"
              result="$3243 Per/ps"
            />
            <MostSellingProductCard
              name="Diamond Ring"
              id="8768979798779"
              result="$3243 Per/ps"
            />
          </div>
        </div>
        <div className=" border-2 border-gray-300 shadow-md p-2 rounded-md bg-white">
          <HeadingTypo className="text-xl my-3 font-bold">
            Top Payment Method
          </HeadingTypo>
          <div className="max-h-[400px] overflow-y-scroll">
            <MostSellingProductCard
              name="Khalti"
              id="8768979798779"
              result="44 Trans"
            />
            <MostSellingProductCard
              name="Esewa"
              id="8768979798779"
              result="12 Trans"
            />
            <MostSellingProductCard
              name="IME Pay"
              id="8768979798779"
              result="4 Trans"
            />
            <MostSellingProductCard
              name="COD"
              id="8768979798779"
              result="42 Trans"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
