import Shimmer from "../../../components/common/Shimmer";
import Table from "../../../components/common/Table";
import TableData from "../../../components/common/TableData";
import TableHead from "../../../components/common/TableHead";
import TableRow from "../../../components/common/TableRow";
import { useQuery } from "../../../utils/useQuery";
import { tableHeadDataForPayment } from "./constant";

const Payment = () => {
  const id = window.location.pathname.split("/")[3];
  const { data, loading } = useQuery<any>(`/payment/history?id=${id}`);
  return (
    <div>
      {loading ? (
        <Shimmer height="50px" count={9} shape="rectange" />
      ) : (
        data?.length > 0 && (
          <Table>
            <TableHead tableHeadData={tableHeadDataForPayment} />
            {data &&
              data.map((ele: any, index: number) => {
                return (
                  <TableRow key={ele._id + index}>
                    <TableData title={ele._id} className="p-2">
                      {ele._id.slice(15)}
                    </TableData>
                    <TableData className="p-2">
                      {new Date(ele.createdAt).toDateString()}
                    </TableData>
                    <TableData className="p-2">
                      {ele.orders.payMethod}
                    </TableData>
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
        )
      )}
    </div>
  );
};

export default Payment;
