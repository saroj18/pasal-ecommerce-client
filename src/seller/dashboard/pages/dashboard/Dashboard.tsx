import FilterBar from "../../components/FilterBar";
import AmountCard from "../../components/AmountCard";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import jacket from "../../../../assets/jacket.png";
import SetChart from "../../../../admin/pages/vendor/SetChart";

const Dashboard = () => {
  return (
    <div className="w-full  font-poppins">
      <FilterBar />
      <div className="flex flex-wrap gap-4 mt-5">
        <AmountCard
          className={"grow bg-green-50"}
          heading="Estimate Revenue"
          amount="$2345"
          percent="20%"
          actAmount="+2453"
        />
        <AmountCard
          className={"grow bg-red-50"}
          heading="Estimate Revenue"
          amount="$2345"
          percent="20%"
          actAmount="+2453"
        />
        <AmountCard
          className={"grow bg-gray-50"}
          heading="Estimate Revenue"
          amount="$2345"
          percent="20%"
          actAmount="+2453"
        />
        <AmountCard
          className={"grow bg-orange-50"}
          heading="Estimate Revenue"
          amount="$2345"
          percent="20%"
          actAmount="+2453"
        />
        <AmountCard
          className={"grow bg-blue-50"}
          heading="Estimate Revenue"
          amount="$2345"
          percent="20%"
          actAmount="+2453"
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
      <HeadingTypo className="text-2xl my-8">Recent Orders</HeadingTypo>
      <div className="overflow-auto">
        <table className="w-full text-center text-xs sm:text-base">
          <thead>
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Order ID</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-t-2 ">
              <td className="p-2 flex items-center justify-center gap-x-2 flex-col">
                {" "}
                <img
                  className="w-[60px] border-2 border-gray-300 shadow-md rounded-md p-1"
                  src={jacket}
                />{" "}
                Leather Jacket
              </td>
              <td className="p-2">John Doe</td>
              <td className="p-2">4892308534997</td>
              <td className="p-2">27 June 2035</td>
              <td className="p-2">Pending</td>
            </tr>
            <tr className="border-b-2 border-t-2 ">
              <td className="p-2 flex items-center justify-center gap-x-2 flex-col">
                {" "}
                <img
                  className="w-[60px] border-2 border-gray-300 shadow-md rounded-md p-1"
                  src={jacket}
                />{" "}
                Leather Jacket
              </td>
              <td className="p-2">John Doe</td>
              <td className="p-2">4892308534997</td>
              <td className="p-2">27 June 2035</td>
              <td className="p-2">Pending</td>
            </tr>
            <tr className="border-b-2 border-t-2 ">
              <td className="p-2 flex items-center justify-center gap-x-2 flex-col">
                {" "}
                <img
                  className="w-[60px] border-2 border-gray-300 shadow-md rounded-md p-1"
                  src={jacket}
                />{" "}
                Leather Jacket
              </td>
              <td className="p-2">John Doe</td>
              <td className="p-2">4892308534997</td>
              <td className="p-2">27 June 2035</td>
              <td className="p-2">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
