import React from 'react'
import HeadingTypo from '../../../components/common/HeadingTypo'

const RecentOrders = () => {
  return (
    <>
    <HeadingTypo className='text-2xl'>Recent Orders</HeadingTypo>
    <table className='w-full text-center my-6'>
        <thead>
            <tr className='border-t-2 border-b-2 border-black'>
                <th className='p-2'>Order</th>
                <th className='p-2'>Placed On</th>
                <th className='p-2'>Items</th>
                <th className='p-2'>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr className='border-t-2 border-b-2 border-black'>
                <td className='p-2'>3480483473493</td>
                <td className='p-2'>2024-02-05</td>
                <td className='flex p-2 justify-center'>
                    <img className='w-[100px]' src="https://www.freepnglogos.com/uploads/lcd-png/lcd-png-transparent-lcd-images-pluspng-39.png" alt="" />
                </td>
                <td className='p-2'>Rs 400</td>
            </tr>
            <tr className='border-t-2 border-b-2 border-black'>
                <td className='p-2'>3480483473493</td>
                <td className='p-2'>2024-02-05</td>
                <td className='flex p-2 justify-center'>
                    <img className='w-[100px]' src="https://www.freepnglogos.com/uploads/lcd-png/lcd-png-transparent-lcd-images-pluspng-39.png" alt="" />
                </td>
                <td className='p-2'>Rs 400</td>
            </tr>
            <tr className='border-t-2 border-b-2 border-black'>
                <td className='p-2'>3480483473493</td>
                <td className='p-2'>2024-02-05</td>
                <td className='flex p-2 justify-center'>
                    <img className='w-[100px]' src="https://www.freepnglogos.com/uploads/lcd-png/lcd-png-transparent-lcd-images-pluspng-39.png" alt="" />
                </td>
                <td className='p-2'>Rs 400</td>
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default RecentOrders