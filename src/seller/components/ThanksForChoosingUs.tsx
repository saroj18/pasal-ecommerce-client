import React from 'react'
import HeadingTypo from '../../components/common/HeadingTypo'
import ParaTypo from '../../components/common/ParaTypo'
import logo from '../../assets/logo.jpg'
import Button from '../../components/common/Button'
import { useNavigate } from 'react-router-dom'

const ThanksForChoosingUs = () => {
    const navigate=useNavigate()
  return (
    <div className='w-full max-w-[50%] border-2 border-gray-500 rounded-md mx-auto flex flex-col gap-y-5 justify-center items-center py-5 shadow-md my-10'>
        <img src={logo} alt="" />
        <HeadingTypo className='text-5xl font-bold text-green-500'>Thanks For Choosing Us</HeadingTypo>
        <ParaTypo className='text-3xl text-gray-500 text-center'>We will mail on your email afterour team review your details.Thank You.</ParaTypo>
        <ParaTypo className='text-center'>Expected Time: 24-48 Hrs</ParaTypo>
        <Button className='px-4 py-2 bg-red-500 text-white text-xl rounded-md' onClick={()=>navigate('/')}>Go to Home Page</Button>
    </div>
  )
}

export default ThanksForChoosingUs