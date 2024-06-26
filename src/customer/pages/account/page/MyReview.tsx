import React, { useState } from 'react'
import HeadingTypo from '../../../../components/common/HeadingTypo'
import ParaTypo from '../../../../components/common/ParaTypo'
import Button from '../../../../components/common/Button'
import ReviewHistory from './ReviewHistory'
import Popup from 'reactjs-popup'
import ReviewForm from './ReviewForm'


 const ReviewComponent=()=>{
    const[open,setOpen]=useState<boolean>(false)
    const clickHandler=()=>{
        setOpen(true)
    }
    return(
        <>
        <div className=' rounded-md shadow-md border-2 border-neutral-200 p-2 my-4'>
            <HeadingTypo>Saroj's Store</HeadingTypo>
            <ParaTypo className='text-sm text-gray-400 my-2'>Purchase on 19 Jan 2023</ParaTypo>
            <div className='flex w-fit items-center gap-x-4 border-2 border-gray-200 rounded-md p-3'>
                <img className='w-[100px]' src="https://www.freepnglogos.com/uploads/lcd-png/lcd-png-transparent-lcd-images-pluspng-39.png" alt="" />
                <ParaTypo>LCD Monitor wiht 43" Display and High Qualit Contrast</ParaTypo>
                <Button onClick={clickHandler} className='bg-red-500 text-white px-4 py-2 rounded-md'>Review</Button>
            </div>
        </div>
        <Popup contentStyle={{width:'100%',maxWidth:'700px',padding:'0px'}} open={open} onClose={()=>setOpen(false)}>
            <ReviewForm setOpen={setOpen}/>
        </Popup>
        </>
    )
}

const MyReview = () => {

    const[reviewSwitch,setReviewSwitch]=useState<string>('review')

    const reviewHandler=()=>{
        setReviewSwitch('review')
    }

    const reviewHistoryHandler=()=>{
        setReviewSwitch('reviewhistory')
    }
  return (
    <div className='w-full p-2'>
        <HeadingTypo className='my-5 text-2xl'>My Reviews</HeadingTypo>
        <div className='flex gap-x-5 border-2 border-gray-100 rounded-md p-2 shadow-md'>
            <ParaTypo onClick={reviewHandler} className={`cursor-pointer ${reviewSwitch=='review' ? 'text-red-500':''}`}>To Review</ParaTypo>
            <ParaTypo onClick={reviewHistoryHandler} className={`cursor-pointer ${reviewSwitch=='reviewhistory' ? 'text-red-500':''}`}>History</ParaTypo>
        </div>

        {reviewSwitch=='review' && <div>
            <ReviewComponent/>
            <ReviewComponent/>
            <ReviewComponent/>
        </div>}
        {
            reviewSwitch=='reviewhistory' && <ReviewHistory/>
        }
    </div>
  )
}

export default MyReview