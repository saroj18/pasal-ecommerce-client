import Popup from "reactjs-popup"
import ParaTypo from "../../../components/common/ParaTypo"
import Label from "../../../components/common/Label"
import Input from "../../../components/common/Input"
import React, { useEffect, useState } from "react"
import Button from "../../../components/common/Button"
import { useMutation } from "../../../hooks/useMutation"

type CoupenProps = {
    open: boolean
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const CoupenPopup = ({ open, setOpen }: CoupenProps) => {
    const [coupenDetails, setCoupenDetails] = useState({
        coupenName: '',
        coupenCode: '',
        coupenDiscount:''
    })
    const {mutate,response}=useMutation()

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCoupenDetails(prv=>({...prv,[e.target.name]:e.target.value}))
    }

    const clickHandler = () => {
        mutate('/coupen','POST',coupenDetails)
    }

    useEffect(() => {
        if (response?.success) {
            setOpen(false)
        }
    },[response])

  return (
      <Popup contentStyle={{maxWidth:'400px',padding:'10px',borderRadius:'10px'}} open={open} onClose={()=>setOpen(false)}>
          <ParaTypo className="text-center font-semibold text-2xl text-green-500">Create a Coupen</ParaTypo>
          <div className="flex flex-col gap-y-1 my-1">
              <Label className="font-semibold">Coupen Name</Label>
          <Input name="coupenName" onChange={changeHandler} type="text" placeholder="enter coupen name"/>
          </div>
          <div className="flex flex-col gap-y-1 my-1">
              <Label className="font-semibold">Coupen Code</Label>
          <Input name="coupenCode" onChange={changeHandler} type="text" placeholder="enter coupen code"/>
          </div>
          <div className="flex flex-col gap-y-1 my-1">
              <Label className="font-semibold">Coupen Discount</Label>
          <Input name="coupenDiscount" onChange={changeHandler} type="text" placeholder="enter coupen discount"/>
          </div>
          <Button onClick={clickHandler} className="w-full bg-red-500 my-2">Create</Button>
    </Popup>
  )
}

export default CoupenPopup