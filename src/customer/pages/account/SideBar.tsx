import React, { useEffect } from 'react'
import HeadingTypo from '../../../components/common/HeadingTypo'
import { Link } from 'react-router-dom'
import { useCustomer } from '../../context/Provider'
import { X } from 'lucide-react'

const SideBar = () => {
  const {open,setOpen}=useCustomer()
  
  return (
    <aside onClick={()=>setOpen(false)} style={{top : open ? '0%' : '-70%'}} className=' md:flex flex-col transition-all duration-400 p-3 shadow-lg w-full md:max-w-[220px] max-h-[500px] md:sticky -top-[18%] md:left-0 left- bg-white absolute'>
      <X onClick={()=>setOpen(false)} className='absolute left-[90%] cursor-pointer top-2 md:hidden'/>
        <Link to={'/account'}><HeadingTypo className='text-lg my-2 '>Manage My Account</HeadingTypo></Link>
        <ul className='text-lg pl-4 flex flex-col gap-y-3'>
            <Link to={'/account/myprofile'}><li className='cursor-pointer'>My Profile</li></Link>
            <Link to={'/account/addressbook'}><li className='cursor-pointer'>Address Book</li></Link>
        </ul>
        <Link to={'/account/myreview'}><HeadingTypo className='text-lg cursor-pointer my-2'>My Reviews</HeadingTypo></Link>
        <Link to={'/sellersignup'}><HeadingTypo className='text-lg cursor-pointer my-2'>Sell On Pasal</HeadingTypo></Link>
        <Link to={'/delevery-staff'}><HeadingTypo className='text-lg cursor-pointer my-2'>Delevery Staff</HeadingTypo></Link>
    </aside>
  )
}

export default SideBar