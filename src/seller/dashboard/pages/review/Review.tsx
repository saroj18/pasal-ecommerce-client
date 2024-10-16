import { useState } from "react";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import ParaTypo from "../../../../components/common/ParaTypo";
import Popup from "reactjs-popup";
import { X } from "lucide-react";
import { useQuery } from "../../../../hooks/useQuery";
import Shimmer from "../../../../components/common/Shimmer";
import { ReviewType } from "../../../../types/ReviewType";

const Review = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [info, setInfo] = useState<any>();
  const { data, loading } = useQuery<ReviewType[]>("/review/myreview");

  const clickHandler = (data: any) => {
    setOpen(!open);
    setInfo(data);
  };
  return (
    <div className="overflow-auto">
      <div className="flex justify-between flex-col md:flex-row sticky left-0 top-0">
        <div className="w-full max-w-fit mx-auto md:m-0">
          <HeadingTypo className="text-3xl">Reviews</HeadingTypo>
          <ParaTypo className="opacity-75 text-[16px]">
            Your's all products review
          </ParaTypo>
        </div>
        {/* <SearchBox className="w-full md:max-w-[45%] lg:max-w-[30%]" /> */}
      </div>
      {loading ? <Shimmer height="60px" count={8} shape="rectange" /> : null}
      <div>
        {(data as ReviewType[])?.length < 1 ? (
          <HeadingTypo className="text-center font-semibold text-xl">
            0 Review Found
          </HeadingTypo>
        ) : (
          <table className="w-full text-sm md:text-base text-center mt-5 bg-white shadow-md">
            <thead>
              <tr className="sticky top-0 left-0 bg-white border-t-2">
                <th className="p-4">Product</th>
                <th className="p-4">Product ID</th>
                <th className="p-4">Review By</th>
                <th className="p-4">Review Date</th>
                <th className="p-4">Review Time</th>
                <th className="p-4">Message</th>
                <th className="p-4">Star</th>
                <th className="p-4">Like</th>
                <th className="p-4">Dislike</th>
              </tr>
            </thead>
            <tbody>
              {(data as ReviewType[])?.map((ele: any) => {
                return (
                  <tr
                    onClick={() => clickHandler(ele)}
                    key={ele._id}
                    className="border-b-2 border-t-2 cursor-pointer "
                  >
                    <td
                      title={ele.product.name}
                      className="p-2 flex flex-col items-center justify-center gap-x-2"
                    >
                      <img
                        className="w-[60px] border-2 border-gray-300 shadow-md rounded-md p-1"
                        src={ele.product.images[0]}
                      />
                      {ele.product.name.slice(0, 20)}...
                    </td>
                    <td title={ele.product._id} className="p-2">
                      {ele.product._id.slice(15)}
                    </td>
                    <td className="p-2">{ele.user.fullname}</td>
                    <td className="p-2">
                      {new Date(ele.createdAt).toDateString()}
                    </td>
                    <td className="p-2">
                      {new Date(ele.createdAt).toLocaleTimeString()}
                    </td>

                    <td className="p-2 text-red-500">
                      {ele.reviewMessage.slice(0, 30)}...
                    </td>
                    <td className="p-2">{ele.reviewStar}</td>
                    <td className="p-2">30</td>
                    <td className="p-2">5</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <Popup open={open} onClose={() => setOpen(false)}>
        <div className="w-full p-3  ">
          <HeadingTypo className="text-3xl my-2">Review</HeadingTypo>
          <ParaTypo className="font-semibold text-red-500">
            {info?.product.name}
          </ParaTypo>
          <ParaTypo className="font-bold my-2">
            By {info?.user.fullname}
          </ParaTypo>
          <div className="border-2 border-gray-500 rounded-md p-2">
            <img
              className="h-[100px] rounded-md"
              src={info?.product.images[0]}
              alt=""
            />
            <ParaTypo className="text-[16px] my-2">
              {info?.reviewMessage}
            </ParaTypo>
          </div>
        </div>
        <X
          className="absolute left-[96%] cursor-pointer top-3"
          onClick={() => setOpen(false)}
        />
      </Popup>
    </div>
  );
};

export default Review;
