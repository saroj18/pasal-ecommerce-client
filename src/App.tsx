import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './customer/CustomerLayout'
import Home from './customer/pages/Home'
import './index.css'
import Login from './customer/pages/Login'
import Signup from './customer/pages/Signup'
import Wishlist from './customer/pages/Wishlist'
import Error from './customer/pages/Error'
import Cart from './customer/pages/Cart'
import ProductDetails from './customer/pages/ProductDetails'
import Account from './customer/pages/account/Account'
import AccountLayout from './customer/pages/account/AccountLayout'
import MyProfile from './customer/pages/account/page/MyProfile'
import AddressBook from './customer/pages/account/component/AddressBook'
import MyReview from './customer/pages/account/page/MyReview'
import SellerSignUp from './seller/pages/SellerSignUp'
import SellerLogin from './seller/pages/SellerLogin'
import VerifyYourself from './seller/pages/VerifyYourself'
import './CSS/style.css'
import SellerLayout from './seller/dashboard/SellerLayout'
import Dashboard from './seller/dashboard/pages/dashboard/Dashboard'
import Product from './seller/dashboard/pages/product/Product'
import Inventory from './seller/dashboard/pages/inventory/Inventory'
import Order from './seller/dashboard/pages/order/Order'
import Review from './seller/dashboard/pages/review/Review'
import 'reactjs-popup/dist/index.css';
import Analytics from './seller/dashboard/pages/analytics/Analytics'
import Costumer from './seller/dashboard/pages/delevery/Delevery'
import Delevery from './seller/dashboard/pages/delevery/Delevery'
import DeleveryPerson from './seller/dashboard/pages/delevery-person/DeleveryPerson'
import Customer from './seller/dashboard/pages/customer/Customer'
import Notification from './seller/dashboard/pages/notification/Notification'
import EditProfile from './customer/pages/account/page/EditProfile'
import AllProducts from './customer/pages/AllProducts'
import MyOrder from './customer/pages/MyOrder'
import Notification from './seller/dashboard/pages/notification/Notification'
import OrderCheckout from './customer/pages/OrderCheckout'
import AdminLayout from './admin/AdminLayout'
import AdminDashboard from './admin/pages/AdminDashboard'


const App = () => {

  const route=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<Signup/>
      },
      {
        path:'/wishlist',
        element:<Wishlist/>
      },
      {
        path:'/myorder',
        element:<MyOrder/>
      },
      {
        path:'/allproducts',
        element:<AllProducts/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/checkout',
        element:<OrderCheckout/>
      },
      {
        path:'/details',
        element:<ProductDetails/>
      },
      {
        path:'/account',
        element:<AccountLayout/>,
        children:[
          {
            path:'/account',
            element:<Account/>
          },
          {
            path:'myprofile',
            element:<MyProfile/>
          },
          {
            path:'editprofile',
            element:<EditProfile/>
          },
          {
            path:'addressbook',
            element:<AddressBook/>
          },
          {
            path:'myreview',
            element:<MyReview/>
          },
        ]
      },
      
    ]
  },
  {
    path:'/sellersignup',
    element:<SellerSignUp/>
  },
  {
    path:'/sellerlogin',
    element:<SellerLogin/>
  },
  {
    path:'/otp',
    element:<VerifyYourself/>
  },
  {
    path:'/dashboard',
    element:<SellerLayout/>,
    children:[
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'product',
        element:<Product/>
      },
      {
        path:'inventory',
        element:<Inventory/>
      },
      {
        path:'order',
        element:<Order/>
      },
      {
        path:'review',
        element:<Review/>
      },
      {
        path:'analytics',
        element:<Analytics/>
      },
      {
        path:'delevery',
        element:<Delevery/>
      },
      {
        path:'customer',
        element:<Customer/>
      },
      {
        path:'delevery-person',
        element:<DeleveryPerson/>
      },
      {
        path:'notification',
        element:<Notification/>
      },
    ]
  },
  {
    path:'/admin',
    element:<AdminLayout/>,
    children:[
      {
        path:'dashboard',
        element:<AdminDashboard/>
      }
    ]
  }
  ])
  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App