import { useEffect, useState } from "react";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import Label from "../../../../components/common/Label";
import Input from "../../../../components/common/Input";
import Select from "../../../../components/common/Select";
import Option from "../../../../components/common/Option";
import Button from "../../../../components/common/Button";
import AddAddressForm, { AddressForm } from "../page/AddAddressForm";
import { useForm } from "react-hook-form";
import { UserVefifyZodSchema } from "../../../zodschema/user";
import { zodResolver } from "@hookform/resolvers/zod";
import ParaTypo from "../../../../components/common/ParaTypo";
import { z } from "zod";
import { useAuth, UserType } from "../../../../context/AuthProvider";

export type VerifyForm = z.infer<typeof UserVefifyZodSchema>;
export type VerifyInfoTyype = VerifyForm & AddressForm;

const VerifyForm = () => {
  const [open, setOpen] = useState<boolean>(false);
  let { data } = useAuth();
  data = data as UserType;
  const [verifyInfo, setVerifyInfo] = useState<
    VerifyInfoTyype | VerifyForm | AddressForm
  >({
    fullname: "",
    email: "",
    mobile: "",
    dob: "",
    state: "",
    district: "",
    tole: "",
    city: "",
    gender: "",
    defaultAddress: "",
    nearBy: "",
    ward: "",
    location: {
      lat: 0,
      lng: 0,
    },
  });

  console.log(data);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<VerifyForm>({
    resolver: zodResolver(UserVefifyZodSchema),
    defaultValues: {
      fullname: data.fullname,
      email: data.email,
      dob: "2000-01-05",
      gender: "male",
      mobile: "9876543210",
    },
  });

  const onSubmit = (data: VerifyForm) => {
    if (!data) {
      setOpen(false);
      return;
    } else {
      setOpen(true);
      setVerifyInfo((prv) => ({ ...prv, ...data }));
      return;
    }
  };

  useEffect(() => {
    if (data) {
      reset({
        fullname: data.fullname,
        email: data.email,
      });
    }
  }, [data]);

  return (
    <div className="w-full max-w-[800px] shadow-md rounded-md p-2 m-2">
      <HeadingTypo className="text-3xl my-3">Verify Yourself</HeadingTypo>
      <form
        className="grid grid-cols-2 gap-4 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <Label className="flex flex-col">Full Name</Label>
          <Input
            disabled
            {...register("fullname")}
            className="w-full h-[50px]"
            placeholder="enter your full name"
            type="text"
          />
          {errors.fullname?.message && (
            <ParaTypo className="text-sm text-red-500">
              {errors.fullname?.message}
            </ParaTypo>
          )}
        </div>
        <div>
          <Label className="flex flex-col">Email Address</Label>
          <Input
            disabled
            {...register("email")}
            className="w-full h-[50px]"
            placeholder="enter your email address"
            type="text"
          />
          {errors.email?.message && (
            <ParaTypo className="text-sm text-red-500">
              {errors.email?.message}
            </ParaTypo>
          )}
        </div>
        <div>
          <Label className="flex flex-col">Mobile</Label>
          <Input
            {...register("mobile")}
            className="w-full h-[50px]"
            placeholder="enter your phone nbr"
            type="text"
          />
          {errors.mobile?.message && (
            <ParaTypo className="text-sm text-red-500">
              {errors.mobile?.message}
            </ParaTypo>
          )}
        </div>
        <div>
          <Label className="flex flex-col">DOB</Label>
          <Input
            {...register("dob")}
            className="w-full h-[50px]"
            placeholder="enter your DOB"
            type="text"
          />
          {errors.dob?.message && (
            <ParaTypo className="text-sm text-red-500">
              {errors.dob?.message}
            </ParaTypo>
          )}
        </div>
        <div>
          <Label className="flex flex-col">Gender</Label>
          <Select {...register("gender")} className="w-full h-[50px]">
            <Option defaultChecked value="">
              Select Gender
            </Option>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
          {errors.gender?.message && (
            <ParaTypo className="text-sm text-red-500">
              {errors.gender?.message}
            </ParaTypo>
          )}
        </div>
        <div className="my-7 flex flex-col gap-2 justify-center sm:items-start">
          <Button className="border-2 bg-blue-500 rounded-md text-white px-3 py-2">
            {open ? "Submit" : "Verify Address"}
          </Button>
        </div>
      </form>
      {open && <AddAddressForm verifyInfo={verifyInfo} setOpen={setOpen} />}
    </div>
  );
};

export default VerifyForm;
