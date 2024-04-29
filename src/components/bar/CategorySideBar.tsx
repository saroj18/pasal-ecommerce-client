import React from 'react'
import { categoryList } from '../../constants/categoryList'

const CategorySideBar = () => {
  return (
    <aside className='p-2 border-r-2 border-gray-400 w-[20%]'>
       <ul className='flex flex-col gap-y-4'>
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