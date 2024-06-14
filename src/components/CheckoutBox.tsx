import React from 'react'
import HeadingTypo from './common/HeadingTypo'
import ParaTypo from './common/ParaTypo'
import Button from './common/Button'

const CheckoutBox = () => {
  return (
    <div className='rounded-md w-[40%] p-4'>
        <HeadingTypo className='text-2xl'>Cart Total</HeadingTypo>
        <div className='flex items-center justify-between my-2 pb-3 border-b-2'>
            <ParaTypo>SubTotal</ParaTypo>
            <ParaTypo>$500</ParaTypo>
        </div>
        <div className='flex items-center justify-between my-2 pb-3 border-b-2'>
            <ParaTypo>Shipping</ParaTypo>
            <ParaTypo>Free</ParaTypo>
        </div>
        <div className='flex items-center justify-between my-2 pb-3 border-b-2'>
            <ParaTypo>Total</ParaTypo>
            <ParaTypo>$3948</ParaTypo>
        </div>
        <Button className='w-full bg-red-500 text-white py-2 px-5 mt-4'>Proceed to Checkout</Button>
    </div>
  )
}

export default CheckoutBox