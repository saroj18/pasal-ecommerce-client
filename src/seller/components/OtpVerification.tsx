import React from 'react'
import HeadingTypo from '../../components/common/HeadingTypo'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'

const OtpVerification = () => {
  return (
    <div className='flex flex-col gap-y-3'>
        <HeadingTypo className='text-center text-2xl'>Please Check Your Email</HeadingTypo>
        <Input className='w-full' placeholder='Enter your Otp' type='text'/>
        <Button className='w-full bg-red-500 text-white py-2 rounded-md text-xl'>Submit</Button>
    </div>
  )
}

export default OtpVerification