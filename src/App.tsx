import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import './index.css'

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