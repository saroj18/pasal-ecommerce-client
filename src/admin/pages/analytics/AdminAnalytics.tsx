import React from 'react'
import HeadingTypo from '../../../components/common/HeadingTypo'
import SetChart from '../vendor/SetChart'

const AdminAnalytics = () => {
  return (
    <div>
        <HeadingTypo className='text-3xl my-7 font-semibold'>Analytics</HeadingTypo>
        <div className='grid grid-cols-2 gap-3'>
            <SetChart heading='Vendor Register' chartType='line'/>
            <SetChart heading='Sales' chartType='line'/>
            <SetChart heading='Products Add' chartType='line'/>
            <SetChart heading='Orders' chartType='line'/>
            <SetChart heading='Revenue' chartType='line'/>
            <SetChart heading='Delivery-Person' chartType='line'/>
        </div>
    </div>
  )
}

export default AdminAnalytics