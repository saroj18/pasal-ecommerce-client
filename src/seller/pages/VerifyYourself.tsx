import React, { useState } from "react";
import HeadingTypo from "../../components/common/HeadingTypo";
import ParaTypo from "../../components/common/ParaTypo";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Label from "../../components/common/Label";
import Select from "../../components/common/Select";
import Option from "../../components/common/Option";
import UserDetails from "../components/UserDetails";
import ShopDetails from "../components/ShopDetails";
import OtpVerification from "../components/OtpVerification";

const VerifyYourself = () => {
  const [formStage, setFormStage] = useState<number>(0);

  const prvHandler = () => {
    if (formStage > 0) {
      setFormStage(formStage - 1);
    }
  };

  const nextHandler = () => {
    if (formStage < 2) {
      setFormStage(formStage + 1);
    }
  };
  return (
    <>
      <div className="verify flex justify-between items-center">
        <div className="w-full bg-white max-w-[600px] rounded-md p-4 mx-auto">
          {formStage===0&&<UserDetails />}
          {formStage===1&&<ShopDetails />}
          {formStage===2&&<OtpVerification />}
          <div className="flex justify-between mt-5">
            <Button
              onClick={prvHandler}
              className="bg-blue-500 text-white px-4 rounded-md  py-1 text-xl"
            >
              Prv
            </Button>
            <Button
              onClick={nextHandler}
              className="bg-red-500 text-white px-4 rounded-md  py-1 text-xl"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyYourself;
