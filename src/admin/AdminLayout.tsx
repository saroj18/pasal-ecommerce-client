import { Outlet, useNavigation } from "react-router-dom";
import SideBar from "../seller/dashboard/components/SideBar";
import { accountList } from "../seller/dashboard/constaints/sidebarList";
import { generalSideBarList } from "./constaint/sidebarList";
import { Menu } from "lucide-react";
import { useContextProvider } from "../context/Context";
import Loading from "@/components/Loading";

const AdminLayout = () => {
  const { setSidebar } = useContextProvider();
  const navigator = useNavigation();

  if (navigator.state == "loading") {
    return <Loading />;
  }
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
