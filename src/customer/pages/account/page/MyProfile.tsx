import ParaTypo from "../../../../components/common/ParaTypo";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import Button from "../../../../components/common/Button";
import { Link } from "react-router-dom";
import { useQuery } from "../../../../utils/useQuery";

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

  const {data} = useQuery<any>("/user");
  console.log(data)
  return (
    <div className="w-full p-4 bg-gray-50">
      <HeadingTypo className="text-2xl my-3">My Profile</HeadingTypo>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3  gap-y-8 mb-10">
        <DetailsBox heading="Full Name" data={data?.fullname} />
        <DetailsBox heading="Email Address" data={data?.email} />
        <DetailsBox heading="Mobile" data={data?.mobile ? data?.mobile : 'verify first'} />
        <DetailsBox heading="BirthDay" data={data?.dob ? data?.mobile : 'verify first'} />
        <DetailsBox heading="Gender" data={data?.gender ? data?.mobile : 'verify first'} />
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
