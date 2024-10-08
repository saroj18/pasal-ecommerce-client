import React, { useEffect, useState } from "react";
import HeadingTypo from "./common/HeadingTypo";
import ParaTypo from "./common/ParaTypo";
import Button from "./common/Button";
import Input from "./common/Input";
import Select from "./common/Select";
import Option from "./common/Option";
import { OrderType } from "../customer/pages/OrderCheckout";
import { toast } from "react-toastify";
import { useMutation } from "../hooks/useMutation";
import EsewaPay from "./EsewaPay";
import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../context/Context";

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
  const { mutate, data, loading, response } = useMutation<{
    [key: string]: string;
  }>();
  const [coupen, setCoupen] = useState('')
  const[discount,setDiscount]=useState(0)
  let totalPrice = 0;
  const navigate = useNavigate();
  const { setCart } = useContextProvider();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (e.target.value == "onlinepay") {
      setPayment(true);
    } else {
      setPayment(false);
      setOrderDetails((prv) => ({
        ...prv,
        payMethod: "cash",
      }));
    }
  };

  const coupenHandler = () => {
    if (!coupen) {
      toast.error("please enter coupen first")
      return
    }
    mutate('/coupen/checkcoupen','POST',{coupen})
  }

  const walletHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setWallet(e.target.value);
  };

  useEffect(() => {
    totalPrice = cartData?.reduce((acc: number, cur: any) => {
      acc += cur.product.priceAfterDiscount * cur.productCount;
      return acc;
    }, 0);
    setOrderDetails((prv) => ({
      ...prv,
      totalPrice: totalPrice,
    }));
  }, [cartData]);

  useEffect(() => {
    if (wallet) {
      setOrderDetails((prv) => ({
        ...prv,
        payMethod: payment ? wallet : "cash",
      }));
    }
  }, [wallet]);

  useEffect(() => {
    if (response && response.success && orderDetails.payMethod == "cash"&&!data?.coupenCode) {
      setCart(0);
      navigate("/myorder");
    }

    if (data && data.coupenDiscount) {
      if (!discount) {
        
        setOrderDetails(prv => ({ ...prv, totalPrice: prv.totalPrice - ((prv.totalPrice * Number(data.coupenDiscount)) / 100) }))
        setDiscount(orderDetails.totalPrice * Number(data.coupenDiscount) / 100)
        setCoupen('')
      }
    }
  }, [response]);

  const clickHandler = () => {
    if (!orderDetails.payMethod) {
      toast.error("please select payment method");
    }
    if (orderDetails.payMethod === "esewa") {
      mutate("/order/esewa", "POST", { orderDetails });
    }
    if (orderDetails.payMethod === "khalti") {
      mutate("/order/khalti", "POST", { orderDetails });
    }
    if (orderDetails.payMethod === "cash") {
      mutate("/order/cash", "POST", { orderDetails });
    }
  };

  const removeCoupenHandler = () => {
    setOrderDetails(prv => ({ ...prv, totalPrice: prv.totalPrice + discount }))
    setDiscount(0)
  }

  return (
    <div className="rounded-md  border-2 border-gray-200 shadow-md  p-4 ">
      <HeadingTypo className="text-2xl font-semibold">
        Order Summery
      </HeadingTypo>
      <div className="flex items-center justify-between my-3 pb-3 border-b-2">
        <ParaTypo>Total</ParaTypo>
        <ParaTypo>Rs {orderDetails.totalPrice+discount}</ParaTypo>
      </div>
      <div className="flex items-center justify-between my-2 pb-3 border-b-2">
        <ParaTypo>Delevery Charge</ParaTypo>
        <ParaTypo>+Rs 20</ParaTypo>
      </div>
      <div className="flex items-center justify-between my-2 pb-3 border-b-2">
        <ParaTypo>Discount</ParaTypo>
        <ParaTypo>-Rs { discount}</ParaTypo>
      </div>
      <div className="flex items-center justify-between my-2 pb-3 border-b-2">
        <ParaTypo className="font-semibold">Sub Total</ParaTypo>
        <ParaTypo className="font-semibold">
          Rs {Math.round(orderDetails.totalPrice + 20)}
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
      <div className="flex justify-between items-center">
        <HeadingTypo className="my-3 text-xl font-semibold">
        Apply Coupen Code
        </HeadingTypo>
        <ParaTypo onClick={removeCoupenHandler} className="text-blue-500 text-sm cursor-pointer">{ discount>0?'Remove Coupen':null}</ParaTypo>
      </div>
      <div className="flex items-center w-full">
        <Input
          onChange={(e)=>setCoupen(e.target.value)}
          className="w-full max-w-[75%] rounded-none h-[50px]"
          placeholder="enter your COUPEN CODE"
          type="text"
          value={coupen}
        />
        <Button onClick={coupenHandler} className="bg-green-500 grow  text-white px-3 h-[50px] py-2 ">
          Apply
        </Button>
      </div>
      <ParaTypo className="text-red-500 text-sm">{discount?`Applied Coupen with ${data?.coupenDiscount}% Discount`:null }</ParaTypo>
      <Button
        disabled={orderDetails.product.length==0}
        onClick={clickHandler}
        className="w-full bg-red-500 text-white rounded-md py-3 px-5 mt-4"
      >
        {loading ? "loading............." : "Proceed to Checkout"}
      </Button>
      {orderDetails.payMethod === "esewa" &&
        data &&
        data.product_code === "EPAYTEST" && <EsewaPay data={data} />}
      {data && data.method === "khalti"
        ? (window.location.href = data.payment_url)
        : null}
    </div>
  );
};

export default CheckoutBox;
