import { useState } from "react";
import Button from "../../../components/common/Button";
import ParaTypo from "../../../components/common/ParaTypo";
import { useMutation } from "../../../hooks/useMutation";
import OfferProductPopup from "./OfferProductPopup";

const OffersCard = ({
  data,
  refetch,
  flag,
}: {
  data: any;
  flag: string;
  refetch: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const { mutate } = useMutation();

  const clickHandler = (id: string) => {
    if (flag == "offer") {
      mutate(`/offers?id=${id}`, "DELETE", {}, refetch);
    } else {
      mutate(`/coupen?id=${id}`, "DELETE", {}, refetch);
    }
  };
  console.log(data);
  return (
    <div
      onClick={() => setOpen(true)}
      className="border-2 border-gray-500 rounded-md p-2 flex justify-center flex-col items-center cursor-pointer"
    >
      <ParaTypo className="text-4xl font-semibold">
        {data?.name || data?.coupenName}
      </ParaTypo>
      <ParaTypo className="text-xl font-semibold text-green-500">
        {data?.coupenDiscount ?? null}%
      </ParaTypo>
      <img
        className="w-[200px]"
        src={
          flag == "offer"
            ? "https://png.pngtree.com/png-clipart/20230119/original/pngtree-creative-special-offer-banner-shape-tag-png-image_8922232.png"
            : "https://static.vecteezy.com/system/resources/previews/012/872/323/original/discount-coupon-3d-png.png"
        }
        alt=""
      />
      <Button
        onClick={(e) => {
          clickHandler(data?._id), e.stopPropagation();
        }}
        className="w-full"
      >
        {flag == "offer" ? "Delete Offer" : "Delete Coupen"}
      </Button>

      <OfferProductPopup
        coupenCode={data.coupenCode}
        flag={flag}
        product={data?.product}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default OffersCard;
