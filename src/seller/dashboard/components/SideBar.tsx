import React from "react";
import logo from "../../../assets/logo.jpg";
import { AlignJustify } from "lucide-react";
import { accountList, dashboardList } from "../constaints/sidebarList";
import ParaTypo from "../../../components/common/ParaTypo";

const SideBar = () => {
  return (
    <aside className="w-full max-w-[240px] max-h-full overflow-y-scroll overflow-x-hidden border-2 border-gray-500  shadow-md font-poppins p-3">
      <div className="flex justify-between  items-center">
        <img className="h-[40px]" src={logo} alt="" />
        <AlignJustify />
      </div>
      <ParaTypo className="opacity-50 text-[15px] my-5">General</ParaTypo>
      {dashboardList.map((ele, index) => {
          return (
              <div key={index} className="flex items-center gap-x-3 cursor-pointer hover:bg-gray-50 p-3 rounded-md">
            <span>{ele.icon}</span>
            <ParaTypo className="text-[15px]">{ele.name}</ParaTypo>
          </div>
        );
    })}
    <ParaTypo className="opacity-50  my-5 text-[15px]">Account</ParaTypo>
      {accountList.map((ele, index) => {
          return (
              <div key={index} className="flex items-center gap-x-3 cursor-pointer hover:bg-gray-50 p-3 rounded-md">
            <span>{ele.icon}</span>
            <ParaTypo className="text-[15px]">{ele.name}</ParaTypo>
          </div>
        );
    })}
    </aside>
  );
};

export default SideBar;
