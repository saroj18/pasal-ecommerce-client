import React from "react";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

const SellerLayout = () => {
  return (
    <div className="flex max-h-fit">
      <SideBar />
      <div className="px-7 py-3 w-full bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default SellerLayout;
