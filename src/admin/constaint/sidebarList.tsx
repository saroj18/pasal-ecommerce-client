import {
  BarChart4,
  HandCoins,
  Home,
  LayoutDashboard,
  Store,
  Truck,
  User,
  UserCircle2,
  View,
} from "lucide-react";

export const generalSideBarList = [
  {
    name: "Dashboard",
    url: "dashboard",
    icon: <LayoutDashboard />,
  },
  {
    name: "Vendor",
    url: "vendor",
    icon: <Store />,
  },
  {
    name: "Delivery",
    url: "delivery",
    icon: <Truck />,
  },
  {
    name: "Offers",
    url: "offers",
    icon: <HandCoins />,
  },
  // {
  //   name: "Revenue",
  //   url: "revenue",
  //   icon: <DollarSignIcon />,
  // },
  {
    name: "Analytics",
    url: "analytics",
    icon: <BarChart4 />,
  },
  {
    name: "Approve Vendor",
    url: "approve",
    icon: <View />,
  },
  {
    name: "User",
    url: "user",
    icon: <User />,
  },
  {
    name: "Add Admin",
    url: "addadmin",
    icon: <UserCircle2 />,
  },
  // {
  //   name: "Notification",
  //   url: "notification",
  //   icon: <Bell />,
  // },
  {
    name: "Home",
    url: "/",
    icon: <Home />,
  },
];
