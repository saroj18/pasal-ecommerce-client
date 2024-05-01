import React from 'react'
import { twMerge } from 'tailwind-merge'

type buttonProps={
    children:string | React.ReactNode
    className?:string
}

const Button = ({children,className}:buttonProps) => {
  return (
    <button className={twMerge('cursor-pointer rounded-sm outline-none',className)}>{children}</button>
  )
}

export default Button