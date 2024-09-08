import { useEffect, useState } from "react";
import FilterBar from "../../../seller/dashboard/components/FilterBar";
import SetChart from "../vendor/SetChart";
import { useMutation } from "../../../utils/useMutation";
import Shimmer from "../../../components/common/Shimmer";

const AdminAnalytics = () => {
  const [time, setTime] = useState("24hrs");
  const { mutate, data, loading } = useMutation<any>();

  useEffect(() => {
    if (time) {
      mutate("/admin/graphdata", "POST", { time });
    }
  }, [time]);

  return (
    <div>
      <FilterBar setTime={setTime} className="my-3" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* <SetChart heading="Vendor Register" chartType="line" />
        <SetChart heading="Sales" chartType="line" />
        <SetChart heading="Products Add" chartType="line" />
        <SetChart heading="Orders" chartType="line" />
        <SetChart heading="Revenue" chartType="line" />
        <SetChart heading="Delivery-Person" chartType="line" /> */}
        {loading ? (
          <Shimmer height="350px" shape="rectange" />
        ) : (
          <SetChart
            graphData={data?.visitorData}
            color="rgba(255,0,0,0.5)"
            className="w-full"
            chartType="line"
            label="visitors"
            heading="Total Visitors"
          />
        )}
        {loading ? (
          <Shimmer height="350px" shape="rectange" />
        ) : (
          <SetChart
            graphData={data?.revenueData}
            color=""
            className="w-full"
            chartType="line"
            label="revenue"
            heading="Total Revenue(Rs)"
          />
        )}
        {loading ? (
          <Shimmer height="350px" shape="rectange" />
        ) : (
          <SetChart
            graphData={data?.ordersData}
            color="rgba(144, 238, 144, 0.5)"
            className="w-full"
            chartType="line"
            label="order"
            heading="Total Orders"
          />
        )}
        {loading ? (
          <Shimmer height="350px" shape="rectange" />
        ) : (
          <SetChart
            graphData={data?.vendorData}
            color="rgba(29, 200, 193, 0.5)"
            className="w-full"
            chartType="line"
            label="vendor"
            heading="Total Vendor"
          />
        )}
        {loading ? (
          <Shimmer height="350px" shape="rectange" />
        ) : (
          <SetChart
            graphData={data?.productsData}
            color="rgba(10, 250, 203, 0.5)"
            className="w-full"
            chartType="line"
            label="product"
            heading="Total Products"
          />
        )}
        {loading ? (
          <Shimmer height="350px" shape="rectange" />
        ) : (
          <SetChart
            graphData={data?.userData}
            color="rgba(150, 150, 100, 0.5)"
            className="w-full"
            chartType="line"
            label="user"
            heading="Total Users"
          />
        )}
      </div>
    </div>
  );
};

export default AdminAnalytics;
