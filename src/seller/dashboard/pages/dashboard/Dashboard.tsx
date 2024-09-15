import FilterBar from "../../components/FilterBar";
import AmountCard from "../../components/AmountCard";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import SetChart from "../../../../admin/pages/vendor/SetChart";
import { useQuery } from "../../../../hooks/useQuery";
import MostSellingProductCard from "../../components/MostSellingProductCard";
import { useEffect, useState } from "react";
import { useMutation } from "../../../../hooks/useMutation";
import Shimmer from "../../../../components/common/Shimmer";

const Dashboard = () => {
  const [time, setTime] = useState("24hrs");
  const { data, loading: dashBoardLoading } = useQuery<any>(
    "/seller/sellerdashboard",
  );
  const { data: orders, loading: orderLoading } =
    useQuery<any>("/order/sellerorder");
  const { data: bestSellingProducts, loading: bestSellingProductLoading } =
    useQuery<any>("/product/bestselling");
  const { mutate, data: graphData, loading: graphLoading } = useMutation<any>();

  useEffect(() => {
    mutate("/seller/sellerdashboardgraph", "POST", { time });
  }, [time]);

  return (
    <div className="w-full  font-poppins">
      <FilterBar time={time} setTime={setTime} />
      <div className="flex flex-wrap gap-4 mt-5">
        {dashBoardLoading ? (
          <Shimmer shape="rectange" />
        ) : (
          <>
            <AmountCard
              className={"grow bg-green-50"}
              heading="Total Products"
              amount={data?.products.totalProducts}
            />
            <AmountCard
              className={"grow bg-red-50"}
              heading="Total Orders"
              amount={data?.orders.totalOrders}
            />
            <AmountCard
              className={"grow bg-gray-50"}
              heading="Total Sale"
              amount={data?.products.totalSale}
            />
            <AmountCard
              className={"grow bg-orange-50"}
              heading="Total SaleAmount"
              amount={"Rs " + data?.orders.totalSaleAmount}
            />
            <AmountCard
              className={"grow bg-blue-50"}
              heading="Total Brands"
              amount={data?.products.totalBrands}
            />
            <AmountCard
              className={"grow bg-blue-50"}
              heading="Total Category"
              amount={data?.products.totalCategory}
            />
          </>
        )}
      </div>
      {/* <div className="flex gap-x-3 mt-6 "> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 mt-6">
        {graphLoading ? (
          <Shimmer height="350px" shape="rectange" />
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
        {graphLoading ? (
          <Shimmer height="350px" shape="rectange" />
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
        {graphLoading ? (
          <Shimmer height="350px" shape="rectange" />
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
        {graphLoading ? (
          <Shimmer height="350px" shape="rectange" />
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-4">
        <div className="border-2 border-gray-500 rounded-md p-3  max-h-[350px] overflow-y-scroll">
          <HeadingTypo className="text-xl my-3">
            Most Selling Products
          </HeadingTypo>
          <div className="shadow-md">
            {bestSellingProductLoading ? (
              <Shimmer height="70px" count={3} shape="rectange" />
            ) : (
              bestSellingProducts?.product.map((ele: any) => {
                return (
                  <MostSellingProductCard
                    key={ele._id}
                    name={ele.name}
                    id={ele._id}
                    result={`${ele.totalSale} Sale`}
                    image={ele.images[0]}
                  />
                );
              })
            )}
          </div>
        </div>
        <div className="border-2 border-gray-500 rounded-md p-3  max-h-[350px] overflow-y-scroll">
          <HeadingTypo className="text-xl my-3">Top Category</HeadingTypo>
          <div className="shadow-md">
            {bestSellingProductLoading ? (
              <Shimmer height="70px" count={3} shape="rectange" />
            ) : (
              bestSellingProducts?.topCategory.map((ele: any) => {
                return (
                  <MostSellingProductCard
                    key={ele._id}
                    name={ele._id}
                    id={ele._id}
                    result={`${ele.totalSale} Sale`}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>

      {orders?.length > 0 && (
        <>
          <HeadingTypo className="text-2xl my-8">
            Recent Pending Orders
          </HeadingTypo>
          <div className="overflow-auto">
            {orderLoading ? (
              <Shimmer shape="rectange" height="150px" count={4} />
            ) : (
              <table className="w-full text-center text-xs sm:text-base">
                <thead>
                  <tr>
                    <th className="p-4">Product</th>
                    <th className="p-4">Customer</th>
                    <th className="p-4">Order ID</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Discount</th>
                  </tr>
                </thead>
                <tbody>
                  {orders &&
                    orders.map((ele: any) => {
                      return (
                        <tr key={ele._id} className="border-b-2 border-t-2 ">
                          <td className="p-2 flex items-center justify-center gap-x-2 flex-col">
                            {" "}
                            <img
                              className="w-[60px] border-2 border-gray-300 shadow-md rounded-md p-1"
                              src={ele.orderProducts.images[0]}
                            />{" "}
                            {ele.orderProducts.name}
                          </td>
                          <td className="p-2">{ele.customer[0].fullname}</td>
                          <td title={ele._id} className="p-2">
                            {ele._id.slice(15)}
                          </td>
                          <td
                            title={new Date(ele.createdAt).toLocaleTimeString()}
                            className="p-2"
                          >
                            {new Date(ele.createdAt).toDateString()}
                          </td>
                          <td className="p-2">
                            Rs {ele.orderProducts.priceAfterDiscount}
                          </td>
                          <td className="p-2">{ele.orderProducts.discount}%</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
