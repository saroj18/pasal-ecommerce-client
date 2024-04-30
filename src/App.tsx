import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import './index.css'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {

  const route=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    errorElement:<ErrorPage/>,
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