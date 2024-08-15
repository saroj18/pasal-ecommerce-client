import HeadingTypo from "../../../components/common/HeadingTypo";
import SearchBox from "../../../components/common/Search";
import TableHead from "../../../components/common/TableHead";
import TableBody from "../../../components/common/TableBody";
import TableRow from "../../../components/common/TableRow";
import TableData from "../../../components/common/TableData";
import { useQuery } from "../../../utils/useQuery";
import { tableHeadData } from "./constant";
import Button from "../../../components/common/Button";
import Table from "../../../components/common/Table";
import { useNavigate } from "react-router-dom";
import { useMutation } from "../../../utils/useMutation";
import React from "react";

const User = () => {
  const { data } = useQuery<any>("/user/allcustomer");
  const { mutate, data: deleteData } = useMutation();
  const navigate = useNavigate();

  const blockHandler = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation();
    mutate("/user/block", "POST", { id });
  };
  const unBlockHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string,
  ) => {
    e.stopPropagation();
    mutate("/user/unblock", "POST", { id });
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <HeadingTypo className="text-2xl p-3">All Users</HeadingTypo>
        <SearchBox className="w-[300px]" />
      </div>
      <hr />
      <Table>
        <TableHead tableHeadData={tableHeadData} />
        <TableBody>
          {data &&
            data.map((ele: any) => {
              return (
                <TableRow
                  className="cursor-pointer hover:bg-slate-50"
                  onClick={() => navigate(ele._id)}
                  key={ele._id}
                >
                  <TableData title={ele._id} className="p-4">
                    {ele._id.slice(15)}
                  </TableData>
                  <TableData className="p-4 capitalize">
                    {ele.fullname}
                  </TableData>
                  <TableData className="p-4 capitalize">
                    {ele.address?.city ?? "-"}
                  </TableData>
                  <TableData className="p-4 capitalize">
                    {ele.gender ?? "-"}
                  </TableData>
                  <TableData className="p-4">{ele.email}</TableData>
                  <TableData className="p-4">
                    {new Date(ele.createdAt).toDateString()}
                  </TableData>
                  <TableData className="p-4 capitalize">
                    {ele.verify.toString()}
                  </TableData>
                  <TableData className="p-4 capitalize">
                    {ele.signUpAs}
                  </TableData>
                  <TableData className="p-4 capitalize">
                    {ele.block ? (
                      <Button
                        onClick={(e) => unBlockHandler(e, ele._id)}
                        className="bg-green-500 px-4 py-1 border-none"
                      >
                        UnBlock
                      </Button>
                    ) : (
                      <Button
                        onClick={(e) => blockHandler(e, ele._id)}
                        className="bg-red-500 px-4 py-1 border-none"
                      >
                        Block
                      </Button>
                    )}
                  </TableData>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default User;
