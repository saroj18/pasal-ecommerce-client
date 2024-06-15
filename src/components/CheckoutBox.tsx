import React, { useState } from "react";
import HeadingTypo from "./common/HeadingTypo";
import ParaTypo from "./common/ParaTypo";
import Button from "./common/Button";
import Input from "./common/Input";
import Select from "./common/Select";
import Option from "./common/Option";

const CheckoutBox = () => {
  const [payment, setPayment] = useState<boolean>(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == "onlinepay") {
      setPayment(true);
    } else {
      setPayment(false);
    }
  };
  return (
    <div className="rounded-md w-full max-w-[550px] border-2 border-gray-200 shadow-md h-fit p-4 sticky top-[15%] left-0">
      <HeadingTypo className="text-2xl font-semibold">
        Order Summery
      </HeadingTypo>
      <div className="flex items-center justify-between my-3 pb-3 border-b-2">
        <ParaTypo>SubTotal</ParaTypo>
        <ParaTypo>$500</ParaTypo>
      </div>
      <div className="flex items-center justify-between my-2 pb-3 border-b-2">
        <ParaTypo>Delevery Charge</ParaTypo>
        <ParaTypo>+$30</ParaTypo>
      </div>
      <div className="flex items-center justify-between my-2 pb-3 border-b-2">
        <ParaTypo>Discount</ParaTypo>
        <ParaTypo>-$10</ParaTypo>
      </div>
      <div className="flex items-center justify-between my-2 pb-3 border-b-2">
        <ParaTypo className="font-semibold">Total</ParaTypo>
        <ParaTypo className="font-semibold">$3948</ParaTypo>
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
        <Select className="w-full my-2">
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
        onChange={changeHandler}
          name="payment"
          value={"cash"}
          className="scale-150"
          type="radio"
        />
        <ParaTypo>Cash On Delevery</ParaTypo>
      </div>
      <HeadingTypo className="my-3 text-xl font-semibold">Apply Coupen Code</HeadingTypo>
      <div className="flex items-center w-full">
        <Input className="w-full max-w-[75%] rounded-none h-[50px]" placeholder="enter your COUPEN CODE" type="text"/>
        <Button className="bg-green-500 grow  text-white px-3 h-[50px] py-2 ">Apply</Button>
      </div>
      <Button className="w-full bg-red-500 text-white rounded-md py-3 px-5 mt-4">
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default CheckoutBox;
