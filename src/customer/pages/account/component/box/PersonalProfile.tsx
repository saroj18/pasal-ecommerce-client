import ParaTypo from "../../../../../components/common/ParaTypo";
import HeadingTypo from "../../../../../components/common/HeadingTypo";
import { Link } from "react-router-dom";
import Shimmer from "../../../../../components/common/Shimmer";

type ProfileProps={
  fullname:string
  mobile:string
  gender:string
  dob:string
  loading:boolean
}

const PersonalProfile = ({fullname,dob,gender,mobile,loading}:ProfileProps) => {
  
  return (
    <div className="grow  border-2 border-gray-300 rounded-md shadow-sm p-4 h-full">
      {loading?<Shimmer shape="rectange"/>:
        <>
        <div className="flex items-center gap-x-6 mb-4">
        <HeadingTypo className="text-xl">Personal Profile</HeadingTypo>
        <Link to={'/account/editprofile'} className="text-blue-500 cursor-pointer">Edit</Link>
      </div>
      <div className="flex flex-col gap-y-1 text-gray-500">
        <ParaTypo>Name:{fullname}</ParaTypo>
        <ParaTypo>Phone:{mobile}</ParaTypo>
        <ParaTypo>Gender:{gender}</ParaTypo>
        <ParaTypo>DOB:{dob}</ParaTypo>
      </div>
        </>
      }
    </div>
  );
};

export default PersonalProfile;
