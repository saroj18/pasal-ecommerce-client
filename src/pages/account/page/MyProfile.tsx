import React from 'react'
import ParaTypo from '../../../components/common/ParaTypo'
import HeadingTypo from '../../../components/common/HeadingTypo'
import Button from '../../../components/common/Button'

type detailsProps={
    heading:string
    data:string
}

const DetailsBox=({heading,data}:detailsProps)=>{
    return(
        <div>
            <ParaTypo className='font-semibold'>{heading}</ParaTypo>
            <ParaTypo className='text-gray-500'>{data}</ParaTypo>
        </div>
    )
}

const MyProfile = () => {
  return (
    <div className='w-full p-4 bg-gray-50'>
        <HeadingTypo className='text-2xl my-3'>My Profile</HeadingTypo>
        <div className='grid grid-cols-3 gap-x-3  gap-y-8 mb-10'>
            <DetailsBox heading='Full Name' data='Saroj Aryal'/>
            <DetailsBox heading='Email Address' data='abc@gmail.com'/>
            <DetailsBox heading='Mobile' data='9876554356'/>
            <DetailsBox heading='BirthDay' data='2002-03-05'/>
            <DetailsBox heading='Gender' data='Male'/>
        </div>
        <Button className='bg-blue-500 text-white px-8 mx-2 py-3'>Edit Profile</Button>
        <Button className='bg-blue-500 text-white px-4 mx-2 py-3'>Change Password</Button>
    </div>
  )
}

export default MyProfile