import React, { useState } from "react";
import logo from "../../../assets/logo.jpg";
import { AlignJustify } from "lucide-react";
import { accountList, dashboardList, listProps } from "../constaints/sidebarList";
import ParaTypo from "../../../components/common/ParaTypo";
import { Link } from "react-router-dom";



type SideBarProps={
  accountList:listProps[]
  dashboardList:listProps[]
}

const SideBar = ({accountList,dashboardList}:SideBarProps) => {
  const [sideBar, setSideBar] = useState<boolean>(true);
  return (
    <aside
      style={sideBar ? { maxWidth: "250px" } : { maxWidth: "80px" }}
      className="w-full h-[100vh] max-h-[100%] border-b-0 transition-all sticky top-0 left-0  overflow-y-scroll overflow-x-hidden border-2 border-gray-500  shadow-md font-poppins p-3"
    >
      <div className="flex justify-between  items-center">
        {sideBar && <img className="h-[40px]" src={logo} alt="" />}
        <AlignJustify
          className="cursor-pointer"
          onClick={() => setSideBar(!sideBar)}
        />
      </div>
      <ParaTypo
        className={`${sideBar ? "opacity-50" : "opacity-0"}  my-5 text-[15px]`}
      >
        General
      </ParaTypo>
      {dashboardList.map((ele, index) => {
        return (
          <Link
          to={ele.url}
          title={ele.name}
            key={index}
            className="flex items-center gap-x-3 cursor-pointer hover:bg-gray-50 p-3 rounded-md"
          >
            <span>{ele.icon}</span>
            <ParaTypo className="text-[15px]">{ele.name}</ParaTypo>
          </Link>
        );
      })}
      <ParaTypo
        className={`${sideBar ? "opacity-50" : "opacity-0"}  my-5 text-[15px]`}
      >
        Account
      </ParaTypo>
      {accountList.map((ele, index) => {
        return (
          <div
          title={ele.name}
            key={index}
            className="flex items-center gap-x-3 cursor-pointer hover:bg-gray-50 p-3 rounded-md"
          >
            <span>{ele.icon}</span>
            <ParaTypo className="text-[15px]">{ele.name}</ParaTypo>
          </div>
        );
      })}
    </aside>
  );
};

export default SideBar;
