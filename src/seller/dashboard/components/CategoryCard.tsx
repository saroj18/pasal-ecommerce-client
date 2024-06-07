import React from 'react'
import HeadingTypo from '../../../components/common/HeadingTypo'
import Label from '../../../components/common/Label'
import Select from '../../../components/common/Select'
import Option from '../../../components/common/Option'

const CategoryCard = () => {
  return (
    <div className='border-2 border-gray-300 p-3 rounded-md grow'>
        <HeadingTypo className='text-2xl font-semibold'>Category</HeadingTypo>
        <div className='flex flex-col'>
        <Label className='text-[17px] opacity-75 my-2'>Product Category</Label>
        <Select className='h-[50px] text-xl'>
            <Option value='' defaultChecked>Select Category</Option>
            <Option value='fashion'>Fashion</Option>
            <Option value='electronic'>Electronic</Option>
            <Option value='grosery'>Grosery</Option>
            <Option value='Kitchen'>Kitchen</Option>
            <Option value='decoration'>Decoration</Option>
            <Option value='others'>Others</Option>
        </Select>
        </div>
    </div>
  )
}

export default CategoryCard