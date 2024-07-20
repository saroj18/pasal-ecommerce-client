import React, { useRef } from "react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import ParaTypo from "../../../components/common/ParaTypo";
import Input from "../../../components/common/Input";
import { FormProps, ProductType } from "../pages/product/Product";
import { UseFormSetValue, UseFormTrigger } from "react-hook-form";

interface ProductImageProps extends FormProps {
  setValue: UseFormSetValue<ProductType>;
  trigger: UseFormTrigger<ProductType>;
}

const ProductImage = ({
  register,
  errors,
  setValue,
  trigger,
}: ProductImageProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    inputRef.current?.click();
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setValue("images", files);
      trigger("images");
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-md p-2 grow w-full">
      <HeadingTypo className="text-2xl font-semibold">
        Product Image
      </HeadingTypo>
      <ParaTypo className="opacity-75 mb-2 text-[15px]">
        (5 images required)
      </ParaTypo>
      <div className="flex gap-x-2">
        <div
          onClick={clickHandler}
          className="flex grow justify-center p-2 items-center flex-col gap-y-1 text-blue-500 font-semibold rounded-md cursor-pointer border-2 border-gray-300"
        >
          <span>+</span>
          <ParaTypo className="text-[13px] opacity-75">Add Photo</ParaTypo>
          <Input
            {...register("images")}
            onChange={changeHandler}
            multiple
            accept=".png, .jpeg, .jpg"
            name="images"
            type="file"
            ref={inputRef}
            hidden
          />
          {errors.images?.message && (
            <ParaTypo className="text-red-500 text-[13px]">
              {typeof errors.images.message === "string"
                ? errors.images.message
                : "Invalid input"}
            </ParaTypo>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
