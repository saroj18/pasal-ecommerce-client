import React, { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:string | React.ReactNode
    className?:string
}

const Button = ({children,className,...props}:buttonProps) => {
  return (
    <button {...props} className={twMerge('cursor-pointer rounded-sm outline-none',className)}>{children}</button>
  )
}

export default Button