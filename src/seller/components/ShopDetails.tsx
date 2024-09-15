import React, { useEffect, useRef } from "react";
import HeadingTypo from "../../components/common/HeadingTypo";
import Label from "../../components/common/Label";
import Input from "../../components/common/Input";
import Select from "../../components/common/Select";
import Option from "../../components/common/Option";
import Button from "../../components/common/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShopDetailsZodSchema } from "../zodschema/product";
import { z } from "zod";
import ParaTypo from "../../components/common/ParaTypo";
import { useMutation } from "../../hooks/useMutation";
import { useNavigate } from "react-router-dom";

type ShopType = z.infer<typeof ShopDetailsZodSchema>;

const ShopDetails = () => {
  const shopImageFileInputRef = useRef<HTMLInputElement>(null);
  const documentImageFileInputRef = useRef<HTMLInputElement>(null);
  const yourImageFileInputRef = useRef<HTMLInputElement>(null);
  const { mutate, response } = useMutation();
  const navigate = useNavigate();

  const clickHandler = (params: string) => {
    if (params == "yourImage") {
      yourImageFileInputRef?.current?.click();
    } else if (params == "documentImage") {
      documentImageFileInputRef.current?.click();
    } else {
      shopImageFileInputRef.current?.click();
    }
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ShopType>({
    resolver: zodResolver(ShopDetailsZodSchema),
    defaultValues: {
      shopLocation: {
        lat: 0.22,
        lng: 2.333,
      },
    },
  });

  const locationHandler = () => {
    let locationCordinate;
    navigator.geolocation.getCurrentPosition((position) => {
      locationCordinate = { lat: 0, lng: 0 };
      locationCordinate.lat = position.coords.latitude;
      locationCordinate.lng = position.coords.longitude;
      setValue("shopLocation", locationCordinate);
    });
  };

  const onSubmit = (data: ShopType) => {
    const formData = new FormData();
    const objData: { [key: string]: string } = {};
    console.log(data);
    Object.entries(data).forEach((ele) => {
      if (ele[1] instanceof File) {
        formData.append(`images`, ele[1]);
      } else {
        objData[ele[0]] = ele[1];
      }
    });
    const info = JSON.stringify(objData);
    formData.append("shopDetails", info);
    mutate("/seller/verify", "POST", formData);
  };

  useEffect(() => {
    console.log(response);

    if (response && response?.data.verify) {
      navigate("/dashboard");
    }
    if (response && !response?.data.verify) {
      navigate("/account/verify");
    }
  }, [response]);

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const file = e.target.files?.[0];
    console.log(name);
    if (name == "shopImage") {
      console.log(file);
      setValue("shopImage", file);
    } else if (name == "documentImage") {
      setValue("documentImage", file);
    } else {
      setValue("yourImage", file);
    }
  };
  return (
    <div>
      <HeadingTypo className="text-2xl text-center mb-4">
        Shop Details
      </HeadingTypo>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <div className="flex flex-col grow">
            <Label>Shop Name</Label>
            <Input
              {...register("shopName")}
              type="text"
              className="h-[50px]"
              placeholder="Enter your email"
            />
            {errors.shopName?.message && (
              <ParaTypo className="text-red-500 text-sm">
                {errors.shopName?.message as string}
              </ParaTypo>
            )}
          </div>
          <div className="flex flex-col grow">
            <Label>Shop Owner Name</Label>
            <Input
              {...register("owner")}
              type="text"
              className="h-[50px]"
              placeholder="Enter your phone"
            />
            {errors.owner?.message && (
              <ParaTypo className="text-red-500 text-sm">
                {errors.owner?.message as string}
              </ParaTypo>
            )}
          </div>
          <div className="flex flex-col grow">
            <Label>Shop Address</Label>
            <Input
              {...register("address")}
              type="text"
              className="h-[50px]"
              placeholder="Enter your email"
            />
            {errors.address?.message && (
              <ParaTypo className="text-red-500 text-sm">
                {errors.address?.message as string}
              </ParaTypo>
            )}
          </div>
          <div className="flex flex-col grow">
            <Label>Pick Exact Address</Label>
            <ParaTypo
              onClick={locationHandler}
              className="bg-blue-500 text-white py-2 flex items-center justify-center cursor-pointer select-none rounded-md h-[50px]"
            >
              Click Here for exact Location
            </ParaTypo>
            {errors.shopLocation?.message && (
              <ParaTypo className="text-red-500 text-sm">
                {errors.shopLocation?.message as string}
              </ParaTypo>
            )}
          </div>
          <div className="flex flex-col grow">
            <Label>Shop Category</Label>
            <Select {...register("category")} className="h-[50px]">
              <Option value="" defaultChecked>
                Select Category
              </Option>
              <Option value="clothes">Clothes</Option>
              <Option value="grosery">Grosery</Option>
              <Option value="electronic">Electronic</Option>
              <Option value="handcraft">Handcraft</Option>
              <Option value="other">Other</Option>
            </Select>
            {errors.category?.message && (
              <ParaTypo className="text-red-500 text-sm">
                {errors.category?.message as string}
              </ParaTypo>
            )}
          </div>
          <div className="flex flex-col grow ">
            <Label>Shop Image</Label>
            <div
              onClick={() => clickHandler("shopImage")}
              className="cursor-pointer border-2 border-gray-500 h-[50px] rounded-md flex justify-center items-center"
            >
              <Input
                {...register("shopImage")}
                onChange={imageHandler}
                name="shopImage"
                ref={shopImageFileInputRef}
                hidden
                type="file"
                multiple={false}
              />
              <p>Click Here to upload image</p>
            </div>
            {errors.shopImage?.message && (
              <ParaTypo className="text-red-500 text-sm">
                {errors.shopImage?.message as string}
              </ParaTypo>
            )}
          </div>
          <div className="flex flex-col grow">
            <Label>Exptd.Monthly Turnover</Label>
            <Input
              {...register("turnover")}
              type="text"
              className="h-[50px]"
              placeholder="Enter your exptd.turnover"
            />
            {errors.turnover?.message && (
              <ParaTypo className="text-red-500 text-sm">
                {errors.turnover?.message as string}
              </ParaTypo>
            )}
          </div>
          <div className="flex flex-col grow">
            <Label>Citizenship Number</Label>
            <Input
              {...register("citiNumber")}
              type="text"
              className="h-[50px]"
              placeholder="Enter your Citizenship Number"
            />
            {errors.citiNumber?.message && (
              <ParaTypo className="text-red-500 text-sm">
                {errors.citiNumber?.message as string}
              </ParaTypo>
            )}
          </div>
          <div className="flex flex-col grow ">
            <Label>Your Photo</Label>
            <div
              onClick={() => clickHandler("yourImage")}
              className="cursor-pointer border-2 border-gray-500 h-[50px] rounded-md flex justify-center items-center"
            >
              <Input
                {...register("yourImage")}
                onChange={imageHandler}
                name="yourImage"
                ref={yourImageFileInputRef}
                hidden
                type="file"
                multiple={false}
              />
              <p>Click Here to upload image</p>
            </div>
            {errors.yourImage?.message && (
              <ParaTypo className="text-red-500 text-sm">
                {errors.yourImage?.message as string}
              </ParaTypo>
            )}
          </div>
          <div className="flex flex-col grow ">
            <Label>Your Document Image</Label>
            <div
              onClick={() => clickHandler("documentImage")}
              className="cursor-pointer border-2 border-gray-500 h-[50px] rounded-md flex justify-center items-center"
            >
              <Input
                {...register("documentImage")}
                onChange={imageHandler}
                name="documentImage"
                ref={documentImageFileInputRef}
                hidden
                type="file"
                multiple={false}
              />
              <p className=" text-black">Click Here to upload image</p>
            </div>
            {errors.documentImage?.message && (
              <ParaTypo className="text-red-500 text-sm">
                {errors.documentImage?.message as string}
              </ParaTypo>
            )}
          </div>
        </div>
        <Button className="w-full my-4 bg-red-500 text-white">Submit</Button>
      </form>
    </div>
  );
};

export default ShopDetails;
