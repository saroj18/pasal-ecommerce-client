import {  useEffect, useState } from "react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import MostSellingProductCard from "../../../seller/dashboard/components/MostSellingProductCard";
import Button from "../../../components/common/Button";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import DetailsCard from "./DetailsCard";
import { useQuery } from "../../../utils/useQuery";
import { shopDataFormatter } from "../../../utils/shopDataFormatter";

const VendorDetails = () => {
  const navigate = useNavigate();
  const [vendor, setVendor] = useState<any>();
  const [shop, setShop] = useState<{ [key: string]: string }>({});
  const { id } = useParams();
  const { data } = useQuery(`/vendor/${id}`);

  useEffect(() => {
    if (data) {
      setVendor(data);
      const shopInfo = shopDataFormatter(data);
      setShop(shopInfo);
    }
  }, [data]);

  return (
    <div className="md:p-5">
      <ArrowLeftIcon
        onClick={() => history.back()}
        className="my-3 cursor-pointer"
      />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <HeadingTypo className="text-2xl font-semibold">
          {vendor?.shopName} Shop
        </HeadingTypo>
        <Button
          onClick={() => navigate("/admin/vendor/analytics")}
          className="bg-orange-500 px-4 py-2 rounded-md text-white"
        >
          View Analytics
        </Button>
      </div>
      <div className="flex flex-wrap justify-between gap-3 my-6">
        {Object.entries(shop).map(([key, value]: [string, string]) => {
          return <DetailsCard key={key} heading={key} value={value} />;
        })}
      </div>
      <div>
        <HeadingTypo className="text-3xl font-semibold">
          Top Products
        </HeadingTypo>
        <div className="grid grid-cols-1 text-xs md:text-xl md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
          <div className=" border-2 border-gray-300 shadow-md p-2 rounded-md bg-white">
            <HeadingTypo className="text-xl my-3 font-bold">
              Top Selling Products
            </HeadingTypo>
            <div className="max-h-[400px] overflow-y-scroll">
              <MostSellingProductCard
                name="Leather Jackent"
                id="8768979798779"
                result="123 Sales"
              />
              <MostSellingProductCard
                name="Leather Jackent"
                id="8768979798779"
                result="123 Sales"
              />
              <MostSellingProductCard
                name="Leather Jackent"
                id="8768979798779"
                result="123 Sales"
              />
              <MostSellingProductCard
                name="Leather Jackent"
                id="8768979798779"
                result="123 Sales"
              />
            </div>
          </div>

          <div className=" border-2 border-gray-300 shadow-md p-2 rounded-md bg-white">
            <HeadingTypo className="text-xl my-3 font-bold">
              Top Profit Product
            </HeadingTypo>
            <div className="max-h-[400px] overflow-y-scroll">
              <MostSellingProductCard
                name="1 Plate Momo"
                id="8768979798779"
                result="$2000"
              />
              <MostSellingProductCard
                name="1 Plate Momo"
                id="8768979798779"
                result="$2000"
              />
              <MostSellingProductCard
                name="1 Plate Momo"
                id="8768979798779"
                result="$2000"
              />
              <MostSellingProductCard
                name="1 Plate Momo"
                id="8768979798779"
                result="$2000"
              />
            </div>
          </div>

          <div className=" border-2 border-gray-300 shadow-md p-2 rounded-md bg-white">
            <HeadingTypo className="text-xl my-3 font-bold">
              Top Expensive Products
            </HeadingTypo>
            <div className="max-h-[400px] overflow-y-scroll">
              <MostSellingProductCard
                name="Diamond Ring"
                id="8768979798779"
                result="$3243 Per/ps"
              />
              <MostSellingProductCard
                name="Diamond Ring"
                id="8768979798779"
                result="$3243 Per/ps"
              />
              <MostSellingProductCard
                name="Diamond Ring"
                id="8768979798779"
                result="$3243 Per/ps"
              />
              <MostSellingProductCard
                name="Diamond Ring"
                id="8768979798779"
                result="$3243 Per/ps"
              />
            </div>
          </div>
          <div className=" border-2 border-gray-300 shadow-md p-2 rounded-md bg-white">
            <HeadingTypo className="text-xl my-3 font-bold">
              Top Payment Method
            </HeadingTypo>
            <div className="max-h-[400px] overflow-y-scroll">
              <MostSellingProductCard
                name="Khalti"
                id="8768979798779"
                result="44 Trans"
              />
              <MostSellingProductCard
                name="Esewa"
                id="8768979798779"
                result="12 Trans"
              />
              <MostSellingProductCard
                name="IME Pay"
                id="8768979798779"
                result="4 Trans"
              />
              <MostSellingProductCard
                name="COD"
                id="8768979798779"
                result="42 Trans"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
