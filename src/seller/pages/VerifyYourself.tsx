import { useState } from "react";
import HeadingTypo from "../../components/common/HeadingTypo";
import Button from "../../components/common/Button";
import ShopDetails from "../components/ShopDetails";
import OtpVerification from "../components/OtpVerification";
import ThanksForChoosingUs from "../components/ThanksForChoosingUs";

const VerifyYourself = () => {
  const [formStage, setFormStage] = useState<number>(0);

  const prvHandler = () => {
    if (formStage > 0) {
      setFormStage(formStage - 1);
    }
  };

  const nextHandler = () => {
    if (formStage < 1) {
      setFormStage(formStage + 1);
    }
  };
  return (
    <div>
      {formStage < 3 && (
        <div className="bg-gray-200 h-screen">
          <HeadingTypo className="text-center text-3xl py-4 font-semibold ">
            Let's Verify Your Shop
          </HeadingTypo>
          <div className="w-full bg-white max-w-[900px] rounded-md p-4 mx-auto">
            <ShopDetails />
            {false && <OtpVerification />}
            <div className="flex justify-between mt-5">
              <Button
                onClick={prvHandler}
                className="bg-blue-500 text-white px-6 rounded-md  py-1 text-2xl"
              >
                Prv
              </Button>
              <Button
                onClick={nextHandler}
                className="bg-red-500 text-white px-6 rounded-md  py-1  text-2xl"
              >
                {formStage === 2 ? "Submit" : "Next"}
              </Button>
            </div>
          </div>
        </div>
      )}
      {formStage === 3 && <ThanksForChoosingUs />}
    </div>
  );
};

export default VerifyYourself;
