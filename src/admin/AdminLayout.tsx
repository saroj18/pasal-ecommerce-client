import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../seller/dashboard/components/SideBar'
import { accountList } from '../seller/dashboard/constaints/sidebarList'
import { generalSideBarList } from './constaint/sidebarList'

const AdminLayout = () => {
  return (
    <div className='flex'>
        <SideBar accountList={accountList} dashboardList={generalSideBarList}/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout