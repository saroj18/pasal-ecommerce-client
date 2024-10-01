import HeadingTypo from "../../../../components/common/HeadingTypo";
import Label from "../../../../components/common/Label";
import Input from "../../../../components/common/Input";
import Select from "../../../../components/common/Select";
import Option from "../../../../components/common/Option";
import Button from "../../../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { EditProfileZodSchema } from "../../../zodschema/user";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ParaTypo from "../../../../components/common/ParaTypo";
import { useEffect } from "react";
import { useMutation } from "../../../../hooks/useMutation";
import { useAuth, UserType } from "../../../../context/AuthProvider";

type EditProfileType = z.infer<typeof EditProfileZodSchema>;

const EditProfile = () => {
  const navigate = useNavigate();
  let{data}=useAuth()
  data=data as UserType
  const { mutate } = useMutation();
  console.log(data);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<EditProfileType>({
    resolver: zodResolver(EditProfileZodSchema),
    defaultValues: {
      fullname: data?.fullname,
      email: data?.email,
      mobile: data?.mobile,
      dob: data?.dob,
    },
  });

  useEffect(() => {
    if (data) {
      setValue("email", data?.email);
      setValue("fullname", data?.fullname);
      setValue("confirmPassword", data?.oAuthLogin ? "ignore" : "");
      setValue("currentPassword", data?.oAuthLogin ? "ignore" : "");
      setValue("newPassword", data?.oAuthLogin ? "ignore" : "");
      reset({
        email: data?.email,
        fullname: data?.fullname,
        mobile: data?.mobile,
        dob: data?.dob,
        gender: data?.gender,
      });
    }
  }, [data]);

  const onSubmit = (data: EditProfileType) => {
    console.log(data);
    mutate("/user/edit", "POST", data);
  };
  return (
    <div className="w-full max-w-[800px] shadow-md rounded-md p-2 m-2">
      <HeadingTypo className="text-3xl my-3">Edit Profile</HeadingTypo>
      <form
        className="grid grid-cols-2 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <Label className="flex flex-col">Full Name</Label>
          <Input
            disabled={true}
            {...register("fullname")}
            className="w-full h-[50px]"
            placeholder="enter your fullname"
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
            disabled={true}
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
            placeholder="enter your phone number"
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
            placeholder="enter your dob"
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
        {!data?.oAuthLogin ? (
          <>
            <div>
              <Label className="flex flex-col">Current Password</Label>
              <Input
                {...register("currentPassword")}
                className="w-full h-[50px]"
                placeholder="enter your current password"
                type="password"
              />
              {errors.currentPassword?.message && (
                <ParaTypo className="text-sm text-red-500">
                  {errors.currentPassword?.message}
                </ParaTypo>
              )}
            </div>
            <div>
              <Label className="flex flex-col">New Password</Label>
              <Input
                {...register("newPassword")}
                className="w-full h-[50px]"
                placeholder="enter your new password"
                type="password"
              />
              {errors.newPassword?.message && (
                <ParaTypo className="text-sm text-red-500">
                  {errors.newPassword?.message}
                </ParaTypo>
              )}
            </div>
            <div>
              <Label className="flex flex-col">Confirm Password</Label>
              <Input
                {...register("confirmPassword")}
                className="w-full h-[50px]"
                placeholder="enter your confirm password"
                type="password"
              />
              {errors.confirmPassword?.message && (
                <ParaTypo className="text-sm text-red-500">
                  {errors.confirmPassword?.message}
                </ParaTypo>
              )}
            </div>
          </>
        ) : null}
        <div className="my-7 flex flex-col gap-2 justify-center sm:items-start">
          <Button className="border-2 bg-blue-500 rounded-md text-white px-3 py-2">
            Save Changes
          </Button>
          <Button
            onClick={() => navigate("/account/myprofile")}
            className="border-2 bg-red-500 rounded-md text-white px-3 py-2 mx-3"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
