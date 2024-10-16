import { useState } from "react";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import ParaTypo from "../../../../components/common/ParaTypo";
import Button from "../../../../components/common/Button";
import ReviewHistory from "./ReviewHistory";
import Popup from "reactjs-popup";
import ReviewForm from "./ReviewForm";
import { useQuery } from "../../../../hooks/useQuery";
import Shimmer from "../../../../components/common/Shimmer";
import { ReviewType } from "../../../../types/ReviewType";

const ReviewComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [reviewInfo, setReviewInfo] = useState<ReviewType>();
  const { data, loading } = useQuery<ReviewType[]>("/review/reviewneed");
  console.log(data);
  const clickHandler = (info: ReviewType) => {
    setOpen(true);
    setReviewInfo(info);
  };
  return (
    <>
      {loading ? (
        <Shimmer height="150px" count={3} shape="rectange" />
      ) : (
        (data as ReviewType[])?.map((ele: ReviewType) => {
          return (
            <div
              key={ele._id}
              className=" rounded-md shadow-md border-2 border-neutral-200 p-2 my-4"
            >
              <HeadingTypo>{ele.product[0].addedBy.shopName}</HeadingTypo>
              <ParaTypo className="text-sm text-gray-400 my-2">
                Purchase on {new Date(ele.createdAt).toDateString()}
              </ParaTypo>
              <div className="flex w-fit items-center gap-x-4 border-2 border-gray-200 rounded-md p-3">
                <div className="flex gap-x-4 flex-col md:flex-row md:items-center">
                  <img
                    className="w-[100px]"
                    src={ele.product[0].images[0]}
                    alt=""
                  />
                  <ParaTypo className="opacity-75">
                    {ele.product[0].name}
                  </ParaTypo>
                </div>
                <Button
                  onClick={() => clickHandler(ele)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Review
                </Button>
              </div>
            </div>
          );
        })
      )}
      <Popup
        contentStyle={{ width: "100%", maxWidth: "700px", padding: "0px" }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <ReviewForm reviewInfo={reviewInfo} setOpen={setOpen} />
      </Popup>
    </>
  );
};

const MyReview = () => {
  const [reviewSwitch, setReviewSwitch] = useState<string>("review");

  const reviewHandler = () => {
    setReviewSwitch("review");
  };

  const reviewHistoryHandler = () => {
    setReviewSwitch("reviewhistory");
  };
  return (
    <div className="w-full p-2">
      <HeadingTypo className="my-5 text-2xl">My Reviews</HeadingTypo>
      <div className="flex gap-x-5 border-2 border-gray-100 rounded-md p-2 shadow-md">
        <ParaTypo
          onClick={reviewHandler}
          className={`cursor-pointer ${reviewSwitch == "review" ? "text-red-500" : ""}`}
        >
          To Review
        </ParaTypo>
        <ParaTypo
          onClick={reviewHistoryHandler}
          className={`cursor-pointer ${reviewSwitch == "reviewhistory" ? "text-red-500" : ""}`}
        >
          History
        </ParaTypo>
      </div>

      {reviewSwitch == "review" && <ReviewComponent />}
      {reviewSwitch == "reviewhistory" && <ReviewHistory />}
    </div>
  );
};

export default MyReview;
