import React from "react";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import ParaTypo from "../../../../components/common/ParaTypo";
import Table from "../../../../components/common/Table";
import TableHead from "../../../../components/common/TableHead";
import { tableHeadData } from "./data";
import TableBody from "../../../../components/common/TableBody";
import TableData from "../../../../components/common/TableData";

const Customer = () => {
  return (
    <div className="overflow-auto">
      <div className="sticky left-0 top-0">
        <HeadingTypo className="text-3xl">Customers</HeadingTypo>
        <ParaTypo className="opacity-75 text-[15px]">
          all customers lists
        </ParaTypo>
      </div>
      <div className="text-sm md:text-base">
        <Table>
          <TableHead tableHeadData={tableHeadData} />
          <TableBody>
            <TableData className="p-2">89789345724935</TableData>
            <TableData className="p-2">John Doe</TableData>
            <TableData className="p-2">Leather Jacket</TableData>
            <TableData className="p-2">43928iuoi98943u</TableData>
            <TableData className="p-2">Rs 2000</TableData>
            <TableData className="p-2">10%</TableData>
            <TableData className="p-2">2024-03-02</TableData>
            <TableData className="p-2">1 day ago</TableData>
            <TableData className="p-2">Esewa</TableData>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Customer;
