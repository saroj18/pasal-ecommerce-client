import React from "react";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import { accountList, dashboardList } from "./constaints/sidebarList";
import { Menu } from "lucide-react";
import { useContextProvider } from "../../context/Context";

const SellerLayout = () => {
  const { setSidebar } = useContextProvider();
  return (
    <div className="flex max-h-fit">
      <SideBar accountList={accountList} dashboardList={dashboardList} />
      <div className="sm:px-7 px-3 py-3 w-full bg-gray-50">
        <Menu
          onClick={() => setSidebar(true)}
          className="cursor-pointer md:hidden"
        />
        <Outlet />
      </div>
    </div>
  );
};

export default SellerLayout;
