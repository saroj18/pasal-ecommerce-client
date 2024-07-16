import React from "react";
import HeadingTypo from "../../components/common/HeadingTypo";
import ParaTypo from "../../components/common/ParaTypo";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto w-fit flex flex-col justify-center items-center mt-[12%]">
      <HeadingTypo className="text-8xl font-bold">
        404 Page Not Found
      </HeadingTypo>
      <ParaTypo className="my-7">
        Your visited page not found. You may go home page.
      </ParaTypo>
      <Button
        className="bg-red-500 text-white py-2 px-4 rounded-md"
        onClick={() => navigate("/")}
      >
        Back to Home Page
      </Button>
    </div>
  );
};

export default Error;
