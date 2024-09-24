import React, { useEffect, useRef } from "react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import ParaTypo from "../../../components/common/ParaTypo";
import Input from "../../../components/common/Input";
import { FormProps, ProductType } from "../pages/product/Product";
import { UseFormSetValue, UseFormTrigger } from "react-hook-form";
import { Sparkles } from "lucide-react";

interface ProductImageProps extends FormProps {
  setValue: UseFormSetValue<ProductType>;
  trigger: UseFormTrigger<ProductType>;
  updateData: any;
}

const ProductImage = ({
  register,
  errors,
  setValue,
  trigger,
  updateData,
}: ProductImageProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = React.useState<FileList | null>(null);

  const clickHandler = () => {
    inputRef.current?.click();
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setImages(files);
    if (files) {
      setValue("images", files);
      trigger("images");
    }
  };

  const imageGenerateHandler = async () => {
    const resp = await fetch("https://api.picogen.io/v1/job/generate", {
      method: "POST",
      body: JSON.stringify({
        prompt: "A beautiful landscape with mountains and a lake",
        ratio: "16:9",
      }),
      headers: {
        "Content-Type": "application/json",
        "API-Token": 'apiToken',
      },
    });
    const data = await resp.json();
    console.log(data);
  };

  useEffect(() => {
    if (updateData) {
      setValue("images", "UPDATE");
    }
  }, [updateData]);

  return (
    <div className="border-2 border-gray-300 rounded-md p-2 grow w-full">
      <div className="flex items-center justify-between">
        <HeadingTypo className="text-xl font-semibold">
          Product Image
        </HeadingTypo>
        {/* <ParaTypo
          onClick={imageGenerateHandler}
          className="w-fit rounded-md text-white px-2 text-sm cursor-pointer select-none flex items-center py-1 border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-border"
        >
          Generate
          <Sparkles size={20} />
        </ParaTypo> */}
      </div>
      <ParaTypo className="opacity-75 mb-2 text-[15px]">
        (5 images required)
      </ParaTypo>
      <div className="flex gap-x-2">
        <div
          onClick={clickHandler}
          className="flex grow justify-center p-2 items-center flex-col gap-y-1 text-blue-500 font-semibold rounded-md cursor-pointer border-2 border-gray-300"
        >
          {!updateData && <span>+</span>}
          <ParaTypo className="text-[13px] opacity-75">
            {updateData ? "Image cannot be update" : "Add Photo"}
          </ParaTypo>
          <div className="flex w-full justify-between">
            {updateData
              ? updateData?.images?.map((image: any, index: number) => {
                  return (
                    <img
                      onClick={() => setValue("images", updateData.images)}
                      className="h-[20px] w-[20px] object-cover cursor-pointer"
                      key={index}
                      src={image}
                      alt=""
                    />
                  );
                })
              : images &&
                Array.from(images).map((image, index) => {
                  return (
                    <img
                      className="h-[20px] w-[20px] object-cover cursor-pointer"
                      key={index}
                      src={URL.createObjectURL(image)}
                      alt=""
                    />
                  );
                })}
          </div>
          <Input
            disabled={updateData ? true : false}
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
