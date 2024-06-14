import React from 'react'
import ParaTypo from '../../../../../components/common/ParaTypo'
import HeadingTypo from '../../../../../components/common/HeadingTypo'



const PersonalProfile = () => {
  return (
    <div className=' border-2 border-gray-500 rounded-md shadow-sm p-4 h-full'>
        <div className='flex items-center gap-x-6 mb-4'>
        <HeadingTypo className='text-xl'>Personal Profile</HeadingTypo>
        <span className='text-blue-500 cursor-pointer'>Edit</span>
        </div>
        <div className='flex flex-col gap-y-1 text-gray-500'>
            <ParaTypo>Name:Saroj Aryal</ParaTypo>
            <ParaTypo>Phone:9845643325</ParaTypo>
            <ParaTypo>Gender:Male</ParaTypo>
            <ParaTypo>DOB:2004-02-04</ParaTypo>
        </div>
    </div>
  )
}

export default PersonalProfile