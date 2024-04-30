import React from 'react'
import { twMerge } from 'tailwind-merge'

interface typoProps extends React.AllHTMLAttributes<HTMLHeadingElement>{
    children:string
    className:string
}

const HeadingTypo = React.forwardRef<HTMLHeadingElement,typoProps>(({children,className},ref) => {
  return (
    <h1 ref={ref} className={twMerge("font-semibold",className)}>{children}</h1>
  )
})

export default HeadingTypo