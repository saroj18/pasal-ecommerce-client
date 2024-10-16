import { useState } from "react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import Input from "../../../components/common/Input";
import TextArea from "../../../components/common/TextArea";
import Label from "../../../components/common/Label";
import ParaTypo from "../../../components/common/ParaTypo";
import { FormProps, ProductType } from "../pages/product/Product";
import { Sparkles } from "lucide-react";
import { CohereClient } from "cohere-ai";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";

interface ProductProps extends FormProps {
  getValues: UseFormGetValues<ProductType>;
  setValue: UseFormSetValue<ProductType>;
}

const ProductInfo = ({
  register,
  errors,
  getValues,
  setValue,
}: ProductProps) => {
  const [loading, setLoading] = useState(false);

  const cohere = new CohereClient({
    token: "tyLKcseE30tYEopGs5vjnhaDiSY8s7QWaTWUUeDW",
  });

  const clickHandler = async () => {
    console.log(getValues("name"));
    if (loading) {
      return;
    }
    setLoading(true);

    const response = await cohere.chat({
      message: `Write a 100 word description with serval paragraph for an eCommerce product named ${getValues("name")}. Focus on the key features, benefits, and unique selling points of the product. Mention how it can be used, who it’s ideal for, and what makes it stand out from similar products in the market. Include any relevant technical details or style elements that potential customers would find helpful in making a purchasing decision.`,
      connectors: [{ id: "web-search" }],
    });
    console.log(response.text);
    setLoading(false);

    setValue("description", response.text);
  };

  return (
    <div className="border-2 bg-white border-gray-300 shadow-md rounded-md p-1 sm:p-5 w-full lg:max-w-[40%]">
      <HeadingTypo className="text-xl font-semibold my-2">
        Product information
      </HeadingTypo>
      <div className="flex flex-col gap-y-2 border-2 border-gray-300 p-3 rounded-md">
        <Label className="opacity-75">Input Your Product's Name</Label>
        <Input
          {...register("name")}
          // onChange={changeHandler}
          name="name"
          className="h-[50px]"
          placeholder="enter your product name"
          type="text"
        />
        <ParaTypo className="text-red-500 text-[13px]">
          {errors.name?.message}
        </ParaTypo>
        <div className="flex items-center justify-between">
          <Label className="opacity-75 text-lg">
            Input Your Product's Description
          </Label>
          <ParaTypo
            disabled={loading}
            onClick={clickHandler}
            className={`w-fit ${loading ? "cursor-wait" : "cursor-pointer"} rounded-md text-white px-2 text-sm select-none flex items-center py-1 border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-border`}
          >
            {loading ? "Generating......." : "Generate"}
            {!loading && <Sparkles size={20} />}
          </ParaTypo>
        </div>
        <TextArea
          {...register("description")}
          // onChange={changeHandler}
          name="description"
          className="rounded-md min-h-[200px] break-words p-2"
        />

        <ParaTypo className="text-red-500 text-[13px]">
          {errors.description?.message}
        </ParaTypo>
        <Label className="opacity-75">Input Your Product's Brand</Label>
        <Input
          {...register("brand")}
          // onChange={changeHandler}
          name="brand"
          className="h-[50px]"
          placeholder="enter your product brand"
          type="text"
        />
        <ParaTypo className="text-red-500 text-[13px]">
          {errors.brand?.message}
        </ParaTypo>
      </div>
    </div>
  );
};

export default ProductInfo;
