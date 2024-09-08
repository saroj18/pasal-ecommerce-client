import { useParams } from "react-router-dom";
import OrderCard from "../../../../components/OrderCard";
import { useQuery } from "../../../../utils/useQuery";
import Shimmer from "../../../../components/common/Shimmer";

const OrderHistory = () => {
  const { id } = useParams();
  const { data,loading } = useQuery<any>(`/order/history?id=${id}`);
  console.log(data);
  return (
    <div className="grid lg:grid-cols-2 gap-3 p-3">
      {loading?<Shimmer height="300px" count={4} shape="rectange"/>:data?.map((ele: any, index: number) => {
        return (
          <OrderCard
            background={
              ele._id === "complete"
                ? "green"
                : ele._id === "pending"
                  ? "blue"
                  : "red"
            }
            key={index}
            date={new Date(ele.updatedAt).toDateString()}
            info={ele.info}
            element={ele}
          />
        );
      })}
    </div>
  );
};

export default OrderHistory;
