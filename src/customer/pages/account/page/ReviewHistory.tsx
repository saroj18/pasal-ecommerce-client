import HeadingTypo from "../../../../components/common/HeadingTypo";
import ParaTypo from "../../../../components/common/ParaTypo";
import Button from "../../../../components/common/Button";
import { Star, ThumbsDown, ThumbsUp } from "lucide-react";
import { useQuery } from "../../../../hooks/useQuery";
import Shimmer from "../../../../components/common/Shimmer";

export const ReviewComponent = ({
  info,
  flag = true,
}: {
  info: any;
  flag?: boolean;
}) => {
  console.log(info);
  return (
    <div className=" rounded-md shadow-md border-2 border-neutral-200 p-2 my-4">
      <HeadingTypo>{info?.reviewProduct?.addedBy?.shopName}</HeadingTypo>
      <ParaTypo className="text-sm text-gray-400 my-2">
        Review on {new Date(info?.createdAt).toDateString()}
      </ParaTypo>
      {info?.reviewBy?.fullname && (
        <ParaTypo>Review By: {info?.reviewBy?.fullname}</ParaTypo>
      )}
      <div className="flex my-4 items-center gap-x-4 border-2 border-gray-200 rounded-md p-3">
        <img
          className="w-[100px]"
          src={info?.reviewProduct?.images?.[0]}
          alt=""
        />
        <ParaTypo>{info?.reviewProduct?.name}</ParaTypo>
      </div>
      <div className="flex justify-between items-center">
        <section className="flex items-center">
          {Array(5)
            .fill(null)
            .map((_, index) => {
              return (
                <Star
                  key={index}
                  size={17}
                  color={index < info?.reviewStar ? "orange" : "black"}
                  fill={index < info?.reviewStar ? "orange" : "transparent"}
                />
              );
            })}
        </section>
        <div className="flex gap-x-4 items-center">
          <ThumbsUp className="cursor-pointer" />
          <ThumbsDown className="cursor-pointer" />
          {flag && (
            <Button className="border-2 border-gray-500 rounded-md py-1 px-2">
              Edit
            </Button>
          )}
        </div>
      </div>
      <ParaTypo>{info?.reviewMessage}</ParaTypo>
    </div>
  );
};

const ReviewHistory = () => {
  const { data, loading } = useQuery<any>("/review");
  return (
    <div>
      {loading ? (
        <Shimmer count={2} shape="rectange" />
      ) : (
        data?.map((ele: any) => {
          return <ReviewComponent info={ele} key={ele._id} />;
        })
      )}
    </div>
  );
};

export default ReviewHistory;
