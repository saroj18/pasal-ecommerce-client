import React from 'react'
import FilterBar from '../components/FilterBar'
import AmountCard from '../components/AmountCard'

const Dashboard = () => {
  return (
    <div className='w-full px-7 py-5 font-poppins'>
        <FilterBar/>
        <div className='flex gap-x-4 mt-5'>
            <AmountCard className={'grow bg-green-50'} heading='Estimate Revenue' amount='$2345' percent='20%' actAmount='+2453'/>
            <AmountCard className={'grow bg-red-50'} heading='Estimate Revenue' amount='$2345' percent='20%' actAmount='+2453'/>
            <AmountCard className={'grow bg-gray-50'} heading='Estimate Revenue' amount='$2345' percent='20%' actAmount='+2453'/>
            <AmountCard className={'grow bg-orange-50'} heading='Estimate Revenue' amount='$2345' percent='20%' actAmount='+2453'/>
            <AmountCard className={'grow bg-blue-50'} heading='Estimate Revenue' amount='$2345' percent='20%' actAmount='+2453'/>
        </div>
    </div>
  )
}

export default Dashboard