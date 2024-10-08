import ParaTypo from "../../components/common/ParaTypo";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import HeadingTypo from "../../components/common/HeadingTypo";
import ecommerseImage from "../../assets/ecommerseImage.webp";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSignUpZodSchema } from "../zodschema/user";
import { z } from "zod";
import { useMutation } from "../../hooks/useMutation";

export type FormInput = z.infer<typeof UserSignUpZodSchema>;

const Signup = () => {
  const navigate = useNavigate();
  // const[user,setUser]=useState({
  //   name:'',
  //   username:'',
  //   password:'',
  //   email:'',
  //   role:''
  // })
  const { mutate } = useMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(UserSignUpZodSchema),
  });

  const onSubmit: SubmitHandler<FormInput> = async (item) => {
    console.log(item);
    const { fullname, password, username, email } = item;
    mutate("/user/signup", "POST", {
      fullname,
      password,
      email,
      username,
      role: "customer",
    });
  };

  const clickHandler = async () => {
    window.location.href = import.meta.env.VITE_LOGIN_WITH_GOOGLE_URL;
  };

  return (
    <div className="flex justify-around mt-10 gap-3 flex-col w-full sm:max-w-[60%] md:max-w-[70%]  mx-auto  lg:flex-row">
      <img
        className=" w-full mx-auto md:max-w-[50%]"
        src={ecommerseImage}
        alt=""
      />
      <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
        <HeadingTypo className="text-2xl">Create an Account</HeadingTypo>
        <ParaTypo className="mt-2">Enter your details below</ParaTypo>
        <Input
          {...register("fullname")}
          type="text"
          className="border-b-2 border-b-neutral-500 border-t-0 border-l-0 border-r-0 rounded-none my-2"
          placeholder="Name"
        />
        {errors.fullname?.message && (
          <ParaTypo className="text-sm text-red-500">
            {errors.fullname?.message}
          </ParaTypo>
        )}
        <Input
          {...register("username")}
          type="text"
          className="border-b-2 border-b-neutral-500 border-t-0 border-l-0 border-r-0 rounded-none my-2"
          placeholder="Username"
        />
        {errors.username?.message && (
          <ParaTypo className="text-sm text-red-500">
            {errors.username?.message}
          </ParaTypo>
        )}
        <Input
          {...register("email")}
          type="text"
          className="border-b-2 border-b-neutral-500 border-t-0 border-l-0 border-r-0 rounded-none my-2"
          placeholder="Email"
        />
        {errors.email?.message && (
          <ParaTypo className="text-sm text-red-500">
            {errors.email?.message}
          </ParaTypo>
        )}
        <Input
          {...register("password")}
          type="password"
          className="border-b-2 border-b-neutral-500 border-t-0 border-l-0 border-r-0 rounded-none my-2"
          placeholder="Password"
        />
        {errors.password?.message && (
          <ParaTypo className="text-sm text-red-500">
            {errors.password?.message}
          </ParaTypo>
        )}
        <Button
          type="submit"
          className="w-full bg-red-500 text-white py-3 rounded-md mt-5"
        >
          Create Account
        </Button>
        <ParaTypo
          onClick={clickHandler}
          className="w-full cursor-pointer select-none py-3 rounded-md mt-3 bg-blue-500 text-center text-white"
        >
          Login with Google
        </ParaTypo>
        <div className="flex items-center gap-3 mt-4 justify-center">
          <ParaTypo className="text-center">Already have Account </ParaTypo>{" "}
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer underline"
          >
            Log In
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
