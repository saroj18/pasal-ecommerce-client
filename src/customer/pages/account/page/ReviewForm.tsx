import React from 'react'
import HeadingTypo from '../../../../components/common/HeadingTypo'
import ParaTypo from '../../../../components/common/ParaTypo'
import { Star, X } from 'lucide-react'
import TextArea from '../../../../components/common/TextArea'
import Button from '../../../../components/common/Button'
import jacket from '../../../../assets/jacket.png'

type reviewFormProps={
  setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const ReviewForm = ({setOpen}:reviewFormProps) => {
  return (
    <div className='relative'>
      <HeadingTypo className='text-center bg-orange-500 text-xl py-3 text-white'>Give Your Review</HeadingTypo>
      <X onClick={()=>setOpen(false) } color='white' className='absolute cursor-pointer left-[96%] top-2'/>
      <ParaTypo className='text-center my-3'>Click star to rate the product</ParaTypo>
      <div className='flex items-center w-fit mx-auto gap-x-5 my-6'>
        <Star size={40} strokeWidth={1} className='cursor-pointer'/>
        <Star size={40} strokeWidth={1} className='cursor-pointer'/>
        <Star size={40} strokeWidth={1} className='cursor-pointer'/>
        <Star size={40} strokeWidth={1} className='cursor-pointer'/>
        <Star size={40} strokeWidth={1} className='cursor-pointer'/>
      </div>
      <ParaTypo className='text-center'>Share your review about this product</ParaTypo>
      <TextArea className=' w-full max-w-[95%] mx-auto block h-[150px] p-2 my-4'></TextArea>
      <div className='w-full max-w-[30%] mx-auto items-center flex flex-col border-2 border-gray-500 rounded-md p-2'>
        <img className='w-[20%]' src={jacket} alt="" />
        <ParaTypo>Premium Jacket</ParaTypo>
      </div>
      <Button className=' w-full max-w-[30%] block mx-auto rounded-md bg-black py-3 px-2 my-3 text-white text-xl'>Submit Review</Button>
    </div>
  )
}

export default ReviewForm