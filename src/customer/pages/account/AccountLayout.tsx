import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Provider from "../../context/Provider";
import Header from "./component/Header";

const AccountLayout = () => {
  return (
    <div className="flex gap-x-2 relative ">
      <Provider>
        <SideBar />
        <div className="w-full">
          <Header/>
        <Outlet />
        </div>
      </Provider>
    </div>
  );
};

export default AccountLayout;
