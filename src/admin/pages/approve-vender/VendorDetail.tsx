import HeadingTypo from "../../../components/common/HeadingTypo";
import { ArrowLeft } from "lucide-react";
import DetailsCard from "../vendor/DetailsCard";
import TextArea from "../../../components/common/TextArea";
import Button from "../../../components/common/Button";
import Map from "./Map";
import { useQuery } from "../../../hooks/useQuery";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useMutation } from "../../../hooks/useMutation";
import { shopDataFormatter } from "../../../utils/shopDataFormatter";
import { ShopType } from "../../../types/ShopType";

const VendorDetail = () => {
  const { id } = useParams();
  const [report, setReport] = useState("");
  const [shop, setShop] = useState<{ [key: string]: string }>();
  let { data, refetch } = useQuery<ShopType>(`/vendor/${id}`);
  data=data as ShopType
  const { mutate } = useMutation();

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReport(e.target.value);
  };

  const clickHandler = (param: string) => {
    mutate(
      "/vendor/verify",
      "POST",
      { flag: param, shopId: id, report },
      refetch,
    );
  };

  useEffect(() => {
    if (data) {
      const shopInfo = shopDataFormatter(data);
      setShop(shopInfo);
    }
  }, [data]);

  return (
    <div>
      <ArrowLeft
        onClick={() => history.back()}
        className="mt-3 cursor-pointer"
      />
      <HeadingTypo className="text-3xl font-semibold my-4">
        Vendor Details
      </HeadingTypo>
      <div>
        <div className="flex flex-wrap justify-between gap-3 my-6 border-2 border-gray-300 p-2 shadow-md rounded-md">
          {shop &&
            Object.entries(shop).map(([key, value]: [string, string]) => {
              return <DetailsCard key={key} heading={key} value={value} />;
            })}
        </div>
      </div>
      <div>
        <HeadingTypo className="md:text-3xl text-xl my-3 font-semibold">
          Shop Image and Map
        </HeadingTypo>
        <div className="border-2 border-gray-500 rounded-md p-2 flex h-[700px] md:h-[500px] flex-col md:flex-row w-full gap-4">
          <img className="md:w-[50%]" src={data?.shopImage} alt="" />
          <Map locationPoint={data?.location} />
        </div>
      </div>
      <div>
        <HeadingTypo className="md:text-3xl text-xl my-3 font-semibold">
          Document and Owner Photo
        </HeadingTypo>
        <div className="border-2 border-gray-500 rounded-md p-2 flex  items-center">
          <div className="w-full">
            <img
              className="max-w-[90%] h-[90%]"
              src={data?.documentImage}
              alt=""
            />
          </div>
          <div className="w-full ">
            <img className="w-full " src={data?.yourImage} alt="" />
          </div>
        </div>
      </div>
      <div>
        <TextArea
          value={report}
          onChange={changeHandler}
          className=" w-full max-w-[100%]  block h-[150px] p-2 my-4"
        />
        <div className="flex items-center justify-end gap-x-3 my-3">
          <Button
            onClick={() => clickHandler("approve")}
            className="bg-green-500 text-white px-5 text-xl py-2 rounded-md"
          >
            Approve
          </Button>
          <Button
            onClick={() => clickHandler("reject")}
            className="bg-red-500 text-white px-5 text-xl py-2 rounded-md"
          >
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VendorDetail;
