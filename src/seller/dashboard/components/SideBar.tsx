import React, { useState } from "react";
import logo from "../../../assets/logo.jpg";
import { AlignJustify, X } from "lucide-react";
import {
  accountList,
  dashboardList,
  listProps,
} from "../constaints/sidebarList";
import ParaTypo from "../../../components/common/ParaTypo";
import { Link } from "react-router-dom";
import { useContextProvider } from "../../../context/Context";

type SideBarProps = {
  accountList: listProps[];
  dashboardList: listProps[];
};

const SideBar = ({ accountList, dashboardList }: SideBarProps) => {
  const [sideBar, setSideBars] = useState<boolean>(true);
  const { setSidebar, sidebar } = useContextProvider();
  return (
    <aside
      onClick={() => setSidebar(false)}
      className={`grow  ${sideBar ? "min-w-[250px]" : " min-w-[80px]"} md:w-[80px] h-[100vh] absolute max-h-[100%] border-b-0 bg-white z-10  md:sticky top-0  ${sidebar ? "left-0" : "-left-[100%]"} transition-all  overflow-y-scroll overflow-x-hidden border-2 border-gray-500  shadow-md font-poppins p-3`}
    >
      <X
        onClick={() => setSidebar(false)}
        className="cursor-pointer absolute left-[88%] top-4 md:hidden"
      />
      <div className="flex justify-between  items-center">
        {sideBar && <img className="h-[40px]" src={logo} alt="" />}
        <AlignJustify
          className="cursor-pointer hidden md:block"
          onClick={() => setSideBars(!sideBar)}
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
            <ParaTypo className={`text-[15px] ${!sideBar ? "md:hidden" : ""}`}>
              {ele.name}
            </ParaTypo>
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
