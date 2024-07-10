import React from 'react'
import { categoryList } from '../../constants/categoryList'

const CategorySideBar = () => {
  return (
    <aside className='p-2 border-2 border-gray-200 md:border-r-2 shadow-md w-full lg:max-w-[20%]  '>
       <ul className='grid grid-cols-4 gap-4 text-xs sm:text-xl lg:flex flex-col opacity-70'>
       {
            categoryList.map((item,index)=>{
                return <li className='cursor-pointer' key={index}>{item.name}</li>
            })
        }
       </ul>
    </aside>
  )
}

export default CategorySideBar