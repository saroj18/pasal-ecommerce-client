import { Star } from 'lucide-react'
import React from 'react'

const ProductCard = () => {
  return (
    <div className='border-2 border-gray-500 rounded-md'>
        <div>
            <img src="https://pngimg.com/d/monitor_PNG101653.png" alt="" />
        </div>
        <div className='p-3'>
            <p className='font-semibold'>IPS LCD Gaming Monitor</p>
            <div className='flex items-center gap-4 my-1'>
                <p>$370</p>
                <p className='line-through opacity-[0.5]'>$400</p>
            </div>
            <div className='flex items-center'>
                <section className='flex items-center'>
                <Star size={17} color='orange' fill='orange'/>
                <Star size={17} color='orange' fill='orange'/>
                <Star size={17} color='orange' fill='orange'/>
                <Star size={17} color='orange' fill='orange'/>
                <Star size={17} color='orange' fill='orange'/>
                </section>
                <p>(44)</p>
            </div>

        </div>
    </div>
  )
}

export default ProductCard