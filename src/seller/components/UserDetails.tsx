import Label from "../../components/common/Label";
import Input from "../../components/common/Input";
import Select from "../../components/common/Select";
import Option from "../../components/common/Option";
import HeadingTypo from "../../components/common/HeadingTypo";
import { SellerUserZodSchema } from "../../customer/zodschema/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ParaTypo from "../../components/common/ParaTypo";
import Button from "../../components/common/Button";

type SellerUserType = z.infer<typeof SellerUserZodSchema>;

const UserDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SellerUserType>({
    resolver: zodResolver(SellerUserZodSchema),
  });

  const onSubmit = (data: SellerUserType) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HeadingTypo className="text-center text-2xl mb-4">
        Enter Your Personal Details
      </HeadingTypo>
      <div className="flex gap-4 justify-center">
        <div className="flex flex-col grow my-2">
          <Label>Full Name</Label>
          <Input
            {...register("fullname")}
            type="text"
            className="h-[50px]"
            placeholder="Enter your fullname"
          />
          {errors.fullname?.message && (
            <ParaTypo className="text-sm text-red-500">
              {errors.fullname?.message}
            </ParaTypo>
          )}
        </div>
        <div className="flex flex-col grow my-2">
          <Label>Email</Label>
          <Input
            {...register("email")}
            type="text"
            className="h-[50px]"
            placeholder="Enter your email"
          />
          {errors.email?.message && (
            <ParaTypo className="text-sm text-red-500">
              {errors.email?.message}
            </ParaTypo>
          )}
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <div className="flex flex-col grow my-2">
          <Label>Phone</Label>
          <Input
            {...register("mobile")}
            type="text"
            className="h-[50px]"
            placeholder="Enter your phone"
          />
          {errors.mobile?.message && (
            <ParaTypo className="text-sm text-red-500">
              {errors.mobile?.message}
            </ParaTypo>
          )}
        </div>
        <div className="flex flex-col grow my-2">
          <Label>Postal Code</Label>
          <Input
            {...register("postalCode")}
            type="text"
            className="h-[50px]"
            placeholder="Enter your postal code"
          />
          {errors.postalCode?.message && (
            <ParaTypo className="text-sm text-red-500">
              {errors.postalCode?.message}
            </ParaTypo>
          )}
        </div>
      </div>
      <div className="flex gap-4 justify-center"></div>
      <div className="flex gap-x-4 justify-center items-center">
        <div className="flex flex-col grow my-2">
          <Label>DOB</Label>
          <Input
            {...register("dob")}
            type="text"
            className="h-[50px]"
            placeholder="Enter your DOB"
          />
          {errors.dob?.message && (
            <ParaTypo className="text-sm text-red-500">
              {errors.dob?.message}
            </ParaTypo>
          )}
        </div>
        <div className="flex flex-col grow">
          <Label>Gender</Label>
          <Select {...register("gender")} className="h-[50px]">
            <Option defaultChecked value="">
              Select Gender
            </Option>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
          {errors.gender?.message && (
            <ParaTypo className="text-sm text-red-500">
              {errors.gender?.message}
            </ParaTypo>
          )}
        </div>
      </div>
      <Button hidden className="w-full bg-red-500 text-white">Add</Button>
    </form>
  );
};

export default UserDetails;
