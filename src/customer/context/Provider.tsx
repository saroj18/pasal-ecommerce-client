import React, { createContext, useContext, useState } from 'react'


type ContextProps={
    open:boolean
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}
  const CustomerProvider=createContext<ContextProps | null>(null)

export const Provider = ({children}:{children:React.ReactNode}) => {
    const[open,setOpen]=useState<boolean>(false)
  return (
    <CustomerProvider.Provider value={{open,setOpen}}>
        {children}
    </CustomerProvider.Provider>
  )
}

export const useCustomer=()=>{
    let context=useContext(CustomerProvider)
    if(!context){
        throw new Error("unable to access(you are outside of a provider)")
    }
    return context
}

export default Provider