import HeadingTypo from "../../../../components/common/HeadingTypo";
import ParaTypo from "../../../../components/common/ParaTypo";
import SearchBox from "../../../../components/common/Search";
import Button from "../../../../components/common/Button";
import TableHead from "../../../../components/common/TableHead";
import Table from "../../../../components/common/Table";
import { tableData, tableHeadData } from "./tableData";
import TableData from "../../../../components/common/TableData";
import TableBody from "../../../../components/common/TableBody";
import { useQuery } from "../../../../utils/useQuery";
import TableRow from "../../../../components/common/TableRow";

const Inventory = () => {
  const { data } = useQuery<any>("/product/inventory");
  console.log(data);
  return (
    <div className="overflow-auto">
      <div className="flex flex-col lg:flex-row gap-y-4 lg:justify-between w-full  md:relative sticky left-0 top-0">
        <div className="max-w-fit w-full mx-auto lg:m-0 0">
          <HeadingTypo className="text-2xl font-bold">Inventory</HeadingTypo>
          <ParaTypo className="opacity-75 text-[15px]">
            Inventory of all products
          </ParaTypo>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full lg:max-w-[60%] xl:max-w-[40%] items-center gap-3 ">
          <SearchBox className="w-full md:max-w-[60%]" />
          <div className="flex w-full flex-col lg:flex-row gap-3">
            <Button className="bg-green-500 px-4 py-2 text-white rounded-md">
              High Sale
            </Button>
            <Button className="bg-red-500 px-4 py-2 text-white rounded-md">
              Low Sale
            </Button>
          </div>
        </div>
      </div>

      <Table className=" text-xs md:text-base text-center bg-white shadow-md my-4">
        <TableHead
          tableHeadStyle="p-2"
          className="border-gray-300 border-t-2 border-b-2 border-l-0 border-r-0 sticky top-0 left-0 bg-white"
          tableHeadData={tableHeadData}
        />
        <TableBody>
          {data?.map((ele: any, index: number) => {
            return (
              <TableRow
                key={index}
                className="border-gray-300 border-t-2 border-b-2 border-l-0 border-r-0"
              >
                <TableData title={ele._id} className="p-3">
                  {ele._id.slice(15)}
                </TableData>
                <TableData title={ele.name} className="p-3 truncate max-w-xs">
                  {ele.name.slice(0, 30)}
                </TableData>
                <TableData className="p-3">{ele.category}</TableData>
                <TableData className="p-3">{ele.stock!=0?ele.stock:<span className="text-red-500 font-semibold">Out of Stock</span>}</TableData>
                <TableData className="p-3">
                  {new Date(ele.createdAt).toDateString()}
                </TableData>
                <TableData className="p-3">{ele.price}</TableData>
                <TableData className="p-3">{ele.discount}%</TableData>
                <TableData className="p-3">{ele.brand}</TableData>
                <TableData className="p-3">{ele.totalSale}</TableData>
                <TableData className="p-3">{ele.price * 245}</TableData>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Inventory;
