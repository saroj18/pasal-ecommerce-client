import OrderCard from "../../../components/OrderCard";
import { useQuery } from "../../../utils/useQuery";

const Order = () => {
  const id = window.location.pathname.split("/")[3];
  const { data } = useQuery<any>(`/order/${id}`);
  console.log(data);
  return (
    <div className="grid lg:grid-cols-2 gap-3">
      {data?.map((ele: any, index: number) => {
        return (
          <OrderCard
            background="blue"
            key={index}
            label="Est. arrival on 20 Jan 2024"
            info={ele}
          />
        );
      })}
    </div>
  );
};

export default Order;
