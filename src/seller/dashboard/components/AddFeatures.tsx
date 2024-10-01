import React, { useEffect, useState } from "react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import Input from "../../../components/common/Input";
import ParaTypo from "../../../components/common/ParaTypo";
import { X } from "lucide-react";
import { PriceCardProps } from "./PriceCard";

const AddFeatures = ({
  errors,
  setValue,
  updateData,
}: PriceCardProps) => {
  const [features, setFeatures] = useState<string>("");
  const [featuresCollection, setFeaturesCollection] = useState<string[]>([]);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeatures(e.target.value);
  };

  const clickHandler = () => {
    if (!features) return;
    setFeaturesCollection((prv) => [...prv, features]);
    setFeatures("");
  };

  useEffect(() => {
    setValue("features", featuresCollection);
  }, [featuresCollection]);

  useEffect(() => {
    if (updateData) {
      setFeaturesCollection(updateData.features);
    }
  }, [updateData]);

  const closeHandler = (index: number) => {
    setFeaturesCollection((prv) => {
      let arr = [...prv];
      arr.splice(index, 1);
      return arr;
    });
  };
  return (
    <div className="border-2 border-gray-200 rounded-md p-2">
      <HeadingTypo className="text-2xl font-semibold">
        Product's Features
      </HeadingTypo>
      <div>
        {featuresCollection.length > 0 &&
          featuresCollection.map((ele, index) => {
            return (
              <div
                key={index}
                className="flex items-center w-full  justify-between border-2 border-gray-200 rounded-md p-1 my-1"
              >
                <ParaTypo>{ele}</ParaTypo>
                <X
                  onClick={() => closeHandler(index)}
                  className="cursor-pointer"
                />
              </div>
            );
          })}
      </div>
      <div className=" flex justify-between gap-x-4 items-center mt-3">
        <Input
          onKeyDown={(e) => (e.key == "Enter" ? clickHandler() : null)}
          onChange={changeHandler}
          value={features}
          className="w-full"
          type="text"
          placeholder="Enter features"
        />
        <ParaTypo
          onClick={clickHandler}
          className="bg-red-500 rounded-md py-2 text-white px-5 cursor-pointer"
        >
          Add
        </ParaTypo>
      </div>
      <ParaTypo className="text-red-500 text-[13px]">
        {errors.features?.message}
      </ParaTypo>
    </div>
  );
};

export default AddFeatures;
