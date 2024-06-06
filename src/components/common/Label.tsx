import React from 'react'
import { twMerge } from 'tailwind-merge'

interface labelProps extends React.LabelHTMLAttributes<HTMLLabelElement>{
    className?:string
    children:string
}

const Label = React.forwardRef<HTMLInputElement,labelProps>(({className,children}) => {
    return (
      <label className={twMerge(className)} >{children}</label>
    )
  })

export default Label