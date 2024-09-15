import { useState } from "react";
import Button from "../../../components/common/Button";
import ParaTypo from "../../../components/common/ParaTypo";
import { useMutation } from "../../../hooks/useMutation";
import OfferProductPopup from "./OfferProductPopup";

const OffersCard = ({ data, refetch }: { data: any; refetch: () => void }) => {
  const [open, setOpen] = useState(false);
  const { mutate } = useMutation();

  const clickHandler = (id: string) => {
    mutate(`/offers?id=${id}`, "DELETE", {}, refetch);
  };
  console.log(data);
  return (
    <div
      onClick={() => setOpen(true)}
      className="border-2 border-gray-500 rounded-md p-2 flex justify-center flex-col items-center cursor-pointer"
    >
      <ParaTypo className="text-4xl font-semibold">{data?.name}</ParaTypo>
      <img
        className="w-[200px]"
        src="https://png.pngtree.com/png-clipart/20230119/original/pngtree-creative-special-offer-banner-shape-tag-png-image_8922232.png"
        alt=""
      />
      <Button
        onClick={(e) => {
          clickHandler(data?._id), e.stopPropagation();
        }}
        className="w-full"
      >
        Delete Offer
      </Button>
      {open && (
        <OfferProductPopup
          product={data?.product}
          open={open}
          setOpen={setOpen}
        />
      )}
    </div>
  );
};

export default OffersCard;
