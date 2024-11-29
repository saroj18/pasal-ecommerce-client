import { Link } from "react-router-dom";
import HeadingTypo from "../../../components/common/HeadingTypo";
import OffersCard from "./OffersCard";
import { useQuery } from "../../../hooks/useQuery";
import Shimmer from "../../../components/common/Shimmer";
import CoupenPopup from "./CoupenPopup";
import { useState } from "react";
import ParaTypo from "../../../components/common/ParaTypo";
import { OfferType } from "../../../types/OfferType";
import { CoupenType } from "../../../types/CoupenType";

const Offers = () => {
  const { data, refetch, loading } = useQuery<OfferType[]>("/offers");
  const { data: coupenData, loading: coupenLoading } =
    useQuery<CoupenType[]>("/coupen");
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <HeadingTypo className="text-2xl font-semibold my-4">
          Offer Lists
        </HeadingTypo>
        <div className="flex items-center gap-x-4">
          <Link
            to={"createoffer"}
            className="bg-green-500 text-white p-2 rounded-md cursor-pointer"
          >
            + Create Offer
          </Link>
          <ParaTypo
            onClick={() => setOpen(true)}
            className="bg-blue-500 text-white p-2 rounded-md cursor-pointer text-md"
          >
            + Create Coupen
          </ParaTypo>
          <ParaTypo
            onClick={() => setOpen(true)}
            className="bg-blue-500 text-white p-2 rounded-md cursor-pointer text-md"
          >
            + Create Crousel
          </ParaTypo>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {loading ? (
          <Shimmer height="300px" count={6} shape="rectange" />
        ) : (
          (data as OfferType[])?.map((ele: any) => {
            return (
              <OffersCard
                key={ele._id}
                flag="offer"
                data={ele}
                refetch={refetch}
              />
            );
          })
        )}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {coupenLoading ? (
          <Shimmer height="300px" count={6} shape="rectange" />
        ) : (
          (coupenData as CoupenType[])?.map((ele: any) => {
            return (
              <OffersCard
                key={ele._id}
                flag="coupen"
                data={ele}
                refetch={refetch}
              />
            );
          })
        )}
      </div>
      <CoupenPopup open={open} setOpen={setOpen} />
    </div>
  );
};

export default Offers;
