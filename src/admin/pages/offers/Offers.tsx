import { Link } from "react-router-dom";
import HeadingTypo from "../../../components/common/HeadingTypo";
import OffersCard from "./OffersCard";
import { useQuery } from "../../../utils/useQuery";
import Shimmer from "../../../components/common/Shimmer";

const Offers = () => {
  const { data, refetch,loading } = useQuery<any>("/offers");
  return (
    <div>
      <div className="flex justify-between items-center">
        <HeadingTypo className="text-2xl font-semibold my-4">
          Offer Lists
        </HeadingTypo>
        <Link
          to={"createoffer"}
          className="bg-green-500 text-white p-2 rounded-md cursor-pointer"
        >
          + Create Offer
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {loading?<Shimmer height="300px" count={6} shape="rectange"/>:
          data?.map((ele: any) => {
            return <OffersCard key={ele._id} data={ele} refetch={refetch} />;
          })}
      </div>
    </div>
  );
};

export default Offers;
