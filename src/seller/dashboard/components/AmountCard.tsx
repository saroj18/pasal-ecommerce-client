import React from 'react'
import HeadingTypo from '../../../components/common/HeadingTypo'
import ParaTypo from '../../../components/common/ParaTypo'
import { twMerge } from 'tailwind-merge'

type amountCardProps={
    heading:string
    amount:string
    percent:string
    actAmount:string
    className:string
}

const AmountCard = ({heading,amount,percent,actAmount,className}:amountCardProps) => {
  return (
    <div className={twMerge(' rounded-xl p-4 text-center shadow-md',className)}>
        <ParaTypo>{heading}</ParaTypo>
        <HeadingTypo className='text-3xl my-2'>{amount}</HeadingTypo>
        <div className='flex justify-between mt-6'>
            <ParaTypo className='text-green-500'>{percent}</ParaTypo>
            <ParaTypo>{`[${actAmount}]`}</ParaTypo>
        </div>
    </div>
  )
}

export default AmountCard