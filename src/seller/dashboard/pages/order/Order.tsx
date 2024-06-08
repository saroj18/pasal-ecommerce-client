import React from 'react'
import HeadingTypo from '../../../../components/common/HeadingTypo'
import ParaTypo from '../../../../components/common/ParaTypo'
import SearchBox from '../../../../components/common/Search'
import jacket from '../../../../assets/jacket.png'
import Button from '../../../../components/common/Button'

const Order = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div>
        <HeadingTypo className='text-2xl'>Order List</HeadingTypo>
      <ParaTypo className='text-[15px] opacity-75'>All ordered list</ParaTypo>
        </div>
        <SearchBox className='w-full max-w-[25%]'/>
      </div>

      <table className="w-full text-center mt-5 bg-white shadow-md">
        <thead>
          <tr className='sticky top-0 left-0 bg-white border-t-2'>
            <th className="p-4">Product</th>
            <th className="p-4">Product ID</th>
            <th className="p-4">Order By</th>
            <th className="p-4">Order Date</th>
            <th className="p-4">Order Time</th>
            <th className="p-4">Payment</th>
            <th className="p-4">Discount</th>
            <th className="p-4">Amount</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
         {
          Array(15).fill(null).map((_,index)=>{
            return  <tr key={index} className="border-b-2 border-t-2 ">
            <td className="p-2 flex flex-col items-center justify-center gap-x-2"> <img className="w-[60px] border-2 border-gray-300 shadow-md rounded-md p-1" src={jacket}/> Leather Jacket</td>
            <td className="p-2">985943879872934</td>
            <td className="p-2">John Doe</td>
            <td className="p-2">2024-01-22</td>
            <td className="p-2">02:44 PM</td>
            <td className="p-2">Khalti</td>
            <td className="p-2">30%</td>
            <td className="p-2">Rs 3000</td>
            <td className="p-2">
              <Button className='bg-green-500 px-3 py-2 text-white rounded-md'>Placed</Button>
              <Button className='bg-red-500 px-3 py-2 text-white ml-2 rounded-md'>Cancel</Button>
            </td>
          </tr>
          })
         }
        </tbody>
      </table>
    </div>
  )
}

export default Order