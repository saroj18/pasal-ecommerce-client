import OrderCard from "../../../components/OrderCard";
import { useQuery } from "../../../utils/useQuery";

const Order = () => {
  const id = window.location.pathname.split("/")[3];
  const { data } = useQuery<any>(`/order/${id}`);
  console.log(data);
  return (
    <div className="grid lg:grid-cols-2 gap-3 p-3">
      {data?.map((ele: any, index: number) => {
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
            date={new Date(ele.info.updatedAt).toDateString()}
            info={ele.info}
            element={ele}
          />
        );
      })}
    </div>
  );
};

export default Order;
