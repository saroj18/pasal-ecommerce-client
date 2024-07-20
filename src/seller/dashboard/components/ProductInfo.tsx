import React from "react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import Input from "../../../components/common/Input";
import TextArea from "../../../components/common/TextArea";
import Label from "../../../components/common/Label";
import { useContextProvider } from "../../../context/Context";
import ParaTypo from "../../../components/common/ParaTypo";
import { FormProps } from "../pages/product/Product";

const ProductInfo = ({register,errors}:FormProps) => {
  const{productInfo,setProductInfo,zodError}=useContextProvider()
  const changeHandler=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setProductInfo((prv)=>({
      ...prv,
      [e.target.name]:e.target.value
    }))
  }

  return (
    <div className="border-2 bg-white border-gray-300 shadow-md rounded-md p-1 sm:p-5 w-full lg:max-w-[40%]">
      <HeadingTypo className="text-xl font-semibold my-2">
        Product information
      </HeadingTypo>
      <div className="flex flex-col gap-y-2 border-2 border-gray-300 p-3 rounded-md">
        <Label className="opacity-75">Input Your Product's Name</Label>
        <Input
        {...register('name')}
        onChange={changeHandler}
        name="name"
          className="h-[50px]"
          placeholder="enter your product name"
          type="text"
        />
        <ParaTypo className="text-red-500 text-[13px]">{errors.name?.message}</ParaTypo>
        <Label className="opacity-75">Input Your Product's Description</Label>
        <TextArea {...register('description')} onChange={changeHandler} name="description"  className="rounded-md min-h-[200px] break-words p-2" />
        <ParaTypo className="text-red-500 text-[13px]">{errors.description?.message}</ParaTypo>
        <Label className="opacity-75">Input Your Product's Brand</Label>
        <Input
        {...register('brand')}
        onChange={changeHandler}
        name="brand"
          className="h-[50px]"
          placeholder="enter your product brand"
          type="text"
        />
        <ParaTypo className="text-red-500 text-[13px]">{errors.brand?.message}</ParaTypo>
      </div>
    </div>
  );
};

export default ProductInfo;
