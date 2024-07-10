import React from "react";
import ParaTypo from "../../components/common/ParaTypo";
import Input from "../../components/common/Input";
import CheckoutBox from "../../components/CheckoutBox";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="grid overflow-auto">
    <table className="w-full text-center">
      <thead>
        <tr>
          <th className="p-8">Product</th>
          <th className="p-8">Price</th>
          <th className="p-8">Quantity</th>
          <th className="p-8">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr className=" my-8 border-b-2 border-t-2 ">
          <td className="p-4">
            <img
              className="w-[50px] mx-auto "
              src="https://purepng.com/public/uploads/large/purepng.com-monitorelectronicslcd-led-computer-monitor-display-screen-941524675594s5c5c.png"
              alt=""
            />
            <ParaTypo>LCD Monitor</ParaTypo>
          </td>
          <td className="p-4">$500</td>
          <td className="p-4">
            <Input type="number" className="w-[60px]" />
          </td>
          <td className="p-4">$500</td>
        </tr>
        <tr className=" my-8 border-b-2 border-t-2 ">
          <td className="p-4">
            <img
              className="w-[50px] mx-auto "
              src="https://purepng.com/public/uploads/large/purepng.com-monitorelectronicslcd-led-computer-monitor-display-screen-941524675594s5c5c.png"
              alt=""
            />
            <ParaTypo>LCD Monitor</ParaTypo>
          </td>
          <td className="p-4">$500</td>
          <td className="p-4">
            <Input type="number" className="w-[60px]" />
          </td>
          <td className="p-4">$500</td>
        </tr>
        <tr className=" my-8 border-b-2 border-t-2 ">
          <td className="p-4">
            <img
              className="w-[50px] mx-auto "
              src="https://purepng.com/public/uploads/large/purepng.com-monitorelectronicslcd-led-computer-monitor-display-screen-941524675594s5c5c.png"
              alt=""
            />
            <ParaTypo>LCD Monitor</ParaTypo>
          </td>
          <td className="p-4">$500</td>
          <td className="p-4">
            <Input type="number" className="w-[60px]" />
          </td>
          <td className="p-4">$500</td>
        </tr>
        
      </tbody>
    </table>
    <Link className="sm:place-self-end place-self-start" to={'/checkout'}><Button className="bg-blue-500 text-white rounded-md px-3 py-2 mt-4  ">Go to Checkout</Button></Link>

    <div className="w-fit mx-auto">
    <Button className="bg-red-500 text-white py-2 px-4 rounded-md mt-6 ">Back to Shopping</Button>
    </div>
    </div>
  );
};

export default Cart;
