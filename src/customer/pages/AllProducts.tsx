import React, { useEffect } from 'react'
import HeadingTypo from '../../components/common/HeadingTypo'
import ProductCard from '../../components/ProductCard'

const AllProducts = () => {

    useEffect(()=>{
        window.scrollTo({top:0})
    },[])
  return (
    <div>
        <HeadingTypo className='text-2xl my-4'>All Products</HeadingTypo>
        <div className='grid grid-cols-4 gap-5'>
            {
                Array(20).fill(null).map((_,index)=>{
                    return <ProductCard key={index}/>
                })
            }
        </div>
    </div>
  )
}

export default AllProducts