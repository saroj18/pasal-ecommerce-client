import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const AccountLayout = () => {
  return (
    <div className='flex gap-x-2'>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default AccountLayout