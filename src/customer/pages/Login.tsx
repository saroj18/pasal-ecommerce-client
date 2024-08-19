import ParaTypo from "../../components/common/ParaTypo";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import HeadingTypo from "../../components/common/HeadingTypo";
import { useNavigate } from "react-router-dom";
import ecommerseImage from "../../assets/ecommerseImage.webp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLoginZodSchema } from "../zodschema/user";
import { z } from "zod";
import { useMutation } from "../../utils/useMutation";
import { useEffect } from "react";

export type LoginInput = z.infer<typeof UserLoginZodSchema>;

const Login = () => {
  const navigate = useNavigate();
  const { mutate, data } = useMutation<any>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(UserLoginZodSchema),
  });

  useEffect(() => {
    if (data) {
      navigate("/");
      localStorage.setItem("role", "CUSTOMER");
    }
  }, [data]);

  const onSubmit = (item: LoginInput) => {
    const { email, password } = item;
    mutate("/user/login", "POST", { email, password, role: "customer" });
  };
  return (
    <div className="flex justify-around mt-10 flex-col gap-4 md:flex-row lg:max-w-[75%] mx-auto">
      <img className="md:max-w-[45%] mx-auto" src={ecommerseImage} alt="" />
      <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
        <HeadingTypo className="text-2xl">Log in to Exclusive</HeadingTypo>
        <ParaTypo className="mt-2">Enter your details below</ParaTypo>
        <Input
          {...register("email")}
          type="text"
          className="border-b-2 border-b-neutral-500 border-t-0 border-l-0 border-r-0 rounded-none my-2"
          placeholder="Email"
        />
        {errors.email?.message && (
          <ParaTypo className="text-red-500 text-sm">
            {errors.email.message}
          </ParaTypo>
        )}
        <Input
          {...register("password")}
          type="password"
          className="border-b-2 border-b-neutral-500 border-t-0 border-l-0 border-r-0 rounded-none my-2"
          placeholder="Password"
        />
        {errors.password?.message && (
          <ParaTypo className="text-red-500 text-sm">
            {errors.password.message}
          </ParaTypo>
        )}
        <Button className="w-full bg-red-500 text-white py-3 rounded-md mt-5">
          Login
        </Button>
        <Button className="w-full border-neutral-500 border-2 py-3 rounded-md mt-3">
          Sign up with Google
        </Button>
        <div className="flex items-center gap-x-3 mt-4 justify-center">
          <ParaTypo className="text-center">Not account </ParaTypo>{" "}
          <span
            onClick={() => navigate("/signup")}
            className="cursor-pointer underline"
          >
            Sign up
          </span>
          <ParaTypo className="underline text-blue-500 cursor-pointer">
            forgot password
          </ParaTypo>
        </div>
      </form>
    </div>
  );
};

export default Login;
