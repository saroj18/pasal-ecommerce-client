import Popup from "reactjs-popup";
import { useContextProvider } from "../../context/Context";
import ParaTypo from "../../components/common/ParaTypo";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export const VerifyPopup = () => {
  const { setVerifyPopup } = useContextProvider();
  return (
    <Popup
      contentStyle={{
        width: "100%",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        borderRadius: "7px",
      }}
      open={true}
      onClose={() => setVerifyPopup(false)}
    >
      <ParaTypo className="text-2xl font-semibold text-center">
        Please Verify Yourself & Address First!!!
      </ParaTypo>
      <ShieldCheck size={200} strokeWidth={0.7} color="green" />
      <Link
        to={"/account/verify"}
        className="bg-red-500 text-white p-3 rounded-md "
      >
        Go to Verify Page
      </Link>
    </Popup>
  );
};
