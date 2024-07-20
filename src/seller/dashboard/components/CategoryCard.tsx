import React from "react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import Label from "../../../components/common/Label";
import Select from "../../../components/common/Select";
import Option from "../../../components/common/Option";
import { useContextProvider } from "../../../context/Context";
import ParaTypo from "../../../components/common/ParaTypo";
import { UseFormRegister } from "react-hook-form";
import { FormProps, ProductType } from "../pages/product/Product";

const CategoryCard = ({register,errors}:FormProps) => {
  const {setProductInfo,zodError}=useContextProvider()

  const changeHandler=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    setProductInfo((prv)=>({
      ...prv,
      [e.target.name]:e.target.value
    }))
  }
  return (
    <div className="border-2 border-gray-300 p-3 rounded-md grow w-full">
      <HeadingTypo className="text-2xl font-semibold">Category</HeadingTypo>
      <div className="flex flex-col">
        <Label className="text-[17px] opacity-75 my-2">Product Category</Label>
        <Select {...register('category')} onChange={changeHandler} name="category" className="h-[50px] text-xl">
          <Option value="" defaultChecked>
            Select Category
          </Option>
          <Option value="fashion">Fashion</Option>
          <Option value="electronic">Electronic</Option>
          <Option value="grosery">Grosery</Option>
          <Option value="Kitchen">Kitchen</Option>
          <Option value="decoration">Decoration</Option>
          <Option value="others">Others</Option>
        </Select>
        <ParaTypo className="text-red-500 text-[13px]">{errors.category?.message}</ParaTypo>
      </div>
    </div>
  );
};

export default CategoryCard;
