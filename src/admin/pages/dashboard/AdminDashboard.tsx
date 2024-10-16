import AmountCard from "../../../seller/dashboard/components/AmountCard";
import HeadingTypo from "../../../components/common/HeadingTypo";
import MostSellingProductCard from "../../../seller/dashboard/components/MostSellingProductCard";
import { useQuery } from "../../../hooks/useQuery";
import Shimmer from "../../../components/common/Shimmer";
import { LogOut } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AdminDashboardDataType } from "../../../types/AdminDashboardDataType";
import { TopListType } from "../../../types/TopListType";

const AdminDashboard = () => {
  const navigate = useNavigate();

  let { data, loading: dashBoardLoading } =
    useQuery<AdminDashboardDataType>("/admin/dashboard");
  data = data as AdminDashboardDataType;

  const { data: topList, loading: listLoading } =
    useQuery<TopListType>("/admin/toplist");
  const logOutHandler = async () => {
    try {
      const resp = await fetch(import.meta.env.VITE_HOST + "/user/logout", {
        method: "GET",
        credentials: "include",
      });
      const data = await resp.json();
      if (data.success) {
        toast.success(data.message);
        navigate("/", { replace: true });
        window.location.reload();
      } else {
        toast.error(data.error);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full py-2">
      <div className="flex justify-between items-center">
        <HeadingTypo className="my-6 text-3xl">
          Welcome,To Dashboard
        </HeadingTypo>
        <LogOut onClick={logOutHandler} className="cursor-pointer" />
      </div>
      {dashBoardLoading ? (
        <Shimmer shape="rectange" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 justify-between gap-3">
          <AmountCard
            heading="Total Visitors"
            amount={data && data.totalVisitors}
            className="grow bg-green-100"
          />
          <AmountCard
            heading="Total Vendors"
            amount={data && data.totalVendors}
            className="grow bg-green-100"
          />
          {/* <AmountCard
          heading="Total DeleveryBoy"
          amount={data && data.toatlDeleveryPerson}
          className="grow bg-red-100"
        /> */}
          <AmountCard
            heading="Total Category"
            amount={data && data.totalCategory}
            className="grow bg-orange-100"
          />
          <AmountCard
            heading="Total Products"
            amount={data && data?.totalProducts}
            className="grow bg-blue-100"
          />
          <AmountCard
            heading="Total User"
            amount={data && data.totalUser}
            className="grow bg-purple-100"
          />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-xs sm:text-base gap-3 mt-6">
        <div className=" border-2 border-gray-300 shadow-md p-2 rounded-md bg-white">
          <HeadingTypo className="text-xl my-3 font-bold">
            Top Vender
          </HeadingTypo>
          <div className="max-h-[400px] overflow-y-scroll">
            {listLoading ? (
              <Shimmer count={5} height="50px" shape="rectange" />
            ) : (
              (topList as TopListType)?.topVender?.map((ele: any) => {
                return (
                  <MostSellingProductCard
                    key={ele._id}
                    name={ele?.addedBy[0].shopName}
                    id={ele?.addedBy[0]._id}
                    result={`${ele.totalSale} Sales`}
                    image={ele?.addedBy[0].shopImage}
                  />
                );
              })
            )}
          </div>
        </div>
        <div className=" border-2 border-gray-300 shadow-md p-2 rounded-md bg-white">
          <HeadingTypo className="text-xl my-3 font-bold">
            Top Selling Products
          </HeadingTypo>
          <div className="max-h-[400px] overflow-y-scroll">
            {listLoading ? (
              <Shimmer count={5} height="50px" shape="rectange" />
            ) : (
              (topList as TopListType)?.topSellingProduct?.map((ele: any) => {
                return (
                  <MostSellingProductCard
                    key={ele._id}
                    name={ele.name}
                    id={ele?._id}
                    result={`${ele.totalSale} Sales`}
                    image={ele.images[0]}
                  />
                );
              })
            )}
          </div>
        </div>
        <div className=" border-2 border-gray-300 shadow-md p-2 rounded-md bg-white">
          <HeadingTypo className="text-xl my-3 font-bold">
            Top Selling Category
          </HeadingTypo>
          <div className="max-h-[400px] overflow-y-scroll">
            {listLoading ? (
              <Shimmer count={5} height="50px" shape="rectange" />
            ) : (
              (topList as TopListType | null)?.topCategory?.map((ele: any) => {
                return (
                  <MostSellingProductCard
                    key={ele._id}
                    name={ele._id}
                    // id={ele?._id}
                    result={`${ele.totalSale} Sales`}
                  />
                );
              })
            )}
          </div>
        </div>
        <div className=" border-2 border-gray-300 shadow-md p-2 rounded-md bg-white">
          <HeadingTypo className="text-xl my-3 font-bold">
            Top Expensive Products
          </HeadingTypo>
          <div className="max-h-[400px] overflow-y-scroll">
            {listLoading ? (
              <Shimmer count={5} height="50px" shape="rectange" />
            ) : (
              (topList as TopListType | null)?.topExpensiveProduct?.map(
                (ele: any) => {
                  return (
                    <MostSellingProductCard
                      key={ele._id}
                      name={ele.name}
                      id={ele?._id}
                      result={`Rs ${ele.priceAfterDiscount}`}
                      image={ele.images[0]}
                    />
                  );
                },
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
