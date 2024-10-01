import ParaTypo from "../../../../components/common/ParaTypo";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import Button from "../../../../components/common/Button";
import { Link } from "react-router-dom";
import Shimmer from "../../../../components/common/Shimmer";
import { useAuth, UserType } from "../../../../context/AuthProvider";

type detailsProps = {
  heading: string;
  data: string;
};

const DetailsBox = ({ heading, data }: detailsProps) => {
  return (
    <div>
      <ParaTypo className="font-semibold">{heading}</ParaTypo>
      <ParaTypo className="text-gray-500">{data}</ParaTypo>
    </div>
  );
};

const MyProfile = () => {
  let { data, loading } = useAuth();
  data = data as UserType;
  console.log(data);
  return (
    <div className="w-full p-4 bg-gray-50">
      <HeadingTypo className="text-2xl my-3">My Profile</HeadingTypo>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3  gap-y-8 mb-10">
        {loading ? (
          <Shimmer height="50px" shape="rectange" />
        ) : (
          <DetailsBox heading="Full Name" data={data?.fullname} />
        )}
        {loading ? (
          <Shimmer height="50px" shape="rectange" />
        ) : (
          <DetailsBox heading="Email Address" data={data?.email} />
        )}
        {loading ? (
          <Shimmer height="50px" shape="rectange" />
        ) : (
          <DetailsBox
            heading="Mobile"
            data={data?.mobile ? data?.mobile : "verify first"}
          />
        )}
        {loading ? (
          <Shimmer height="50px" shape="rectange" />
        ) : (
          <DetailsBox
            heading="BirthDay"
            data={data?.dob ? data?.mobile : "verify first"}
          />
        )}
        {loading ? (
          <Shimmer height="50px" shape="rectange" />
        ) : (
          <DetailsBox
            heading="Gender"
            data={data?.gender ? data?.mobile : "verify first"}
          />
        )}
      </div>
      <Link to={"/account/editprofile"}>
        <Button className="bg-blue-500 rounded-md text-white px-8 mx-2 py-3 w-full sm:w-fit">
          Edit Profile
        </Button>
      </Link>
    </div>
  );
};

export default MyProfile;
