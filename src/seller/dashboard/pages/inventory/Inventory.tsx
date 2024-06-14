import React, { Fragment } from "react";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import ParaTypo from "../../../../components/common/ParaTypo";
import SearchBox from "../../../../components/common/Search";
import Button from "../../../../components/common/Button";
import TableHead from "../../../../components/common/TableHead";
import Table from "../../../../components/common/Table";
import { tableData, tableHeadData } from "./tableData";
import TableData from "../../../../components/common/TableData";
import TableBody from "../../../../components/common/TableBody";

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

      <Table className="w-full text-center bg-white shadow-md my-4">
        <TableHead
          tableHeadStyle="p-2"
          className="border-gray-300 border-t-2 border-b-2 border-l-0 border-r-0 sticky top-0 left-0 bg-white"
          tableHeadData={tableHeadData}
        />
        <TableBody className="border-gray-300 border-t-2 border-b-2 border-l-0 border-r-0">
          {tableData.map((ele, index) => {
            return (
              <Fragment key={index}>
                <TableData className="p-3">{ele}</TableData>
              </Fragment>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Inventory;
