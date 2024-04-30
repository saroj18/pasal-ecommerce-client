import React from 'react'
import TypoGraphy from '../components/common/HeadingTypo'
import ParaTypo from '../components/common/ParaTypo'
import Input from '../components/common/Input'
import Button from '../components/common/Button'

const Signup = () => {
  return (
    <div className='flex justify-around mt-10'>
        <img className='w-[45%]' src="https://www.pngitem.com/pimgs/m/161-1619213_e-commerce-graphic-mobile-e-commerce-transparent-png.png" alt="" />
        <div className='flex flex-col w-[35%]'>
            <TypoGraphy className='text-2xl' >Create an Account</TypoGraphy>
            <ParaTypo className='mt-2'>Enter your details below</ParaTypo>
            <Input type='text' className='border-b-2 border-b-neutral-500 border-t-0 border-l-0 border-r-0 rounded-none my-4' placeholder='Name'/>
            <Input type='text' className='border-b-2 border-b-neutral-500 border-t-0 border-l-0 border-r-0 rounded-none my-4' placeholder='Email'/>
            <Input type='password' className='border-b-2 border-b-neutral-500 border-t-0 border-l-0 border-r-0 rounded-none my-4' placeholder='Password'/>
            <Button className='w-full bg-red-500 text-white py-3 rounded-md mt-5'>Create Account</Button>
            <Button className='w-full border-neutral-500 border-2 py-3 rounded-md mt-3'>Sign up with Google</Button>
            <div className='flex items-center gap-3 mt-4 justify-center'>
            <ParaTypo className='text-center'>Already have Account </ParaTypo> <span className='cursor-pointer underline'>Log In</span>
            </div>
        </div>
    </div>
  )
}

export default Signup