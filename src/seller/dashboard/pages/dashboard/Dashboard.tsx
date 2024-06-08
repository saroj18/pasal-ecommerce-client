import React, { useEffect, useRef } from "react";
import FilterBar from "../../components/FilterBar";
import AmountCard from "../../components/AmountCard";
import { Line } from "react-chartjs-2";
import dayjs from "dayjs";
import {
  CategoryScale,
  Chart,
  ChartOptions,
  LineElement,
  LinearScale,
  PointElement,
  scales,
} from "chart.js";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import MostSellingProductCard from "../../components/MostSellingProductCard";
import jacket from '../../../../assets/jacket.png'

const labels = [];
let date = dayjs();
Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

for (let i = 0; i < 7; i++) {
  labels.push(date.format("M-DD"));
  date = date.add(1, "d");
}

const data = {
  labels: labels,
  datasets: [
    {
      label: " adult",
      backgroundColor: "blue",
      borderColor: "blue",
      data: [4, 2, 3, 4, 5, 6, 7, 8],
      tension: 0.3,
    },
    {
      label: "children",
      backgroundColor: "green",
      borderColor: "green",
      data: [9, 2, 3, 6, 5, 6, 7, 8],
      tension: 0.3,
    },
    {
      label: "infants",
      backgroundColor: "red",
      borderColor: "red",
      data: [5, 2, 3, 4, 5, 3, 7, 8],
      tension: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
};
const Dashboard = () => {
  return (
    <div className="w-full  font-poppins">
      <FilterBar />
      <div className="flex gap-x-4 mt-5">
        <AmountCard
          className={"grow bg-green-50"}
          heading="Estimate Revenue"
          amount="$2345"
          percent="20%"
          actAmount="+2453"
        />
        <AmountCard
          className={"grow bg-red-50"}
          heading="Estimate Revenue"
          amount="$2345"
          percent="20%"
          actAmount="+2453"
        />
        <AmountCard
          className={"grow bg-gray-50"}
          heading="Estimate Revenue"
          amount="$2345"
          percent="20%"
          actAmount="+2453"
        />
        <AmountCard
          className={"grow bg-orange-50"}
          heading="Estimate Revenue"
          amount="$2345"
          percent="20%"
          actAmount="+2453"
        />
        <AmountCard
          className={"grow bg-blue-50"}
          heading="Estimate Revenue"
          amount="$2345"
          percent="20%"
          actAmount="+2453"
        />
      </div>
      <div className="flex gap-x-3 mt-6">
        <div className="grow flex justify-center items-center max-h-[350px] rounded-md border-2 border-gray-500 shadow-md ">
          <Line data={data} options={options} />
        </div>
        <div className="border-2 border-gray-500 rounded-md p-3 max-w-[35%] max-h-[350px] overflow-y-scroll">
          <HeadingTypo className="text-xl my-3">
            Most Selling Products
          </HeadingTypo>
          <div className="shadow-md">
            <MostSellingProductCard />
            <MostSellingProductCard />
            <MostSellingProductCard />
            <MostSellingProductCard />
          </div>
        </div>
      </div>
      <HeadingTypo className="text-2xl my-8">Recent Orders</HeadingTypo>
      <table className="w-full text-center">
        <thead className="text-xl">
          <tr>
            <th className="p-4">Product</th>
            <th className="p-4">Customer</th>
            <th className="p-4">Order ID</th>
            <th className="p-4">Date</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2 border-t-2 ">
            <td className="p-2 flex items-center justify-center gap-x-2"> <img className="w-[60px] border-2 border-gray-300 shadow-md rounded-md p-1" src={jacket}/> Leather Jacket</td>
            <td className="p-2">John Doe</td>
            <td className="p-2">4892308534997</td>
            <td className="p-2">27 June 2035</td>
            <td className="p-2">Pending</td>
          </tr>
          <tr className="border-b-2 border-t-2 ">
            <td className="p-2 flex items-center justify-center gap-x-2"> <img className="w-[60px] border-2 border-gray-300 shadow-md rounded-md p-1" src={jacket}/> Leather Jacket</td>
            <td className="p-2">John Doe</td>
            <td className="p-2">4892308534997</td>
            <td className="p-2">27 June 2035</td>
            <td className="p-2">Pending</td>
          </tr>
          <tr className="border-b-2 border-t-2 ">
            <td className="p-2 flex items-center justify-center gap-x-2"> <img className="w-[60px] border-2 border-gray-300 shadow-md rounded-md p-1" src={jacket}/> Leather Jacket</td>
            <td className="p-2">John Doe</td>
            <td className="p-2">4892308534997</td>
            <td className="p-2">27 June 2035</td>
            <td className="p-2">Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
