import React from 'react'

export const TableHead = ({children,className}:{children:React.ReactNode,className?:string}) => {
  return (
    <thead className={className}>{children}</thead>
  )
}
export const TableHeadData=({children,className}:{children:string,className:string})=>{
    return <th className={className}>{children}</th>
}

