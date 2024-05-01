import React from 'react'
import { twMerge } from 'tailwind-merge'

interface paraProps extends React.AllHTMLAttributes<HTMLParagraphElement>{
    children:string
    className?:string
}

const ParaTypo = React.forwardRef<HTMLParagraphElement,paraProps>(({children,className,...props},ref) => {
    return (
      <p ref={ref} className={twMerge('text-lg',className)} {...props}>{children}</p>
    )
  })

export default ParaTypo