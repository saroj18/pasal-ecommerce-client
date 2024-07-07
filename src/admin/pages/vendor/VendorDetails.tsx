import React, { useContext, useEffect } from 'react'
import HeadingTypo from '../../../components/common/HeadingTypo'
import Label from '../../../components/common/Label'
import MostSellingProductCard from '../../../seller/dashboard/components/MostSellingProductCard'
import Button from '../../../components/common/Button'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from 'lucide-react'

const shopDetails=[
    {
        label:'Shop Name',
        value:'John Doe Shop'
    },
    {
        label:'Owner',
        value:'John Doe'
    },
    {
        label:'Address',
        value:'Kalanki,Kathmandu'
    },
    {
        label:'Joined On',
        value:'2003-02-03'
    },
    {
        label:'Total Sales',
        value:'543'
    },
    {
        label:'Total TurnOver',
        value:'Rs 543300'
    },
    {
        label:'Total Products',
        value:'230'
    },
    {
        label:'Category',
        value:'Electronic'
    },
    {
        label:'Email',
        value:'johndoe@gmail.coom'
    },
    {
        label:'Phone',
        value:'9876543210'
    },
    {
        label:'Postal Code',
        value:'33532'
    },
    {
        label:'Status',
        value:'Active'
    },
]

const VendorDetails = () => {
    const navigate=useNavigate()
   
  return (
    <div className='p-5'>
        <ArrowLeftIcon onClick={()=>history.back()} className='my-3 cursor-pointer'/>
        <div className='flex justify-between items-center'>
        <HeadingTypo className='text-2xl font-semibold'>John Doe Shop</HeadingTypo>
        <Button onClick={()=>navigate('/admin/vendor/analytics')} className='bg-orange-500 px-4 py-2 rounded-md text-white'>View Analytics</Button>
        </div>
        <div className='grid grid-cols-4 justify-between gap-3 my-6'>
            {
                shopDetails.map((ele:{label:string,value:string},index:number)=>{
                    return <div className='bg-white text-center border-2 border-gray-300 rounded-md shadow-md p-2 flex flex-col gap-y-3' key={index}>
                    <Label className='font-bold text-2xl'>{ele.label}</Label>
                    <HeadingTypo className='text-xl'>{ele.value}</HeadingTypo>
                </div>
                })
            }
        </div>
        <div>
            <HeadingTypo className='text-3xl font-semibold'>Top Products</HeadingTypo>
            <div className='grid grid-cols-3 gap-3 mt-6'>
       
        <div className=' border-2 border-gray-300 shadow-md p-2 rounded-md bg-white'>
          <HeadingTypo className='text-xl my-3 font-bold'>Top Selling Products</HeadingTypo>
          <div className='max-h-[400px] overflow-y-scroll'>
          <MostSellingProductCard name='Leather Jackent' id='8768979798779' result='123 Sales'/>
          <MostSellingProductCard name='Leather Jackent' id='8768979798779' result='123 Sales'/>
          <MostSellingProductCard name='Leather Jackent' id='8768979798779' result='123 Sales'/>
          <MostSellingProductCard name='Leather Jackent' id='8768979798779' result='123 Sales'/>
          </div>
        </div>
       
        <div className=' border-2 border-gray-300 shadow-md p-2 rounded-md bg-white'>
          <HeadingTypo className='text-xl my-3 font-bold'>Top Profit Product</HeadingTypo>
          <div className='max-h-[400px] overflow-y-scroll'>
          <MostSellingProductCard name='1 Plate Momo' id='8768979798779' result='$2000'/>
          <MostSellingProductCard name='1 Plate Momo' id='8768979798779' result='$2000'/>
          <MostSellingProductCard name='1 Plate Momo' id='8768979798779' result='$2000'/>
          <MostSellingProductCard name='1 Plate Momo' id='8768979798779' result='$2000'/>
          </div>
        </div>
       
        <div className=' border-2 border-gray-300 shadow-md p-2 rounded-md bg-white'>
          <HeadingTypo className='text-xl my-3 font-bold'>Top Expensive Products</HeadingTypo>
          <div className='max-h-[400px] overflow-y-scroll'>
          <MostSellingProductCard name='Diamond Ring' id='8768979798779' result='$3243 Per/ps'/>
          <MostSellingProductCard name='Diamond Ring' id='8768979798779' result='$3243 Per/ps'/>
          <MostSellingProductCard name='Diamond Ring' id='8768979798779' result='$3243 Per/ps'/>
          <MostSellingProductCard name='Diamond Ring' id='8768979798779' result='$3243 Per/ps'/>
          </div>
        </div>
        <div className=' border-2 border-gray-300 shadow-md p-2 rounded-md bg-white'>
          <HeadingTypo className='text-xl my-3 font-bold'>Top Payment Method</HeadingTypo>
          <div className='max-h-[400px] overflow-y-scroll'>
          <MostSellingProductCard name='Khalti' id='8768979798779' result='44 Trans'/>
          <MostSellingProductCard name='Esewa' id='8768979798779' result='12 Trans'/>
          <MostSellingProductCard name='IME Pay' id='8768979798779' result='4 Trans'/>
          <MostSellingProductCard name='COD' id='8768979798779' result='42 Trans'/>
          </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default VendorDetails