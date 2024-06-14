import React from 'react'
import HeadingTypo from '../../../../components/common/HeadingTypo'
import ParaTypo from '../../../../components/common/ParaTypo'
import Button from '../../../../components/common/Button'
import { Star, StarIcon, StarOff, ThumbsDown, ThumbsUp } from 'lucide-react'

const ReviewComponent=()=>{
    return(
        <div className=' rounded-md shadow-md border-2 border-neutral-200 p-2 my-4'>
            <HeadingTypo>Saroj's Store</HeadingTypo>
            <ParaTypo className='text-sm text-gray-400 my-2'>Purchase on 19 Jan 2023</ParaTypo>
            <div className='flex my-4 items-center gap-x-4 border-2 border-gray-200 rounded-md p-3'>
                <img className='w-[100px]' src="https://www.freepnglogos.com/uploads/lcd-png/lcd-png-transparent-lcd-images-pluspng-39.png" alt="" />
                <ParaTypo>LCD Monitor wiht 43" Display and High Qualit Contrast</ParaTypo>
            </div>
            <div className='flex justify-between items-center'>
            <section className="flex items-center">
              <Star size={17} color="orange" fill="orange" />
              <Star size={17} color="orange" fill="orange" />
              <Star size={17} color="black"  />
              <Star size={17} color="black"  />
              <Star size={17} color="black"  />
            </section>
            <div className='flex gap-x-4 items-center'>
                <ThumbsUp className='cursor-pointer'/>
                <ThumbsDown className='cursor-pointer'/>
                <Button className='border-2 border-gray-500 rounded-md py-1 px-2'>Edit</Button>
            </div>
            </div>
            <ParaTypo>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, impedit.</ParaTypo>
        </div>
    )
}

const ReviewHistory = () => {
  return (
    <div>
<ReviewComponent/>
<ReviewComponent/>
    </div>
  )
}

export default ReviewHistory