import React from "react";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import Table from "../../../../components/common/Table";
import TableHead from "../../../../components/common/TableHead";
import { tableHeadData } from "./constant";
import TableBody from "../../../../components/common/TableBody";
import TableRow from "../../../../components/common/TableRow";
import { useQuery } from "../../../../utils/useQuery";
import TableData from "../../../../components/common/TableData";
import SearchBox from "../../../../components/common/Search";
import Button from "../../../../components/common/Button";

const User = () => {
  const { data } = useQuery<any>("/user/allcustomer");
  return (
    <div>
      <div className="flex justify-between items-center">
      <HeadingTypo className="text-2xl p-3">All Users</HeadingTypo>
      <SearchBox className="w-[300px]"/>
      </div>
      <hr />
      <Table >
        <TableHead tableHeadData={tableHeadData} />
        <TableBody>
          {data &&
            data.map((ele: any, index: number) => {
              return (
                <TableRow >
                  <TableData title={ele._id} className="p-4">{ele._id.slice(15)}</TableData>
                  <TableData className="p-4 capitalize">{ele.fullname}</TableData>
                  <TableData className="p-4 capitalize">{ele.address?.city}</TableData>
                  <TableData className="p-4 capitalize">{ele.gender}</TableData>
                  <TableData className="p-4">{ele.email}</TableData>
                  <TableData className="p-4">
                    {new Date(ele.createdAt).toDateString()}
                  </TableData>
                  <TableData className="p-4 capitalize">{ele.verify.toString()}</TableData>
                  <TableData className="p-4 capitalize">{
                    <div className="flex gap-x-3">
                    <Button className="bg-green-500 px-4 py-1">View</Button>
                    <Button className="bg-red-500 px-4 py-1">Block</Button>
                    </div>
                  }</TableData>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default User;
