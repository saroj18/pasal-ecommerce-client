import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import './index.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Wishlist from './pages/Wishlist'
import Error from './pages/Error'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Account from './pages/account/Account'
import AccountLayout from './pages/account/AccountLayout'
import MyProfile from './pages/account/page/MyProfile'
import AddressBook from './pages/account/component/AddressBook'
import MyReview from './pages/account/page/MyReview'
import SellerSignUp from './seller/pages/SellerSignUp'
import SellerLogin from './seller/pages/SellerLogin'
import VerifyYourself from './seller/pages/VerifyYourself'
import './CSS/style.css'

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
        path:'/cart',
        element:<Cart/>
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
            path:'/account/myprofile',
            element:<MyProfile/>
          },
          {
            path:'/account/addressbook',
            element:<AddressBook/>
          },
          {
            path:'/account/myreview',
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
  ])
  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App