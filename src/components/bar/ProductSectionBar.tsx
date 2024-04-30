import React from 'react'
import TypoGraphy from '../common/HeadingTypo'
import Timmer from '../Timmer'
import { MoveLeft, MoveRight } from 'lucide-react'

type productSectionProps={
    heading:string
    option?:boolean
}

const ProductSectionBar = ({heading,option=true}:productSectionProps) => {
  return (
    <div className="mt-10">
      <p className="font-semibold text-red-500 text-xl">Today's</p>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center w-[40%]  justify-between">
          <TypoGraphy className="text-4xl">{heading}</TypoGraphy>
          {option && <Timmer />}
        </div>
       <div className="flex items-center gap-x-3">
          <MoveLeft
            size={35}
            className="border-2 bg-neutral-50 cursor-pointer rounded-full p-1"
          />
          <MoveRight
            size={35}
            className="border-2 bg-neutral-50 cursor-pointer rounded-full p-1"
          />
        </div>
      </div>
    </div>
  )
}

export default ProductSectionBar