import React from 'react'
import SideBar from './components/SideBar'
import { Outlet } from 'react-router-dom'

const SellerLayout = () => {
  return (
    <div className='flex h-[100vh]'>
    <SideBar/>
    <div className='px-7 py-5 w-full bg-gray-50'>
    <Outlet/>
    </div>
    </div>
  )
}

export default SellerLayout