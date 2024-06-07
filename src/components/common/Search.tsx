import React from 'react'
import Input from './Input'
import { Search } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

const SearchBox = ({className}:{className?:string}) => {
  return (
    <div className={twMerge(className,"relative")}>
          <Input
            className="w-[90%]"
            type="text"
            placeholder="what are you looking for?"
          />
          <Search
            opacity={0.3}
            size={22}
            className="absolute left-[80%] top-2"
          />
        </div>
  )
}

export default SearchBox