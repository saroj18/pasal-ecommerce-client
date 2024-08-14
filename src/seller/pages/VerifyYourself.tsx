import HeadingTypo from "../../components/common/HeadingTypo";
import ShopDetails from "../components/ShopDetails";
import OtpVerification from "../components/OtpVerification";

const VerifyYourself = () => {
  return (
    <div>
      <div className="bg-gray-200 h-screen">
        <HeadingTypo className="text-center text-3xl py-4 font-semibold ">
          Let's Verify Your Shop
        </HeadingTypo>
        <div className="w-full bg-white max-w-[900px] rounded-md p-4 mx-auto">
          <ShopDetails />
          {false && <OtpVerification />}
        </div>
      </div>
    </div>
  );
};

export default VerifyYourself;
