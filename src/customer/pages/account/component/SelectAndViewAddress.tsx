import { useState } from "react";
import Button from "../../../../components/common/Button";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import Option from "../../../../components/common/Option";
import Select from "../../../../components/common/Select";

type addressProps={
    delevery:boolean
    billing:boolean
}

const SelectAndViewAddress = () => {
    const[open,setOpen]=useState<addressProps>({
        delevery:false,
        billing:false
    })
  return (
    <div className="p-2 border-2 border-gray-200 shadow-md mb-2">
      <div className="border-2 p-2 rounded-md shadow-md">
        <HeadingTypo className="text-xl mb-2  ">Delevery Address</HeadingTypo>
        <div className="flex items-center gap-x-3">
          <HeadingTypo className="opacity-60">
            Bagmati Province,Ratnanagar,Tadi Bazar,Ratnanagar 14,Near By
            Swarshati Mandir
          </HeadingTypo>
          <Button onClick={()=>setOpen((prv=>({...prv,delevery:true})))} className="bg-red-500 text-white px-3 py-2 rounded-md">
            Change
          </Button>
        </div>
        {open.delevery&&<div>
           <Select className="w-full mt-4">
            <Option defaultChecked value="">
              Select Address
            </Option>
            <Option value="">
              Bagmati Province,Ratnanagar,Tadi Bazar,Ratnanagar 14,Near By
              Swarshati Mandir
            </Option>
            <Option value="">
              Bagmati Province,Ratnanagar,Tadi Bazar,Ratnanagar 14,Near By
              Swarshati Mandir
            </Option>
            <Option value="">
              Bagmati Province,Ratnanagar,Tadi Bazar,Ratnanagar 14,Near By
              Swarshati Mandir
            </Option>
          </Select>
          <Button onClick={()=>setOpen((prv)=>({...prv,delevery:false}))} className="bg-blue-500 px-4 text-white my-2 py-2 rounded-md">Set</Button>
        </div>}
      </div>
      <div className="border-2 p-2 rounded-md shadow-md my-2">
        <HeadingTypo className="text-xl mb-2  ">Billing Address</HeadingTypo>
        <div className="flex items-center gap-x-3">
          <HeadingTypo className="opacity-60">
            Bagmati Province,Ratnanagar,Tadi Bazar,Ratnanagar 14,Near By
            Swarshati Mandir
          </HeadingTypo>
          <Button onClick={()=>setOpen((prv)=>({...prv,billing:true}))} className="bg-red-500 text-white px-3 py-2 rounded-md">
            Change
          </Button>
          
        </div>
        {open.billing&&<div>
           <Select className="w-full mt-4">
            <Option defaultChecked value="">
              Select Address
            </Option>
            <Option value="">
              Bagmati Province,Ratnanagar,Tadi Bazar,Ratnanagar 14,Near By
              Swarshati Mandir
            </Option>
            <Option value="">
              Bagmati Province,Ratnanagar,Tadi Bazar,Ratnanagar 14,Near By
              Swarshati Mandir
            </Option>
            <Option value="">
              Bagmati Province,Ratnanagar,Tadi Bazar,Ratnanagar 14,Near By
              Swarshati Mandir
            </Option>
          </Select>
          <Button onClick={()=>setOpen((prv)=>({...prv,billing:false}))} className="bg-blue-500 px-4 text-white my-2 py-2 rounded-md">Set</Button>
        </div>}
      </div>
    </div>
  );
};

export default SelectAndViewAddress;
