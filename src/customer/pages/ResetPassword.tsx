import ParaTypo from "../../components/common/ParaTypo";
import { useEffect, useState } from "react";
import loading from "../../assets/loading.gif";
import Label from "../../components/common/Label";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordZodSchema } from "../zodschema/user";
import { z } from "zod";
import { toast } from "react-toastify";
import { useMutation } from "../../hooks/useMutation";
import { Link } from "react-router-dom";

type InputType = z.infer<typeof ResetPasswordZodSchema>;

const ResetPassword = () => {
  const [info, setInfo] = useState<null | any>(null);
  const { mutate } = useMutation();
  useEffect(() => {
    const url = window.location.search;
    async function sendToken() {
      const resp = await fetch(
        import.meta.env.VITE_HOST + "/user/token" + url,
        {
          credentials: "include",
        },
      );
      const data = await resp.json();
      if (data?.success) {
        setInfo(data);
        toast.success(data?.message);
      } else {
        toast.error(data?.error);
      }
    }

    sendToken();
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<InputType>({
    resolver: zodResolver(ResetPasswordZodSchema),
  });

  const onSubmit = (data: InputType) => {
    console.log({ ...data, email: info?.data?.email });
    mutate("/user/resetpassword", "POST", {
      ...data,
      email: info?.data?.email,
    });
  };

  return (
    <div>
      {!info ? (
        <ParaTypo className="text-center bg-red-500 text-white p-4 text-3xl">
          Please wait your request is processing
        </ParaTypo>
      ) : (
        <ParaTypo className="text-center bg-green-500 text-white p-4 text-3xl">
          Successfully verify your token
        </ParaTypo>
      )}
      {!info && <img className="mx-auto w-[350px]" src={loading} alt="" />}
      <Link to={"/"}>
        <Button className="block mx-auto">Go to Home Page</Button>
      </Link>

      {info && (
        <form
          className="border-2 border-red-500 rounded-md p-2 max-w-lg mx-auto my-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <ParaTypo className="text-center text-2xl">
            Password Reset Form
          </ParaTypo>
          <div className="flex flex-col p-1">
            <Label>New Password</Label>
            <Input
              {...register("newPassword")}
              className="h-[50px]"
              type="text"
              placeholder="enter your new password"
            />
            {errors.newPassword?.message && (
              <ParaTypo className="text-sm text-red-500">
                {errors.newPassword?.message}
              </ParaTypo>
            )}
          </div>
          <div className="flex flex-col p-1">
            <Label>Confirm Password</Label>
            <Input
              {...register("confirmPassword")}
              className="h-[50px]"
              type="text"
              placeholder="enter your confirm password"
            />
            {errors.confirmPassword?.message && (
              <ParaTypo className="text-sm text-red-500">
                {errors.confirmPassword?.message}
              </ParaTypo>
            )}
          </div>
          <Button className="bg-green-500 px-6 mx-auto block">Submit</Button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
