import { useEffect, useState } from "react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import Table from "../../../components/common/Table";
import TableHead from "../../../components/common/TableHead";
import { tableHead } from "./tableData";
import TableBody from "../../../components/common/TableBody";
import TableData from "../../../components/common/TableData";
import Button from "../../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../../hooks/useQuery";
import TableRow from "../../../components/common/TableRow";

const VendorApprove = () => {
  const navigate = useNavigate();
  const [vendor, setVendor] = useState<any>([]);
  const { data } = useQuery<any>("/vendor/unverified");

  useEffect(() => {
    if (data) {
      setVendor(data);
    }
  }, [data]);

  return (
    <div className="overflow-auto">
      <HeadingTypo className="text-3xl my-4 sticky left-0 top-0">
        Apply for Register
      </HeadingTypo>
      {vendor.length > 0 && (
        <Table className="text-xs md:text-base">
          <TableHead tableHeadData={tableHead} />
          <TableBody>
            {vendor.map((ele: any, index: number) => {
              return (
                <TableRow key={index}>
                  <TableData className="p-2">{ele._id.slice(15)}</TableData>
                  <TableData className="p-2">{ele.shopName}</TableData>
                  <TableData className="p-2">{ele.owner.fullname}</TableData>
                  <TableData className="p-2">{ele.shopAddress}</TableData>
                  <TableData className="p-2">{ele.category}</TableData>
                  <TableData className="p-2">
                    {new Date(ele.createdAt).toDateString()}
                  </TableData>
                  <TableData className="p-2 flex items-center gap-x-2 justify-center">
                    <Button
                      onClick={() => navigate(ele._id)}
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
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default VendorApprove;
