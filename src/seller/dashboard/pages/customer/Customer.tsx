import HeadingTypo from "../../../../components/common/HeadingTypo";
import ParaTypo from "../../../../components/common/ParaTypo";
import Table from "../../../../components/common/Table";
import TableHead from "../../../../components/common/TableHead";
import { tableHeadData } from "./data";
import TableBody from "../../../../components/common/TableBody";
import TableData from "../../../../components/common/TableData";
import { useQuery } from "../../../../hooks/useQuery";
import TableRow from "../../../../components/common/TableRow";
import dayjs from "dayjs";
import { formatDistanceToNow } from "date-fns";
import Shimmer from "../../../../components/common/Shimmer";

const Customer = () => {
  const { data, loading } = useQuery<any>("/user/allmycustomer");

  console.log(data);

  const value = dayjs(data?.[0]?.createdAt).format("YYYY//MM/DD");
  console.log(value);
  return (
    <div>
      <div className="sticky left-0 top-0 bg-white z-0">
        <HeadingTypo className="text-3xl">Customers</HeadingTypo>
        <ParaTypo className="opacity-75 text-[15px]">
          all customers lists
        </ParaTypo>
      </div>
      {loading ? <Shimmer height="50px" count={8} shape="rectange" /> : null}
      {data?.length < 1 ? (
        <HeadingTypo className="text-center font-semibold text-xl">
          0 Customer Found
        </HeadingTypo>
      ) : (
        <div className="text-sm md:text-base">
          <Table>
            <TableHead tableHeadData={tableHeadData} />
            <TableBody>
              {data?.map((ele: any) => {
                return (
                  <TableRow key={ele._id}>
                    <TableData title={ele._id} className="p-2">
                      {ele.customer._id.slice(15)}
                    </TableData>
                    <TableData className="p-2 capitalize">
                      {ele.customer.fullname}
                    </TableData>
                    <TableData
                      title={ele.productList.name}
                      className="p-2 capitalize max-w-xs truncate"
                    >
                      {ele.productList.name}
                    </TableData>
                    <TableData title={ele.productList._id} className="p-2">
                      {ele.productList._id.slice(15)}
                    </TableData>
                    <TableData className="p-2">
                      Rs {ele.productList.price}
                    </TableData>
                    <TableData className="p-2">
                      {new Date(ele?.createdAt).toDateString()}
                    </TableData>
                    <TableData className="p-2 capitalize">
                      {formatDistanceToNow(new Date(ele?.createdAt), {
                        addSuffix: true,
                      })}
                    </TableData>
                    <TableData className="p-2">{ele.status}</TableData>
                    <TableData className="p-2 capitalize">
                      {ele.payMethod}
                    </TableData>
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

export default Customer;
