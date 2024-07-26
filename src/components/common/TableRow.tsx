import React from 'react'

const TableRow = ({className,children}:{className?:string,children:React.ReactNode}) => {
  return <tr className={
    " border-gray-300 border-t-2 border-b-2 border-l-0 border-r-0 cursor-pointer" +
    className
  }>
    {children}
  </tr>
}

export default TableRow