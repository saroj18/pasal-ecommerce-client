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