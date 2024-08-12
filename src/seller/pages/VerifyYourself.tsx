import { useState } from "react";
import HeadingTypo from "../../components/common/HeadingTypo";
import Button from "../../components/common/Button";
import ShopDetails from "../components/ShopDetails";
import OtpVerification from "../components/OtpVerification";
import ThanksForChoosingUs from "../components/ThanksForChoosingUs";

const VerifyYourself = () => {
  const [formStage, setFormStage] = useState<number>(0);

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
          </div>
        </div>
      )}
      {/* {formStage === 3 && <ThanksForChoosingUs />} */}
    </div>
  );
};

export default VerifyYourself;
