import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../seller/dashboard/components/SideBar";
import { accountList } from "../seller/dashboard/constaints/sidebarList";
import { generalSideBarList } from "./constaint/sidebarList";
import { Menu } from "lucide-react";
import { useContextProvider } from "../context/Context";

const AdminLayout = () => {
  const { setSidebar } = useContextProvider();
  return (
    <div className="flex">
      <SideBar accountList={accountList} dashboardList={generalSideBarList} />
      <div className="w-full px-5 bg-gray-50">
        <Menu
          onClick={() => setSidebar(true)}
          className="cursor-pointer md:hidden"
        />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
