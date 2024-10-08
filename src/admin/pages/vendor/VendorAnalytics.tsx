import React, { useEffect, useState } from "react";
import HeadingTypo from "../../../components/common/HeadingTypo";
import Select from "../../../components/common/Select";
import Option from "../../../components/common/Option";
import { ArrowLeftIcon } from "lucide-react";
import SetChart from "./SetChart";
import { useMutation } from "../../../hooks/useMutation";
import {  useSearchParams } from "react-router-dom";
import Shimmer from "../../../components/common/Shimmer";

const VendorAnalytics = () => {
  const [time, setTime] = useState("24hrs");
  const { mutate, data: graphData, loading } = useMutation<any>();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    mutate(
      `/seller/sellerdashboardgraph?id=${searchParams.get("id")}`,
      "POST",
      { time },
    );
  }, [time]);

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTime(e.target.value);
  };

  return (
    <div>
      <ArrowLeftIcon
        onClick={() => history.back()}
        className="my-3 cursor-pointer"
      />
      <div className="flex flex-col lg:flex-row items-center justify-between py-4 ">
        <HeadingTypo className="text-2xl font-semibold">Analytics</HeadingTypo>
        <Select onChange={changeHandler}>
          <Option defaultChecked value="24hrs">
            Last 24 Hrs.
          </Option>
          <Option value="7days">Last 7 Days</Option>
          <Option value="1month">Last 1 Month</Option>
          <Option value="6months">Last 6 Months</Option>
          <Option value="1year">Last 1 Year</Option>
        </Select>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center justify-between ">
        {loading ? (
          <Shimmer height="370px" shape="rectange" />
        ) : (
          <SetChart
            graphData={graphData?.totalVisitors}
            color="rgba(154, 0, 0, 0.5)"
            className="w-full"
            chartType="line"
            label="visitors"
            heading="Total Visitors"
          />
        )}
        {loading ? (
          <Shimmer height="370px" shape="rectange" />
        ) : (
          <SetChart
            graphData={graphData?.graphData}
            color=""
            className="w-full"
            chartType="line"
            label="order"
            heading="Total Order"
          />
        )}
        {loading ? (
          <Shimmer height="370px" shape="rectange" />
        ) : (
          <SetChart
            graphData={graphData?.revenueData}
            color="rgba(255, 0, 0, 0.5)"
            className="w-full"
            chartType="line"
            label="amount"
            heading="Total Revenue"
          />
        )}
        {loading ? (
          <Shimmer height="370px" shape="rectange" />
        ) : (
          <SetChart
            graphData={graphData?.totalReview}
            color="rgba(0, 0, 0, 0.5)"
            className="w-full"
            chartType="line"
            label="reviews"
            heading="Total Review"
          />
        )}
      </div>
    </div>
  );
};

export default VendorAnalytics;
