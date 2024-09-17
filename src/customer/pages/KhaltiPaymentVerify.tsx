import { useEffect, useState } from "react";
import ParaTypo from "../../components/common/ParaTypo";
import loading from "../../assets/loading.gif";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

const KhaltiPaymentVerify = () => {
  const [verify, setVerify] = useState(false);
  const params = window.location.href.split("?")[1];
  console.log(params);
  useEffect(() => {
    async function khaltiHandler() {
      const resp = await fetch(
        import.meta.env.VITE_HOST + "/payment/khalticallback?" + params,
        {
          credentials: "include",
        },
      );
      const data = await resp.json();
      if (data.success) {
        setVerify(true);
      } else {
        setVerify(false);
      }
    }

    khaltiHandler();
  }, []);
  return (
    <div>
      {!verify ? (
        <ParaTypo className="text-center bg-red-500 text-white p-4 text-3xl">
          Please wait your payment is processing to verify
        </ParaTypo>
      ) : (
        <ParaTypo className="text-center bg-green-500 text-white p-4 text-3xl">
          Successfully verify your payment
        </ParaTypo>
      )}
      <img className="mx-auto w-[350px]" src={loading} alt="" />
      {verify && (
        <Link to={"/myorder"}>
          <Button className="mx-auto block">View My Orders</Button>
        </Link>
      )}
    </div>
  );
};

export default KhaltiPaymentVerify;
