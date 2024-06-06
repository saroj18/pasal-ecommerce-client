import React from 'react'
import SideBar from './components/SideBar'
import { Outlet } from 'react-router-dom'

const SellerLayout = () => {
  return (
    <div className='flex h-[100vh]'>
    <SideBar/>
    <Outlet/>
    </div>
  )
}

export default SellerLayout