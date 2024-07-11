import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";

const AccountLayout = () => {
  return (
    <div className="flex gap-x-2 relative ">
        <SideBar />
        <div className="w-full">
          <Header/>
        <Outlet />
        </div>
    </div>
  );
};

export default AccountLayout;
