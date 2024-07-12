import React from 'react'
import HeadingTypo from '../../../components/common/HeadingTypo'
import Select from '../../../components/common/Select'
import Option from '../../../components/common/Option'
import { ArrowLeftIcon } from 'lucide-react'
import SetChart from './SetChart'

const VendorAnalytics = () => {
  return (
    <div >
      <ArrowLeftIcon onClick={()=>history.back()} className='my-3 cursor-pointer'/>
      <div className='flex flex-col lg:flex-row items-center justify-between py-4 '>
        <HeadingTypo className='text-2xl font-semibold'>Analytics</HeadingTypo>
        <Select className='h-[50px] w-full sm:max-w-[45%] lg:max-w-[15%]'>
          <Option value='today'>Today</Option>
          <Option value='yesterdata'>Yesterday</Option>
          <Option value='pastsevendays'>Past 7 Day</Option>
          <Option value='pastonemonth'>Past 1 Month</Option>
          <Option value='pastsixmonth'>Past 6 Month</Option>
          <Option value='pastoneyear'>Past 1 Year</Option>
          <Option value='lifetime'>LifeTime</Option>
        </Select>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 items-center justify-between '>
        <SetChart heading='Total Order' chartType='bar'/>
        <SetChart  heading='Total Revenue' chartType='line'/>
        <SetChart heading='Total Orders' chartType='line'/>
        <SetChart heading='Top Sale' chartType='line'/>
        <SetChart heading='Top Sale' chartType='line'/>
      </div>
    </div>
  )
}

export default VendorAnalytics