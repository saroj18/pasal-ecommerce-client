import React from 'react'
import HeadingTypo from '../../../components/common/HeadingTypo'
import PersonalProfile from './component/box/PersonalProfile'
import AddressBox from './component/box/AddressBox'
import BillingAddress from './component/box/BillingAddress'
import RecentOrders from './component/RecentOrders'


const Account = () => {
  return (
    <div className=' p-2'>
      <div className='flex items-center justify-between'>
      <HeadingTypo className='my-4 text-xl sm:text-2xl'>Manage My Account</HeadingTypo>
      </div>
      <div className='flex w-full flex-wrap items-center justify-center gap-3 shadow-md mb-6'>
        <PersonalProfile/>
        <AddressBox/>
        <BillingAddress/>
      </div>
      <RecentOrders/>
    </div>
  )
}

export default Account