import React from 'react'
import ParaTypo from '../../../../../components/common/ParaTypo'
import HeadingTypo from '../../../../../components/common/HeadingTypo'

const BillingAddress = () => {
  return (
    <div className=' border-2 border-gray-500 rounded-md shadow-sm p-4'>
    <div className='flex items-center gap-x-6 mb-4'>
    <HeadingTypo className='text-xl'>Billing Address</HeadingTypo>
    <span className='text-blue-500 cursor-pointer'>Edit</span>
    </div>
    <ParaTypo className='font-semibold mb-2'>Default Billing Address</ParaTypo>
    <div className='flex flex-col gap-y-1 text-gray-500'>
        <ParaTypo>Ratnanagar-14</ParaTypo>
        <ParaTypo>Bagmati Province - Ratnanagar - Tadi Bazar</ParaTypo>
        <ParaTypo>9827284143</ParaTypo>
    </div>
</div>
  )
}

export default BillingAddress