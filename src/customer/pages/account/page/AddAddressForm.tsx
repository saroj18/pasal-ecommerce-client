import HeadingTypo from "../../../../components/common/HeadingTypo";
import Label from "../../../../components/common/Label";
import Input from "../../../../components/common/Input";
import Button from "../../../../components/common/Button";
import { MapPinIcon, X } from "lucide-react";
import Select from "../../../../components/common/Select";
import Option from "../../../../components/common/Option";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  AddressZodSchema,
  LocalStorageUserRoleSchema,
} from "../../../zodschema/user";
import { zodResolver } from "@hookform/resolvers/zod";
import ParaTypo from "../../../../components/common/ParaTypo";
import { useMutation } from "../../../../hooks/useMutation";
import { useEffect, useState } from "react";
import { zodErrorFormatter } from "../../../../utils/errorFormatter";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { VerifyForm, VerifyInfoTyype } from "../component/VerifyForm";

export type AddressForm = z.infer<typeof AddressZodSchema>;

type formProps = {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  close?: boolean;
  verifyInfo?: VerifyInfoTyype | VerifyForm | AddressForm;
};

const AddAddressForm = ({ setOpen, close = false, verifyInfo }: formProps) => {
  const { mutate, response } = useMutation();
  const [loc, setLoc] = useState({
    lat: 0,
    lng: 0,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressForm>({
    resolver: zodResolver(AddressZodSchema),
    defaultValues: {
      city: "Ratnanagar",
      district: "Chitwan",
      state: "Bagmati",
      defaultAddress: "delevery",
      nearBy: "Sarswati Mandir",
      tole: "Ramlila",
      ward: "14",
      // location: {
      //   lat: 0.333,
      //   lng: 4.33,
      // },
    },
  });
  // const { verifyInfo } = useContextProvider();

  const clickHandler = () => {
    if (loc.lat > 0 || loc.lng > 0) return;
    setLoading(true);
    let locationCordinate;
    navigator.geolocation.getCurrentPosition((position) => {
      locationCordinate = { lat: 0, lng: 0 };
      locationCordinate.lat = position.coords.latitude;
      locationCordinate.lng = position.coords.longitude;
      setValue("location", locationCordinate);
      setLoading(false);
      setLoc(locationCordinate);
    });
  };

  const onSubmit = (data: AddressForm) => {
    let obj = { ...verifyInfo, ...data };
    mutate("/user/verify", "POST", obj);
  };

  const closeHandler = () => {
    if (setOpen) setOpen(false);
  };

  useEffect(() => {
    if (response?.success) {
      const role = LocalStorageUserRoleSchema.safeParse({
        role: localStorage.getItem("role"),
      });
      if (role.success) {
        role.data.role == "CUSTOMER" ? navigate("/") : navigate("/otp");
      } else {
        const error = zodErrorFormatter(role?.error?.format());
        toast.error(error.role);
      }
    }
  }, [response]);

  return (
    <div className="w-full max-w-[700px] bg-white mx-auto border-gray-300 shadow-md border-2 rounded-md p-3 mb-3 relative">
      <HeadingTypo className="text-2xl mb-4">Add Address</HeadingTypo>
      {close && (
        <X
          onClick={closeHandler}
          className="absolute left-[93%] cursor-pointer top-2"
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-y-4 items-center gap-x-3">
          <div className="flex flex-col">
            <Label>State</Label>
            <Input
              {...register("state")}
              className="h-[50px]"
              placeholder="enter your state"
              type="text"
            />
            {errors.state?.message && (
              <ParaTypo className="text-sm text-red-500">
                {errors.state?.message}
              </ParaTypo>
            )}
          </div>
          <div className="flex flex-col">
            <Label>District</Label>
            <Input
              {...register("district")}
              className="h-[50px]"
              placeholder="enter your district"
              type="text"
            />
            {errors.district?.message && (
              <ParaTypo className="text-sm text-red-500">
                {errors.district?.message}
              </ParaTypo>
            )}
          </div>
          <div className="flex flex-col">
            <Label>City</Label>
            <Input
              {...register("city")}
              className="h-[50px]"
              placeholder="enter your city"
              type="text"
            />
            {errors.city?.message && (
              <ParaTypo className="text-sm text-red-500">
                {errors.city?.message}
              </ParaTypo>
            )}
          </div>
          <div className="flex flex-col">
            <Label>Tole</Label>
            <Input
              {...register("tole")}
              className="h-[50px]"
              placeholder="enter your tole"
              type="text"
            />
            {errors.tole?.message && (
              <ParaTypo className="text-sm text-red-500">
                {errors.tole?.message}
              </ParaTypo>
            )}
          </div>
          <div className="flex flex-col">
            <Label>Ward No.</Label>
            <Input
              {...register("ward")}
              className="h-[50px]"
              placeholder="enter your ward"
              type="text"
            />
            {errors.ward?.message && (
              <ParaTypo className="text-sm text-red-500">
                {errors.ward?.message}
              </ParaTypo>
            )}
          </div>
          <div className="flex flex-col">
            <Label>Near By</Label>
            <Input
              {...register("nearBy")}
              className="h-[50px]"
              placeholder="enter near by"
              type="text"
            />
            {errors.nearBy?.message && (
              <ParaTypo className="text-sm text-red-500">
                {errors.nearBy?.message}
              </ParaTypo>
            )}
          </div>
          <div className="flex flex-col">
            <Label>Set as a default address</Label>
            <Select {...register("defaultAddress")} className="h-[50px]">
              <Option defaultChecked value="">
                Select One
              </Option>
              <Option value="deleveryandbilling">Delevery & Billing</Option>
              <Option value="delevery">Delevery</Option>
              <Option value="billing">Billing</Option>
            </Select>

            {errors.defaultAddress?.message && (
              <ParaTypo className="text-sm text-red-500">
                {errors.defaultAddress?.message}
              </ParaTypo>
            )}
          </div>
          <div className="flex flex-col">
            <Label>Exact Location</Label>
            <ParaTypo
              onClick={clickHandler}
              className={` text-white py-3 text-sm  select-none rounded-md flex items-center px-4 gap-x-2 ${loc.lat > 0 || loc.lng > 0 ? "cursor-not-allowed bg-green-500" : "cursor-pointer bg-blue-500"}`}
            >
              {loading
                ? "loading......"
                : loc.lat > 0 || loc.lng > 0
                  ? "Location Got Successfully"
                  : `Click here to get exact location `}
              {(loc.lat < 0 || loc.lng < 0) && <MapPinIcon />}
            </ParaTypo>
            {errors.location?.message && (
              <ParaTypo className="text-sm text-red-500">
                {errors.location?.message as string}
              </ParaTypo>
            )}
          </div>
        </div>
        <Button className="bg-red-500 text-center text-white py-3 w-full rounded-md my-4">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddAddressForm;
