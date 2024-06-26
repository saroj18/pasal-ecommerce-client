import React from 'react'

interface textAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
className:string
}

const TextArea = React.forwardRef<HTMLTextAreaElement,textAreaProps>(({className},ref) => {
    return (
      <textarea className={'border-2 border-gray-500 rounded-md outline-none'+className} ref={ref}></textarea>
    )
  })

export default TextArea