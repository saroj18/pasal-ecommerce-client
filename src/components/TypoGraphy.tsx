import React from 'react'
import { twMerge } from 'tailwind-merge'

type typoProps={
    children:string
    className:string
}

const TypoGraphy = ({children,className}:typoProps) => {
  return (
    <h1 className={twMerge("font-semibold",className)}>{children}</h1>
  )
}

export default TypoGraphy