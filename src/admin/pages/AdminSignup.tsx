import logo from "../../assets/logo.jpg";
import ParaTypo from "../../components/common/ParaTypo";
import Label from "../../components/common/Label";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSignUpZodSchema } from "../../customer/zodschema/user";
import { useMutation } from "../../utils/useMutation";
import { FormInput } from "../../customer/pages/Signup";

const AdminSignup = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(UserSignUpZodSchema),
  });

  const onSubmit = (info: FormInput) => {
    console.log(info);
    const { email, password, fullname, username } = info;
    mutate("/user/signup", "POST", {
      email,
      password,
      fullname,
      username,
      role: "admin",
    });
  };
  return (
    <div className="h-screen bg-gray-100 px-3">
      <div
        className="flex items-center w-full justify-around md:max-w-[60%] mx-auto border-2 border-gray-300 shadow-md
    "
      >
        <div className=" border-r-2 border-gray-200  w-full lg:max-w-[50%] p-2 ">
          <div className="my-10">
            <img
              className="w-[25%] mx-auto mix-blend-multiply"
              src={logo}
              alt=""
            />
            <ParaTypo className="text-center">Welcome To</ParaTypo>
            <ParaTypo className="text-center text-4xl text-blue-500 my-2">
              Admin Account
            </ParaTypo>
          </div>
          <form
            action=""
            className="flex flex-col gap-y-3 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col ">
              <Label className="text-xl">Username</Label>
              <Input
                {...register("username")}
                className="h-[50px] w-full"
                type="text"
                placeholder="enter your username"
              />
              {errors.username?.message && (
                <ParaTypo className="text-sm text-red-500">
                  {errors.username?.message}
                </ParaTypo>
              )}
            </div>
            <div className="flex flex-col ">
              <Label className="text-xl">Name</Label>
              <Input
                {...register("fullname")}
                className="h-[50px] w-full"
                type="text"
                placeholder="enter your name"
              />
              {errors.fullname?.message && (
                <ParaTypo className="text-sm text-red-500">
                  {errors.fullname?.message}
                </ParaTypo>
              )}
            </div>
            <div className="flex flex-col ">
              <Label className="text-xl">email</Label>
              <Input
                {...register("email")}
                className="h-[50px] w-full"
                type="text"
                placeholder="enter your email"
              />
              {errors.email?.message && (
                <ParaTypo className="text-sm text-red-500">
                  {errors.email?.message}
                </ParaTypo>
              )}
            </div>
            <div className="flex flex-col ">
              <Label className="text-xl">Password</Label>
              <Input
                {...register("password")}
                className="h-[50px] w-full"
                type="text"
                placeholder="enter your password"
              />
              {errors.password?.message && (
                <ParaTypo className="text-sm text-red-500">
                  {errors.password?.message}
                </ParaTypo>
              )}
            </div>
            <ParaTypo className="text-right cursor-pointer">
              Forgot Password
            </ParaTypo>
            <Button className="w-full text-white bg-purple-500 py-3 rounded-md text-xl my-5">
              SignUp as a Admin
            </Button>
          </form>
          <ParaTypo
            onClick={() => navigate("/adminlogin")}
            className="text-center text-blue-500 cursor-pointer my-5"
          >
            Go to Login
          </ParaTypo>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
