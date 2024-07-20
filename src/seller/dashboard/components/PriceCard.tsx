import React from "react";
import Label from "../../../components/common/Label";
import Input from "../../../components/common/Input";
import Select from "../../../components/common/Select";
import Option from "../../../components/common/Option";
import AddFeatures from "./AddFeatures";
import { useContextProvider } from "../../../context/Context";
import ParaTypo from "../../../components/common/ParaTypo";
import { FormProps, ProductType } from "../pages/product/Product";
import { UseFormReset, UseFormSetValue } from "react-hook-form";

export interface PriceCardProps extends FormProps {
  setValue:UseFormSetValue<ProductType>
}

const PriceCard = ({ register, errors,setValue }: PriceCardProps) => {
  const { setProductInfo, zodError } = useContextProvider();
  console.log(zodError);

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setProductInfo((prv) => ({
      ...prv,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 border-2 border-gray-300 rounded-md p-3">
        <div className="grow">
          <Label className="text-2xl font-semibold mb-2">Price</Label>
          <div className="flex flex-col">
            <Input
              {...register("price")}
              onChange={changeHandler}
              name="price"
              className="h-[50px]"
              placeholder="enter price"
              type="text"
            />
            <ParaTypo className="text-red-500 text-[13px]">
              {errors.price?.message}
            </ParaTypo>
          </div>
        </div>
        <div className="grow">
          <Label className="text-2xl font-semibold mb-2">Discount</Label>
          <div className="flex flex-col">
            <Input
              {...register("discount")}
              name="discount"
              onChange={changeHandler}
              className="h-[50px]"
              placeholder="enter discount(%)"
              type="text"
            />
            <ParaTypo className="text-red-500 text-[13px]">
              {errors.discount?.message}
            </ParaTypo>
          </div>
        </div>
        <div className="grow">
          <Label className="text-2xl font-semibold mb-2">Stock</Label>
          <div className="flex flex-col">
            <Input
              {...register("stock")}
              onChange={changeHandler}
              name="stock"
              className="h-[50px]"
              placeholder="enter stock"
              type="text"
            />
            <ParaTypo className="text-red-500 text-[13px]">
              {errors.stock?.message}
            </ParaTypo>
          </div>
        </div>
        <div className="grow flex flex-col">
          <Label className="text-2xl font-semibold ">Barganing</Label>
          <Select
            {...register("barganing")}
            onChange={changeHandler}
            name="barganing"
            className="h-[50px]"
          >
            <Option value="">Select Option</Option>
            <Option value="enable">Enable</Option>
            <Option value="disable">Disable</Option>
          </Select>
          <ParaTypo className="text-red-500 text-[13px]">
            {errors.barganing?.message}
          </ParaTypo>
        </div>
        <div className="grow flex flex-col">
          <Label className="text-2xl font-semibold ">Chating</Label>
          <Select
            {...register("chating")}
            onChange={changeHandler}
            name="chating"
            className="h-[50px]"
          >
            <Option value="">Select Option</Option>
            <Option value="enable">Enable</Option>
            <Option value="disable">Disable</Option>
          </Select>
          <ParaTypo className="text-red-500 text-[13px]">
            {errors.chating?.message}
          </ParaTypo>
        </div>
      </div>
      <AddFeatures setValue={setValue} errors={errors} register={register} />
    </>
  );
};

export default PriceCard;
