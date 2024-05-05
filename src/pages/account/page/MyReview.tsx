import React from 'react'
import HeadingTypo from '../../../components/common/HeadingTypo'
import ParaTypo from '../../../components/common/ParaTypo'
import Button from '../../../components/common/Button'


const ReviewComponent=()=>{
    return(
        <div className=' rounded-md shadow-md border-2 border-neutral-200 p-2 my-4'>
            <HeadingTypo>Saroj's Store</HeadingTypo>
            <ParaTypo className='text-sm text-gray-400 my-2'>Purchase on 19 Jan 2023</ParaTypo>
            <div className='flex w-fit items-center gap-x-4 border-2 border-gray-200 rounded-md p-3'>
                <img className='w-[100px]' src="https://www.freepnglogos.com/uploads/lcd-png/lcd-png-transparent-lcd-images-pluspng-39.png" alt="" />
                <ParaTypo>LCD Monitor wiht 43" Display and High Qualit Contrast</ParaTypo>
                <Button className='bg-red-500 text-white px-4 py-2 rounded-md'>Review</Button>
            </div>
        </div>
    )
}

const MyReview = () => {
  return (
    <div className='w-full p-2'>
        <HeadingTypo className='my-5 text-2xl'>My Reviews</HeadingTypo>

        <div>
            <ReviewComponent/>
            <ReviewComponent/>
            <ReviewComponent/>
        </div>
    </div>
  )
}

export default MyReview