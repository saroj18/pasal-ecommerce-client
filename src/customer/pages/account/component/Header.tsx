import React from 'react'
import HeadingTypo from '../../../../components/common/HeadingTypo'
import { Menu } from 'lucide-react'
import { useContextProvider } from '../../../../context/Context'

const Header = () => {
    const{setAccountSideBar}=useContextProvider()
  return <div className='flex bg-gray-100 shadow-md px-2 mt-5 items-center justify-between'>
  <HeadingTypo className='my-2 text-xl sm:text-2xl md:hidden'> Account</HeadingTypo>
  <Menu onClick={()=>setAccountSideBar(true)} className='md:hidden cursor-pointer'/>
  </div>
}

export default Header