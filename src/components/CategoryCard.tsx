import React from 'react'

type categoryProps={
    category:string
    icon:React.ReactNode
}

const CategoryCard = ({category,icon}:categoryProps) => {
  return (
    <div className='border-2 border-gray-500 flex justify-center items-center flex-col h-[150px] w-[150px] rounded-md cursor-pointer'>
        {icon}
        <p className='text-xl'>{category}</p>
    </div>
  )
}

export default CategoryCard