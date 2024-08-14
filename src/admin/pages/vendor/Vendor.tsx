import { useEffect, useState } from "react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import Table from "../../../components/common/Table";
import TableHead from "../../../components/common/TableHead";
import TableBody from "../../../components/common/TableBody";
import TableData from "../../../components/common/TableData";
import { tableHeadData } from "./tableData";
import Button from "../../../components/common/Button";
import SearchBox from "../../../components/common/Search";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../../utils/useQuery";
import TableRow from "../../../components/common/TableRow";

const Vendor = () => {
  const navigate = useNavigate();
  const [vendorList, setVendorList] = useState([]);

  const { data } = useQuery<any>("/vendor");

  useEffect(() => {
    if (data) {
      setVendorList(data);
    }
  }, [data]);

  return (
    <div className="w-full overflow-auto">
      <div className="flex flex-col md:flex-row items-center justify-between sticky left-0 top-0">
        <HeadingTypo className="text-3xl my-4">Vendor Lists</HeadingTypo>
        <SearchBox className="sm:w-[45%] md:w-[25%] w-full" />
      </div>
      <Table className="border-2 text-xs md:text-base">
        <TableHead className="" tableHeadData={tableHeadData} />
        <TableBody>
          {vendorList &&
            vendorList.map((ele: any, index) => {
              return (
                <>
                  <TableRow>
                    <TableData key={index} className="p-2">
                      {ele._id.slice(15)}
                    </TableData>
                    <TableData className="p-2">{ele.shopName}</TableData>
                    <TableData className="p-2">{ele.shopAddress}</TableData>
                    <TableData className="p-2">2024-03-03</TableData>
                    <TableData className="p-2">{ele.owner.fullname}</TableData>
                    <TableData className="p-2">{ele.category}</TableData>
                    <TableData className="p-2">{ele.monthlyTurnover}</TableData>
                    <TableData className="p-2">
                      <Button
                        onClick={() => navigate(ele._id)}
                        className="bg-green-500 text-white py-2 px-4 rounded-md"
                      >
                        View Full Details
                      </Button>
                    </TableData>
                  </TableRow>
                </>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Vendor;
