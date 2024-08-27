import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./customer/CustomerLayout";
import Home from "./customer/pages/Home";
import "./index.css";
import Login from "./customer/pages/Login";
import Signup from "./customer/pages/Signup";
import Wishlist from "./customer/pages/Wishlist";
import Error from "./customer/pages/Error";
import Cart from "./customer/pages/Cart";
import ProductDetails from "./customer/pages/ProductDetails";
import Account from "./customer/pages/account/Account";
import AccountLayout from "./customer/pages/account/AccountLayout";
import MyProfile from "./customer/pages/account/page/MyProfile";
import AddressBook from "./customer/pages/account/component/AddressBook";
import MyReview from "./customer/pages/account/page/MyReview";
import SellerSignUp from "./seller/pages/SellerSignUp";
import SellerLogin from "./seller/pages/SellerLogin";
import VerifyYourself from "./seller/pages/VerifyYourself";
import "./CSS/style.css";
import SellerLayout from "./seller/dashboard/SellerLayout";
import Dashboard from "./seller/dashboard/pages/dashboard/Dashboard";
import Product from "./seller/dashboard/pages/product/Product";
import Inventory from "./seller/dashboard/pages/inventory/Inventory";
import Order from "./seller/dashboard/pages/order/Order";
import Review from "./seller/dashboard/pages/review/Review";
import "reactjs-popup/dist/index.css";
import Analytics from "./seller/dashboard/pages/analytics/Analytics";
import Delevery from "./seller/dashboard/pages/delevery/Delevery";
import DeleveryPerson from "./seller/dashboard/pages/delevery-person/DeleveryPerson";
import Customer from "./seller/dashboard/pages/customer/Customer";
import EditProfile from "./customer/pages/account/page/EditProfile";
import AllProducts from "./customer/pages/AllProducts";
import MyOrder from "./customer/pages/MyOrder";
import Notification from "./seller/dashboard/pages/notification/Notification";
import OrderCheckout from "./customer/pages/OrderCheckout";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/pages/dashboard/AdminDashboard";
import Vendor from "./admin/pages/vendor/Vendor";
import VendorDetails from "./admin/pages/vendor/VendorDetails";
import VenderLayout from "./admin/pages/vendor/VenderLayout";
import VendorAnalytics from "./admin/pages/vendor/VendorAnalytics";
import DeliveryPage from "./admin/pages/delivery/DeliveryPage";
import VendorApprove from "./admin/pages/approve-vender/VendorApprove";
import AdminAnalytics from "./admin/pages/analytics/AdminAnalytics";
import ApproveVendorLayout from "./admin/pages/approve-vender/ApproveVendorLayout";
import VendorDetail from "./admin/pages/approve-vender/VendorDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminSignup from "./admin/pages/AdminSignup";
import AdminLogin from "./admin/pages/AdminLogin";
import VerifyForm from "./customer/pages/account/component/VerifyForm";
import EsewaSuccess from "./customer/pages/EsewaSuccess";
import User from "./admin/pages/user/User";
import UserInfo from "./admin/pages/user/UserInfo";
import VendorMoreDetails from "./admin/pages/vendor/VendorMoreDetails";
import OfferLayout from "./admin/pages/offers/OfferLayout";
import CreateOffer from "./admin/pages/offers/CreateOffer";
import Offers from "./admin/pages/offers/Offers";
import Message from "./customer/pages/account/page/Message";
import Chat from "./seller/dashboard/pages/message/Chat";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
        {
          path: "/myorder",
          element: <MyOrder />,
        },
        {
          path: "/allproducts",
          element: <AllProducts />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <OrderCheckout />,
        },
        {
          path: "/details/:id",
          element: <ProductDetails />,
        },
        {
          path: "/account",
          element: <AccountLayout />,
          children: [
            {
              path: "message",
              element: <Message />,
            },
            {
              path: "/account",
              element: <Account />,
            },
            {
              path: "myprofile",
              element: <MyProfile />,
            },
            {
              path: "editprofile",
              element: <EditProfile />,
            },
            {
              path: "addressbook",
              element: <AddressBook />,
            },
            {
              path: "myreview",
              element: <MyReview />,
            },
            {
              path: "verify",
              element: <VerifyForm />,
            },
          ],
        },
      ],
    },
    {
      path: "/sellersignup",
      element: <SellerSignUp />,
    },
    {
      path: "/sellerlogin",
      element: <SellerLogin />,
    },
    {
      path: "/otp",
      element: <VerifyYourself />,
    },
    {
      path: "/esewa-success",
      element: <EsewaSuccess />,
    },
    {
      path: "/dashboard",
      element: <SellerLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "inventory",
          element: <Inventory />,
        },
        {
          path: "order",
          element: <Order />,
        },
        {
          path: "review",
          element: <Review />,
        },
        {
          path: "analytics",
          element: <Analytics />,
        },
        {
          path: "delevery",
          element: <Delevery />,
        },
        {
          path: "message",
          element: <Chat />,
        },
        {
          path: "customer",
          element: <Customer />,
        },
        {
          path: "delevery-person",
          element: <DeleveryPerson />,
        },
        {
          path: "notification",
          element: <Notification />,
        },
      ],
    },
    {
      path: "/adminsignup",
      element: <AdminSignup />,
    },
    {
      path: "/adminlogin",
      element: <AdminLogin />,
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "dashboard",
          element: <AdminDashboard />,
        },
        {
          path: "vendor",
          element: <VenderLayout />,
          children: [
            {
              path: "",
              element: <Vendor />,
            },
            {
              path: "analytics",
              element: <VendorAnalytics />,
            },
            {
              path: ":id/more",
              element: <VendorMoreDetails />,
            },
            {
              path: ":id",
              element: <VendorDetails />,
            },
          ],
        },
        {
          path: "offers",
          element: <OfferLayout />,
          children: [
            {
              path: "",
              element: <Offers />,
            },
            {
              path: "createoffer",
              element: <CreateOffer />,
            },
          ],
        },
        {
          path: "delivery",
          element: <DeliveryPage />,
        },
        {
          path: "user",
          element: <User />,
        },
        {
          path: "user/:id",
          element: <UserInfo />,
        },
        {
          path: "notification",
          element: <Notification />,
        },
        {
          path: "approve",
          element: <ApproveVendorLayout />,
          children: [
            {
              path: "",
              element: <VendorApprove />,
            },
            {
              path: ":id",
              element: <VendorDetail />,
            },
          ],
        },
        {
          path: "analytics",
          element: <AdminAnalytics />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
      <ToastContainer
        position="bottom-right"
        closeOnClick={true}
        limit={1}
        autoClose={1000}
        hideProgressBar={true}
      />
    </>
  );
};

export default App;
