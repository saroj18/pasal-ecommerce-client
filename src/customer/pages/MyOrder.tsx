import { useState } from "react";
import HeadingTypo from "../../components/common/HeadingTypo";
import ParaTypo from "../../components/common/ParaTypo";
import OrderCard from "../../components/OrderCard";
import Button from "../../components/common/Button";
import { useQuery } from "../../hooks/useQuery";
import Shimmer from "../../components/common/Shimmer";
import { OrderType } from "../../types/OrderType";

const MyOrder = () => {
  const [orderState, setOrderState] = useState("shipping");
  const { data, loading } = useQuery<OrderType[]>("/order/myorder", false);

  const clickHandler = (params: string) => {
    setOrderState(params);
  };

  if ((data as OrderType[])?.length < 1) {
    return (
      <ParaTypo className="text-center text-4xl font-semibold my-3">
        0 Orders Found
      </ParaTypo>
    );
  }

  return (
    <div className="mt-4">
      <HeadingTypo className="text-3xl">My Orders</HeadingTypo>
      <ParaTypo className="opacity-75">my all orders</ParaTypo>
      {data && (
        <div className="flex text-xs justify-around md:text-xl shadow-md mt-3 font-bold rounded-full bg-gray-100 gap-x-6 ">
          <Button
            onClick={() => clickHandler("shipping")}
            className={`w-full bg-white text-black p-3 rounded-full shadow-md hover:bg-red-500 hover:text-white ${
              orderState == "shipping" ? "bg-red-500 text-white" : ""
            }`}
          >
            On Shipping
          </Button>
          <Button
            onClick={() => clickHandler("arrived")}
            className={`w-full bg-white text-black p-3 rounded-full shadow-md hover:bg-red-500 hover:text-white ${
              orderState == "arrived" ? "bg-red-500 text-white" : ""
            }`}
          >
            Arrived
          </Button>
          <Button
            onClick={() => clickHandler("canceled")}
            className={`w-full bg-white text-black p-3 rounded-full shadow-md hover:bg-red-500 hover:text-white ${
              orderState == "canceled" ? "bg-red-500 text-white" : ""
            }`}
          >
            Canceled
          </Button>
        </div>
      )}
      {loading ? (
        <Shimmer shape="rectange" />
      ) : (
        orderState == "shipping" && (
          <div className="mt-7 flex flex-wrap justify-center gap-5">
            {(data as OrderType[])?.map((ele: OrderType, index: number) => {
              return (
                ele?._id == "pending" && (
                  <OrderCard
                    background="blue"
                    key={index}
                    info={ele.info}
                    date={`Estd. ${new Date(ele.createdAt).toDateString()}`}
                    element={ele?._id}
                  />
                )
              );
            })}
          </div>
        )
      )}
      {loading ? (
        <Shimmer shape="rectange" />
      ) : (
        orderState == "arrived" && (
          <div className="mt-7 flex flex-wrap justify-center gap-5">
            {(data as OrderType[])?.map((ele: OrderType, index: number) => {
              return (
                ele?._id == "complete" && (
                  <OrderCard
                    background="green"
                    key={index}
                    info={ele.info}
                    date={`Arrived on ${new Date(ele.updatedAt).toDateString()}`}
                    element={ele?._id}
                  />
                )
              );
            })}
          </div>
        )
      )}
      {loading ? (
        <Shimmer shape="rectange" />
      ) : (
        orderState == "canceled" && (
          <div className="mt-7 flex flex-wrap justify-center gap-5">
            {(data as OrderType[])?.map((ele: any, index: number) => {
              return (
                ele?._id == "cancled" && (
                  <OrderCard
                    background="red"
                    key={index}
                    date={`Cancled on ${new Date(ele.updatedAt).toDateString()}`}
                    info={ele.info}
                    element={ele?._id}
                  />
                )
              );
            })}
          </div>
        )
      )}
    </div>
  );
};

export default MyOrder;
