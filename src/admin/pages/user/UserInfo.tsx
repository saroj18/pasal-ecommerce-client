import { useState } from "react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import { userInfoData } from "./constant";
import Info from "./Info";
import Order from "./Order";
import Payment from "./Payment";

const UserInfo = () => {
  const [control, setControl] = useState("info");

  return (
    <div>
      <HeadingTypo className="my-3 text-2xl font-semibold">
        User Info
      </HeadingTypo>
      <div>
        <ul className="flex items-center gap-x-4 my-5 text-xl bg-red-500 rounded-md">
          {userInfoData.map((ele, index) => {
            return (
              <li
                onClick={() =>
                  setControl(ele.split(" ")[0].toLocaleLowerCase())
                }
                className={`cursor-pointer p-3 rounded-md ${control == ele.split(" ")[0].toLocaleLowerCase() ? "text-white" : ""} `}
                key={index}
              >
                {ele}
              </li>
            );
          })}
        </ul>
        {control == "info" && <Info />}
        {control == "order" && <Order />}
        {control == "payment" && <Payment />}
      </div>
    </div>
  );
};

export default UserInfo;
