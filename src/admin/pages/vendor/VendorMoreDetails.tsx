import { ArrowLeftIcon } from "lucide-react";
import { vendorMoreDetailsNav } from "./tableData";
import { useState } from "react";
import OrderHistory from "./view-more/OrderHistory";
import Reviews from "./view-more/Reviews";
import PaymentHistory from "./view-more/PaymentHistory";
import Products from "./view-more/Products";

const VendorMoreDetails = () => {
  const [nav, setNav] = useState("Orders");

  return (
    <div>
      <ArrowLeftIcon
        onClick={() => history.back()}
        className="my-3 cursor-pointer"
      />

      <nav className="bg-green-500 text-white rounded-md px-3">
        <ul className="flex gap-x-5 items-center text-lg">
          {vendorMoreDetailsNav.map((ele, index) => {
            return (
              <li
                onClick={() => setNav(ele)}
                className={`p-3 cursor-pointer rounded-md ${ele == nav ? "bg-blue-500" : ""}`}
                key={index}
              >
                {ele}
              </li>
            );
          })}
        </ul>
      </nav>
      {nav === "Orders" && <OrderHistory />}
      {nav === "Reviews" && <Reviews />}
      {nav === "Payment" && <PaymentHistory />}
      {nav === "Products" && <Products />}
    </div>
  );
};

export default VendorMoreDetails;
