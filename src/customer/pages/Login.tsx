import React from 'react'
import ParaTypo from '../../components/common/ParaTypo'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import HeadingTypo from '../../components/common/HeadingTypo'
import { useNavigate } from 'react-router-dom'
import ecommerseImage from '../../assets/ecommerseImage.webp'

const Login = () => {

  const navigate=useNavigate()
  return (
    <div className='flex justify-around mt-10'>
        <img className='w-[45%]' src={ecommerseImage} alt="" />
        <div className='flex flex-col w-[35%]'>
            <HeadingTypo className='text-2xl' >Log in to Exclusive</HeadingTypo>
            <ParaTypo className='mt-2'>Enter your details below</ParaTypo>
            <Input type='text' className='border-b-2 border-b-neutral-500 border-t-0 border-l-0 border-r-0 rounded-none my-4' placeholder='Email'/>
            <Input type='password' className='border-b-2 border-b-neutral-500 border-t-0 border-l-0 border-r-0 rounded-none my-4' placeholder='Password'/>
            <Button className='w-full bg-red-500 text-white py-3 rounded-md mt-5'>Create Account</Button>
            <Button className='w-full border-neutral-500 border-2 py-3 rounded-md mt-3'>Sign up with Google</Button>
            <div className='flex items-center gap-x-3 mt-4 justify-center'>
            <ParaTypo className='text-center'>Not account </ParaTypo> <span onClick={()=>navigate('/signup')} className='cursor-pointer underline'>Sign up</span>
            <ParaTypo className='underline text-blue-500 cursor-pointer'>forgot password</ParaTypo>
            </div>
        </div>
    </div>
  )
}

export default Login