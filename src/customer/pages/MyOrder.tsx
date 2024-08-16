import React, { useState } from "react";
import HeadingTypo from "../../components/common/HeadingTypo";
import ParaTypo from "../../components/common/ParaTypo";
import OrderCard from "../../components/OrderCard";
import Button from "../../components/common/Button";
import { useQuery } from "../../utils/useQuery";

const MyOrder = () => {
  const [orderState, setOrderState] = useState("shipping");
  const { data: completeOrder } = useQuery<any>("/order/placed");
  const { data: cancledOrder } = useQuery<any>("/order/cancled");
  const { data: pendingOrder } = useQuery<any>("/order/pending");
  console.log(pendingOrder);

  const clickHandler = (params: string) => {
    setOrderState(params);
  };

  return (
    <div className="mt-4">
      <HeadingTypo className="text-3xl">My Orders</HeadingTypo>
      <ParaTypo className="opacity-75">my all orders</ParaTypo>
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
      {orderState == "shipping" && (
        <div className="mt-7 flex flex-wrap justify-center gap-5">
          {pendingOrder?.map((ele: any, index: number) => {
            return (
              <OrderCard
                background="blue"
                key={index}
                info={ele}
                date={`Estd. ${new Date(ele.createdAt).toDateString()}`}
              />
            );
          })}
        </div>
      )}
      {orderState == "arrived" && (
        <div className="mt-7 flex flex-wrap justify-center gap-5">
          {completeOrder?.map((ele: any, index: number) => {
            return (
              <OrderCard
                background="green"
                key={index}
                info={ele}
                date={`Arrived on ${new Date(ele.updatedAt).toDateString()}`}
              />
            );
          })}
        </div>
      )}
      {orderState == "canceled" && (
        <div className="mt-7 flex flex-wrap justify-center gap-5">
          {cancledOrder?.map((ele: any, index: number) => {
            return (
              <OrderCard
                background="red"
                key={index}
                date={`Cancled on ${new Date(ele.updatedAt).toDateString()}`}
                info={ele}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyOrder;
