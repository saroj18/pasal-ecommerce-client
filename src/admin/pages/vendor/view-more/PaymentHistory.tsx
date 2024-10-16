import Shimmer from "../../../../components/common/Shimmer";
import Table from "../../../../components/common/Table";
import TableData from "../../../../components/common/TableData";
import TableHead from "../../../../components/common/TableHead";
import TableRow from "../../../../components/common/TableRow";
import { useQuery } from "../../../../hooks/useQuery";
import { PaymentType } from "../../../../types/PaymentType";
import { tableHeadDataForPaymentHistory } from "../tableData";

const PaymentHistory = () => {
  const id = window.location.pathname.split("/")[3];
  const { data, loading } = useQuery<PaymentType[]>(
    `/payment/vendorhistory?id=${id}`,
  );
  console.log(data);
  return (
    <div>
      {loading ? (
        <Shimmer height="80px" count={10} shape="rectange" />
      ) : (
        <Table>
          <TableHead tableHeadData={tableHeadDataForPaymentHistory} />
          {data &&
            (data as PaymentType[]).map((ele: any, index: number) => {
              return (
                <TableRow key={ele._id + index}>
                  <TableData title={ele._id} className="p-2">
                    {ele._id.slice(15)}
                  </TableData>
                  <TableData className="p-2">
                    {new Date(ele.createdAt).toDateString()}
                  </TableData>
                  <TableData className="p-2">{ele.orders.payMethod}</TableData>
                  <TableData
                    title={ele.products.name}
                    className="p-2 max-w-xs truncate"
                  >
                    {ele.products.name}
                  </TableData>
                  <TableData className="p-2">{ele.products.price}</TableData>
                  <TableData
                    title={ele.shop.shopName}
                    className="p-2 max-w-xs truncate"
                  >
                    {ele.shop.shopName}
                  </TableData>
                </TableRow>
              );
            })}
        </Table>
      )}
    </div>
  );
};

export default PaymentHistory;
