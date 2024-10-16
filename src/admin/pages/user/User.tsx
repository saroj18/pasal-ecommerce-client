import HeadingTypo from "../../../components/common/HeadingTypo";
import TableHead from "../../../components/common/TableHead";
import TableBody from "../../../components/common/TableBody";
import TableRow from "../../../components/common/TableRow";
import TableData from "../../../components/common/TableData";
import { useQuery } from "../../../hooks/useQuery";
import { tableHeadData } from "./constant";
import Button from "../../../components/common/Button";
import Table from "../../../components/common/Table";
import { useNavigate } from "react-router-dom";
import { useMutation } from "../../../hooks/useMutation";
import React from "react";
import Shimmer from "../../../components/common/Shimmer";
import { UserType } from "../../../types/userType";

const User = () => {
  const { data, refetch, loading } = useQuery<UserType[]>("/user/allcustomer");
  const { mutate } = useMutation();
  const navigate = useNavigate();

  const blockHandler = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation();
    mutate("/user/block", "POST", { id }, refetch);
  };
  const unBlockHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string,
  ) => {
    e.stopPropagation();
    mutate("/user/unblock", "POST", { id }, refetch);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <HeadingTypo className="text-2xl p-3">All Users</HeadingTypo>
        {/* <SearchBox className="w-[300px]" /> */}
      </div>
      <hr />
      {loading ? <Shimmer height="60px" count={8} shape="rectange" /> : null}
      {(data as UserType[])?.length > 0 && (
        <Table>
          <TableHead tableHeadData={tableHeadData} />
          <TableBody>
            {(data as UserType[]).map((ele: UserType) => {
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
                  <TableData
                    className={`p-4 capitalize ${ele.verify ? "text-green-500" : "text-red-500"}`}
                  >
                    {ele.verify.toString()}
                  </TableData>
                  <TableData
                    className={`p-4 capitalize ${ele.shopVerify ? "text-green-500" : "text-red-500"}`}
                  >
                    {ele.shopVerify.toString()}
                  </TableData>
                  <TableData className="p-4 capitalize">
                    {ele.signUpAs}
                  </TableData>
                  {ele.role != "admin" && (
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
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default User;
