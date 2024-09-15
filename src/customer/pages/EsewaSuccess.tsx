import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useMutation } from "../../hooks/useMutation";

const EsewaSuccess = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("data"));
  const { mutate } = useMutation();

  useEffect(() => {
    mutate("/payment/esewa-status", "POST", {
      token: searchParams.get("data"),
    });
  }, []);
  return (
    <div className="w-full max-w-[500px] gap-y-8 mt-10 rounded-md border-2 border-gray-500 mx-auto p-4 flex items-center flex-col">
      <h1 className="text-5xl">Payment Successfull</h1>
      <Link to={"/myorder"} className="bg-red-500 rounded-md text-white p-4">
        View Your Order
      </Link>
    </div>
  );
};

export default EsewaSuccess;
