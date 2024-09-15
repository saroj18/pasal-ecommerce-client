import HeadingTypo from "../../../components/common/HeadingTypo";
import PersonalProfile from "./component/box/PersonalProfile";
import AddressBox from "./component/box/AddressBox";
import BillingAddress from "./component/box/BillingAddress";
import RecentOrders from "./component/RecentOrders";
import { useQuery } from "../../../hooks/useQuery";
import Shimmer from "../../../components/common/Shimmer";

const Account = () => {
  const { data, loading } = useQuery<any>("/user");
  console.log(">>dora");
  return (
    <div className=" p-2">
      <div className="flex items-center justify-between">
        <HeadingTypo className="my-4 text-xl sm:text-2xl">
          Manage My Account
        </HeadingTypo>
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-3 shadow-md mb-6">
        <PersonalProfile
          loading={loading}
          fullname={data?.fullname}
          mobile={data?.mobile}
          gender={data?.gender}
          dob={data?.dob}
        />
        <AddressBox
          loading={loading}
          cityWard={`${data?.address?.city}-${data?.address?.ward}`}
          mobile={data?.mobile}
          address={`${data?.address?.state} Province-${data?.address?.city}-${data?.address?.nearBy}`}
        />
        {loading ? (
          <Shimmer shape="rectange" />
        ) : (
          <BillingAddress
            loading={true}
            cityWard={`${data?.address?.city}-${data?.address?.ward}`}
            mobile={data?.mobile}
            address={`${data?.address?.state} Province-${data?.address?.city}-${data?.address?.nearBy}`}
          />
        )}
      </div>
      <RecentOrders />
    </div>
  );
};

export default Account;
