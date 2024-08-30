import FilterBar from "../../components/FilterBar";
import AmountCard from "../../components/AmountCard";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import jacket from "../../../../assets/jacket.png";
import SetChart from "../../../../admin/pages/vendor/SetChart";
import { useQuery } from "../../../../utils/useQuery";

const Dashboard = () => {
  const { data } = useQuery<any>("/seller/sellerdashboard");
  const { data: orders } = useQuery<any>("/order/sellerorder");
  console.log(data);
  return (
    <div className="w-full  font-poppins">
      <FilterBar />
      <div className="flex flex-wrap gap-4 mt-5">
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
          amount={"Rs " + data?.products.totalSaleAmount}
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
      </div>
      {/* <div className="flex gap-x-3 mt-6 "> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 mt-6">
        <SetChart className="w-full" chartType="line" heading="Total Visit" />
        <SetChart className="w-full" chartType="line" heading="Total Order" />
      </div>
      {/* <div className="border-2 border-gray-500 rounded-md p-3 w-full max-w-[40%] max-h-[350px] overflow-y-scroll">
          <HeadingTypo className="text-xl my-3">
            Most Selling Products
          </HeadingTypo>
          <div className="shadow-md">
            <MostSellingProductCard name="Primuem Leather Jacket" id="873209472392349832" result="123 Sale" />
            <MostSellingProductCard name="Primuem Leather Jacket" id="873209472392349832" result="123 Sale" />
            <MostSellingProductCard name="Primuem Leather Jacket" id="873209472392349832" result="123 Sale" />
            <MostSellingProductCard name="Primuem Leather Jacket" id="873209472392349832" result="123 Sale" />
          </div>
        </div> */}
      {/* </div> */}
      <HeadingTypo className="text-2xl my-8">Recent Pending Orders</HeadingTypo>
      <div className="overflow-auto">
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
              orders.map((ele:any) => {
                return <tr key={ele._id} className="border-b-2 border-t-2 ">
                  <td className="p-2 flex items-center justify-center gap-x-2 flex-col">
                    {" "}
                    <img
                      className="w-[60px] border-2 border-gray-300 shadow-md rounded-md p-1"
                      src={ele.orderProducts.images[0]}
                    />{" "}
                    {ele.orderProducts.name}
                  </td>
                  <td className="p-2">{ele.customer[0].fullname}</td>
                  <td title={ele._id} className="p-2">{ele._id.slice(15)}</td>
                  <td title={new Date(ele.createdAt).toLocaleTimeString()} className="p-2">{new Date(ele.createdAt).toDateString()}</td>
                  <td className="p-2">Rs {ele.orderProducts.priceAfterDiscount}</td>
                  <td className="p-2">{ele.orderProducts.discount}%</td>
                </tr>;
              })}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
