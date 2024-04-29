import React from 'react'
import { navList } from '../../constants/NavList'
import { Link } from 'react-router-dom'
import Input from '../common/Input'
import { Heart, Search, ShoppingCart } from 'lucide-react'

const Navbar = () => {
  return (
   <nav className='flex justify-between items-center container'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRM_lRbBpez6mI1ZDq5eMBGJXCYej4SEeEpQAKwdAOA&s" className='w-[80px]' alt="" />
    <ul className='flex items-center gap-x-7'>
        {
           navList.map((ele,index)=>{
            return <Link key={index} to={ele.path}><li>{ele.name}</li></Link>
           }) 
        }
    </ul>
    <div className='flex items-center relative w-[30%] gap-x-6'>
            <Input className='w-[80%]' type='text' placeholder='what are you looking for?'/>
            <Search opacity={0.3} size={22} className='absolute left-[69%] top-2' />
        <Heart opacity={0.7} />
        <ShoppingCart opacity={0.7} />
    </div>
   </nav>
  )
}

export default Navbar