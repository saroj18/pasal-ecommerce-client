import { ChartData, ChartTypeRegistry } from "chart.js";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";
import HeadingTypo from "../../../components/common/HeadingTypo";
import { twMerge } from "tailwind-merge";

interface ChartProps {
  chartType: keyof ChartTypeRegistry;
  heading: string;
  showLabels?: boolean;
  className?: string;
}

const SetChart = ({
  chartType,
  heading,
  className,
  showLabels = true,
}: ChartProps) => {
  const data: ChartData = {
    labels: showLabels
      ? Array(30)
          .fill(null)
          .map((_, index) => `2024-03-${index + 1}`)
      : [],
    datasets: [
      {
        label: "first",
        data: Array(30)
          .fill(null)
          .map((_, index) => Math.floor(Math.random() * index)),
        tension: 0.4,
        fill: true,
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
      <HeadingTypo className="sm:text-3xl opacity-75 font-semibold text-xl">
        {heading}
      </HeadingTypo>
      <Chart type={chartType} data={data} />
    </div>
  );
};

export default SetChart;
