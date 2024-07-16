import React from "react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import Table from "../../../components/common/Table";
import TableHead from "../../../components/common/TableHead";
import { tableHead } from "./tableData";
import TableBody from "../../../components/common/TableBody";
import TableData from "../../../components/common/TableData";
import Button from "../../../components/common/Button";
import { useNavigate } from "react-router-dom";

const VendorApprove = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-auto">
      <HeadingTypo className="text-3xl my-4 sticky left-0 top-0">
        Apply for Register
      </HeadingTypo>
      <Table className="text-xs md:text-base">
        <TableHead tableHeadData={tableHead} />
        <TableBody>
          <TableData className="p-2">79837429823</TableData>
          <TableData className="p-2">Abc Mart</TableData>
          <TableData className="p-2">John Doe</TableData>
          <TableData className="p-2">Kalanki,Kathmandu</TableData>
          <TableData className="p-2">Grosery</TableData>
          <TableData className="p-2">2023-03-02</TableData>
          <TableData className="p-2 flex items-center gap-x-2 justify-center">
            <Button
              onClick={() => navigate("details")}
              className="bg-green-500 text-white py-2 px-5 rounded-md"
            >
              Review
            </Button>
            {false && (
              <Button className=" text-white py-2 px-5 rounded-md bg-blue-500">
                View
              </Button>
            )}
          </TableData>
          <TableData className="p-2 uppercase">Pending</TableData>
        </TableBody>
      </Table>
    </div>
  );
};

export default VendorApprove;
