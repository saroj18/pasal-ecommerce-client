import React from 'react'
import HeadingTypo from '../../components/common/HeadingTypo'
import PersonalProfile from './component/box/PersonalProfile'
import AddressBox from './component/box/AddressBox'
import BillingAddress from './component/box/BillingAddress'
import RecentOrders from './component/RecentOrders'

const Account = () => {
  return (
    <div className='bg-gray-50 p-2'>
      <HeadingTypo className='my-4 text-2xl'>Manage My Account</HeadingTypo>
      <div className='grid grid-cols-3 items-center gap-x-3 shadow-md mb-6'>
        <PersonalProfile/>
        <AddressBox/>
        <BillingAddress/>
      </div>
      <RecentOrders/>
    </div>
  )
}

export default Account