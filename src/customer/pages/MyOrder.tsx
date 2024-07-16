import React, { useState } from "react";
import HeadingTypo from "../../components/common/HeadingTypo";
import ParaTypo from "../../components/common/ParaTypo";
import OrderCard from "../../components/OrderCard";
import Button from "../../components/common/Button";

const MyOrder = () => {
  const [orderState, setOrderState] = useState("shipping");

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
          {Array(10)
            .fill(null)
            .map((_, index) => {
              return (
                <OrderCard
                  background="blue"
                  key={index}
                  label="Est. arrival on 20 Jan 2024"
                />
              );
            })}
        </div>
      )}
      {orderState == "arrived" && (
        <div className="mt-7 flex flex-wrap justify-center gap-5">
          {Array(10)
            .fill(null)
            .map((_, index) => {
              return (
                <OrderCard
                  background="green"
                  key={index}
                  label="Arrived on 18 Jan 2024"
                />
              );
            })}
        </div>
      )}
      {orderState == "canceled" && (
        <div className="mt-7 flex flex-wrap justify-center gap-5">
          {Array(10)
            .fill(null)
            .map((_, index) => {
              return (
                <OrderCard
                  background="red"
                  key={index}
                  label="Canceled on 15 Jan 2024"
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default MyOrder;
