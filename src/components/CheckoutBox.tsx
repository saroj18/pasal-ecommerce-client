import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import HeadingTypo from "./common/HeadingTypo";
import ParaTypo from "./common/ParaTypo";
import Button from "./common/Button";
import Input from "./common/Input";
import Select from "./common/Select";
import Option from "./common/Option";
import { OrderType } from "../customer/pages/OrderCheckout";
import { toast } from "react-toastify";
import { useMutation } from "../utils/useMutation";
import EsewaPay from "./EsewaPay";

type CheckoutBoxProps = {
  cartData: any;
  setOrderDetails: React.Dispatch<React.SetStateAction<OrderType>>;
  orderDetails: OrderType;
};

const CheckoutBox = ({
  cartData,
  setOrderDetails,
  orderDetails,
}: CheckoutBoxProps) => {
  const [payment, setPayment] = useState<boolean>(false);
  const [wallet, setWallet] = useState("");
  const { mutate, data, loading } = useMutation<{ [key: string]: string }>();
  let totalPrice = 0;
  console.log(data);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == "onlinepay") {
      setPayment(true);
    } else {
      setPayment(false);
    }
  };

  const walletHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setWallet(e.target.value);
  };

  useEffect(() => {
    totalPrice = cartData?.reduce((acc: number, cur: any) => {
      console.log(cur);
      acc += cur.product.priceAfterDiscount * cur.productCount;
      return acc;
    }, 0);
    setOrderDetails((prv) => ({
      ...prv,
      totalPrice: totalPrice,
      payMethod: payment ? wallet : "cash",
    }));
  }, [cartData]);

  console.log(orderDetails);

  const clickHandler = () => {
    console.log(orderDetails);
    if (!orderDetails.payMethod) {
      toast.error("please select payment method");
    }
    mutate("/order/esewa", "POST", { orderDetails });
  };

  console.log(totalPrice);
  return (
    <div className="rounded-md  border-2 border-gray-200 shadow-md  p-4 ">
      <HeadingTypo className="text-2xl font-semibold">
        Order Summery
      </HeadingTypo>
      <div className="flex items-center justify-between my-3 pb-3 border-b-2">
        <ParaTypo>Total</ParaTypo>
        <ParaTypo>Rs {orderDetails.totalPrice}</ParaTypo>
      </div>
      <div className="flex items-center justify-between my-2 pb-3 border-b-2">
        <ParaTypo>Delevery Charge</ParaTypo>
        <ParaTypo>+Rs 20</ParaTypo>
      </div>
      <div className="flex items-center justify-between my-2 pb-3 border-b-2">
        <ParaTypo>Discount</ParaTypo>
        <ParaTypo>-Rs 0</ParaTypo>
      </div>
      <div className="flex items-center justify-between my-2 pb-3 border-b-2">
        <ParaTypo className="font-semibold">Sub Total</ParaTypo>
        <ParaTypo className="font-semibold">
          Rs {orderDetails.totalPrice + 20}
        </ParaTypo>
      </div>
      <div className="flex items-center gap-x-2">
        <Input
          onChange={changeHandler}
          name="payment"
          value={"onlinepay"}
          className="scale-150"
          type="radio"
        />
        <ParaTypo>Online Payment</ParaTypo>
      </div>
      {payment && (
        <Select onChange={walletHandler} className="w-full my-2">
          <Option defaultChecked value="">
            Select Option
          </Option>
          <Option value="khalti">Khalti</Option>
          <Option value="esewa">Esewa</Option>
          <Option value="imepay">IME Pay</Option>
        </Select>
      )}
      <div className="flex items-center gap-x-2">
        <Input
          defaultChecked
          onChange={changeHandler}
          name="payment"
          value={"cash"}
          className="scale-150"
          type="radio"
        />
        <ParaTypo>Cash On Delevery</ParaTypo>
      </div>
      <HeadingTypo className="my-3 text-xl font-semibold">
        Apply Coupen Code
      </HeadingTypo>
      <div className="flex items-center w-full">
        <Input
          className="w-full max-w-[75%] rounded-none h-[50px]"
          placeholder="enter your COUPEN CODE"
          type="text"
        />
        <Button className="bg-green-500 grow  text-white px-3 h-[50px] py-2 ">
          Apply
        </Button>
      </div>
      <Button
        onClick={clickHandler}
        className="w-full bg-red-500 text-white rounded-md py-3 px-5 mt-4"
      >
        {loading ? "loading............." : "Proceed to Checkout"}
      </Button>
      {data && <EsewaPay data={data} />}
    </div>
  );
};

export default CheckoutBox;
