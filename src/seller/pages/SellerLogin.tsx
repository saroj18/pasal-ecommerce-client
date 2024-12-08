import logo from "../../assets/logo.jpg";
import ParaTypo from "../../components/common/ParaTypo";
import Label from "../../components/common/Label";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLoginZodSchema } from "../../customer/zodschema/user";
import { LoginInput } from "../../customer/pages/Login";
import { useMutation } from "../../hooks/useMutation";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthProvider";

const SellerLogin = () => {
  const navigate = useNavigate();
  const { mutate, response, loading } = useMutation<any>();
  const { setData } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(UserLoginZodSchema),
    defaultValues: {
      email: "sarojaryal2003@gmail.com",
      password: "P@ssw0rd",
    },
  });

  const onSubmit = (info: LoginInput) => {
    const { email, password } = info;
    mutate("/user/login", "POST", { email, password, role: "seller" });
  };
  console.log("damm");
  useEffect(() => {
    console.log(response);
    if (response?.success && response?.data?.verify) {
      if (!response.data.shopVerify) {
        navigate("/otp");
      } else {
        setData(response.data);
        navigate("/dashboard");
      }
      localStorage.setItem("role", "SELLER");
    }
    if (response?.success && !response?.data?.verify) {
      navigate("/account/verify");
      localStorage.setItem("role", "SELLER");
    }
  }, [response]);
  return (
    <div className="bg-gray-100 h-screen px-4">
      <div
        className="flex items-center w-full justify-around  mx-auto 
    "
      >
        <div className=" rounded-md sm:max-w-[80%] md:max-w-[60%] lg:max-w-[35%]  mx-auto w-full p-2 ">
          <div className="my-10">
            <img
              className="w-[25%] mx-auto mix-blend-multiply"
              src={logo}
              alt=""
            />
            <ParaTypo className="text-center">Welcome To</ParaTypo>
            <ParaTypo className="text-center text-4xl text-blue-500 my-2">
              Seller Account
            </ParaTypo>
          </div>
          <form
            action=""
            className="flex flex-col gap-y-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col ">
              <Label className="text-xl">Email</Label>
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
            <Button
              disabled={loading}
              className="w-full text-white bg-purple-500 py-3 rounded-md text-xl my-5"
            >
              {loading ? "Processing...." : " Login as a Seller"}
            </Button>
          </form>
          <ParaTypo
            onClick={() => navigate("/sellersignup")}
            className="text-center text-blue-500 cursor-pointer my-5"
          >
            Go to SignUp
          </ParaTypo>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;
