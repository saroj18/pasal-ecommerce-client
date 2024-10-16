import HeadingTypo from "../../../../components/common/HeadingTypo";
import ParaTypo from "../../../../components/common/ParaTypo";
import TableHead from "../../../../components/common/TableHead";
import Table from "../../../../components/common/Table";
import { tableHeadData } from "./tableData";
import TableData from "../../../../components/common/TableData";
import TableBody from "../../../../components/common/TableBody";
import { useQuery } from "../../../../hooks/useQuery";
import TableRow from "../../../../components/common/TableRow";
import Shimmer from "../../../../components/common/Shimmer";
import { ProductType } from "../../../../types/ProductType";

const Inventory = () => {
  const { data, loading } = useQuery<ProductType[]>("/product/inventory");
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
          {/* <SearchBox className="w-full md:max-w-[60%]" /> */}
          {/* <div className="flex w-full flex-col lg:flex-row gap-3">
            <Button className="bg-green-500 px-4 max-w-sm py-2 mx-auto text-white rounded-md">
              High Sale
            </Button>
            <Button className="bg-red-500 px-4 max-w-sm mx-auto py-2 text-white rounded-md">
              Low Sale
            </Button>
          </div> */}
        </div>
      </div>
      {loading ? <Shimmer height="60px" count={8} shape="rectange" /> : null}
      {(data as ProductType[])?.length < 1 ? (
        <HeadingTypo className="text-center font-semibold text-xl">
          0 Product Found
        </HeadingTypo>
      ) : (
        <div>
          <Table className=" text-sm md:text-base  text-center bg-white shadow-md my-4">
            <TableHead
              tableHeadStyle="p-2"
              className="border-gray-300 border-t-2 border-b-2 border-l-0 border-r-0 sticky top-0 left-0 bg-white"
              tableHeadData={tableHeadData}
            />
            <TableBody>
              {(data as ProductType[])?.map((ele: any, index: number) => {
                return (
                  <TableRow
                    key={index}
                    className="border-gray-300 border-t-2 border-b-2 border-l-0 border-r-0"
                  >
                    <TableData title={ele._id} className="p-3">
                      {ele._id.slice(15)}
                    </TableData>
                    <TableData
                      title={ele.name}
                      className="p-3 truncate max-w-xs"
                    >
                      {ele.name.slice(0, 30)}
                    </TableData>
                    <TableData className="p-3">{ele.category}</TableData>
                    <TableData className="p-3">
                      {ele.stock != 0 ? (
                        ele.stock
                      ) : (
                        <span className="text-red-500 font-semibold">
                          Out of Stock
                        </span>
                      )}
                    </TableData>
                    <TableData className="p-3">
                      {new Date(ele.createdAt).toDateString()}
                    </TableData>
                    <TableData className="p-3">{ele.price}</TableData>
                    <TableData className="p-3">{ele.discount}%</TableData>
                    <TableData className="p-3">
                      Rs {ele.priceAfterDiscount}
                    </TableData>
                    <TableData className="p-3">{ele.brand}</TableData>
                    <TableData className="p-3">{ele.totalSale}</TableData>
                    <TableData className="p-3">{ele.totalSaleAmount}</TableData>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Inventory;
