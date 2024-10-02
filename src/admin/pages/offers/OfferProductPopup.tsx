import React from "react";
import Popup from "reactjs-popup";
import ParaTypo from "../../../components/common/ParaTypo";

type PopupProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product: any[];
  flag: string
  coupenCode?:string
};

const OfferProductPopup = ({ open,flag, setOpen,coupenCode, product }: PopupProps) => {
  return (
    <div>
      <Popup open={open} onClose={() => setOpen(false)}>
        <ParaTypo className="text-center text-3xl mb-4">
          {flag=='offer'?'Offers Products List':'Coupen Code'}
        </ParaTypo>
      {flag=='offer'?product &&
        product?.map((ele: any) => {
          return (
            <img
              title={ele.name}
              className="h-[60px] border-2 rounded-md m-3 p-1 inline-block cursor-pointer"
              src={ele.images[0]}
              alt=""
            />
          );
        }) :
          <ParaTypo className="text-center text-5xl text-red-500 font-semibold">'{ coupenCode}'</ParaTypo>}
      </Popup>
    </div>
  );
};

export default OfferProductPopup;
