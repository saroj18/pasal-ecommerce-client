import ParaTypo from "../../../components/common/ParaTypo";
import Shimmer from "../../../components/common/Shimmer";
import { useQuery } from "../../../utils/useQuery";

const Info = () => {
  const id = window.location.pathname.split("/")[3];
  const { data,loading } = useQuery<any>(`/user/${id}`);
  console.log(data);

  return (
    <>
    {loading?<Shimmer shape="rectange"/>:
      <div className="my-8 grid grid-cols-2  gap-y-4 mx-auto max-w-[750px]">
      <div className="flex items-center gap-x-4">
        <ParaTypo className="font-bold">Id:</ParaTypo>
        <ParaTypo>{data?._id}</ParaTypo>
      </div>
      <div className="flex items-center gap-x-4">
        <ParaTypo className="font-bold">Name:</ParaTypo>
        <ParaTypo>{data?.fullname}</ParaTypo>
      </div>
      <div className="flex items-center gap-x-4">
        <ParaTypo className="font-bold">Email:</ParaTypo>
        <ParaTypo>{data?.email}</ParaTypo>
      </div>
      <div className="flex items-center gap-x-4">
        <ParaTypo className="font-bold">Gender:</ParaTypo>
        <ParaTypo>{data?.gender}</ParaTypo>
      </div>
      <div className="flex items-center gap-x-4">
        <ParaTypo className="font-bold">DOB:</ParaTypo>
        <ParaTypo>{data?.dob}</ParaTypo>
      </div>
      <div className="flex items-center gap-x-4">
        <ParaTypo className="font-bold">Phone:</ParaTypo>
        <ParaTypo>{data?.mobile}</ParaTypo>
      </div>
      <div className="flex items-center gap-x-4">
        <ParaTypo className="font-bold">Username:</ParaTypo>
        <ParaTypo>{data?.username}</ParaTypo>
      </div>
      <div className="flex items-center gap-x-4">
        <ParaTypo className="font-bold">SignupAs:</ParaTypo>
        <ParaTypo>{data?.signUpAs}</ParaTypo>
      </div>
      <div className="flex items-center gap-x-4">
        <ParaTypo className="font-bold">Current Role:</ParaTypo>
        <ParaTypo>{data?.role}</ParaTypo>
      </div>
      <div className="flex items-center gap-x-4">
        <ParaTypo className="font-bold">Joined On:</ParaTypo>
        <ParaTypo>{new Date(data?.createdAt).toDateString()}</ParaTypo>
      </div>
      <div className="flex items-center gap-x-4">
        <ParaTypo className="font-bold">Verify:</ParaTypo>
        <ParaTypo>{data?.verify.toString()}</ParaTypo>
      </div>
      <div className="flex items-center gap-x-4">
        <ParaTypo className="font-bold">ShopVerify:</ParaTypo>
        <ParaTypo>{data?.shopVerify.toString()}</ParaTypo>
      </div>
      <div className="flex items-center gap-x-4">
        <ParaTypo className="font-bold">State:</ParaTypo>
        <ParaTypo>{data?.address?.state}</ParaTypo>
      </div>
      <div className="flex items-center gap-x-4">
        <ParaTypo className="font-bold">City:</ParaTypo>
        <ParaTypo>{data?.address?.city}</ParaTypo>
      </div>
      <div className="flex items-center gap-x-4">
        <ParaTypo className="font-bold">District:</ParaTypo>
        <ParaTypo>{data?.address?.district}</ParaTypo>
      </div>
      <div className="flex items-center gap-x-4">
        <ParaTypo className="font-bold">NearBy:</ParaTypo>
        <ParaTypo>{data?.address?.nearBy}</ParaTypo>
      </div>
    </div>
    }
    </>
  );
};

export default Info;
