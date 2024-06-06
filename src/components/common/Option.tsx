import React from 'react'

interface optionProps extends React.OptionHTMLAttributes<HTMLOptionElement>{
    children:string
    value:string
}

const Option =React.forwardRef<HTMLOptionElement,optionProps>( ({value,children}) => {
    return (
      <option value={value}>{children}</option>
    )
  })

export default Option