import { ChartData, ChartTypeRegistry } from "chart.js";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";
import HeadingTypo from "../../../components/common/HeadingTypo";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import ParaTypo from "../../../components/common/ParaTypo";

interface ChartProps {
  chartType: keyof ChartTypeRegistry;
  heading: string;
  showLabels?: boolean;
  className?: string;
  graphData: any[];
  label: string;
  color: string;
}

const SetChart = ({
  chartType,
  heading,
  className,
  // showLabels = true,
  graphData,
  label,
  color,
}: ChartProps) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let count = 0;
    graphData &&
      graphData?.forEach((ele) => {
        count += ele?.value;
      });
    setTotal(count);
  }, [graphData]);

  const data: ChartData = {
    labels: graphData ? graphData.map((ele) => ele.date.slice(0, 8)) : [],
    datasets: [
      {
        label: label,
        data: graphData && graphData.map((ele) => ele.value),
        tension: 0.4,
        fill: true,
        circular: true,
        borderColor: color,
        backgroundColor: color,
      },
    ],
  };
  return (
    <div
      className={twMerge(
        " border-2 border-gray-300 rounded-md p-2 shadow-md",
        className,
      )}
    >
      <div className="flex justify-between items-center">
        <HeadingTypo className="sm:text-2xl opacity-75 font-semibold text-xl">
          {heading}
        </HeadingTypo>
        <ParaTypo className="text-xl font-semibold">{total}</ParaTypo>
      </div>
      <Chart type={chartType} data={data} />
    </div>
  );
};

export default SetChart;
