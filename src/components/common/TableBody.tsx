import React from 'react'

const TableBody = ({children,className}:{children:React.ReactNode,className?:string}) => {
  return (
    <tbody className={className}>{children}</tbody>
  )
}

export default TableBody