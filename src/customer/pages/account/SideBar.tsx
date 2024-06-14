import React from 'react'
import HeadingTypo from '../../../components/common/HeadingTypo'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <aside className=' flex flex-col gap-y-2 p-3 shadow-md w-full max-w-[220px] max-h-[500px] sticky top-0 left-0'>
        <Link to={'/account'}><HeadingTypo className='text-lg my-2 '>Manage My Account</HeadingTypo></Link>
        <ul className='text-lg pl-4 flex flex-col gap-y-2'>
            <Link to={'/account/myprofile'}><li className='cursor-pointer'>My Profile</li></Link>
            <Link to={'/account/addressbook'}><li className='cursor-pointer'>Address Book</li></Link>
        </ul>
        <Link to={'/account/myreview'}><HeadingTypo className='text-lg cursor-pointer my-1'>My Reviews</HeadingTypo></Link>
        <Link to={'/sellersignup'}><HeadingTypo className='text-lg cursor-pointer my-1'>Sell On Pasal</HeadingTypo></Link>
        <Link to={'/delevery-staff'}><HeadingTypo className='text-lg cursor-pointer my-1'>Delevery Staff</HeadingTypo></Link>
    </aside>
  )
}

export default SideBar