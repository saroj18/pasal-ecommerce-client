import { twMerge } from "tailwind-merge";

const TableHead = ({
  tableHeadData,
  className,
}: {
  tableHeadData: string[];
  className?: string;
  tableHeadStyle?: string;
}) => {
  return (
    <thead>
      <tr className={"sticky top-0 left-0 bg-white border-t-2" + className}>
        {tableHeadData.map((ele, index) => {
          return (
            <th className={"p-2 min-w-[120px] whitespace-nowrap"} key={index}>
              {ele}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
