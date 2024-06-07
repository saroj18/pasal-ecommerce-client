import React from 'react'
import ParaTypo from '../../../components/common/ParaTypo'
import Button from '../../../components/common/Button'

const MostSellingProductCard = () => {
  return (
    <div className='flex justify-between my-5'>
        <img className='w-[20%] rounded-md' src="https://images.unsplash.com/photo-1473188588951-666fce8e7c68?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <div>
            <ParaTypo>Leather Bag-U4523</ParaTypo>
            <ParaTypo className='text-gray-400 text-xs'>ID-79328479023184329</ParaTypo>
        </div>
        <Button className='border-2 rounded-md px-2 py-3'>123 Sales</Button>
    </div>
  )
}

export default MostSellingProductCard