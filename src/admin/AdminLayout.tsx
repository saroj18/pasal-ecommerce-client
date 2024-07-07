import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../seller/dashboard/components/SideBar'
import { accountList } from '../seller/dashboard/constaints/sidebarList'
import { generalSideBarList } from './constaint/sidebarList'

const AdminLayout = () => {
  return (
    <div className='flex'>
        <SideBar accountList={accountList} dashboardList={generalSideBarList}/>
        <div className='w-full px-5 bg-gray-50'>
        <Outlet/>
        </div>
    </div>
  )
}

export default AdminLayout