import  { useCallback } from "react";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import ParaTypo from "../../../../components/common/ParaTypo";
import { StarIcon } from "lucide-react";
import { ReviewComponent } from "../page/ReviewHistory";

type ProductDescriptionProps = {
  description: string;
  features: string[];
  review: any;
};

const ProductDescription = ({
  description,
  features,
  review,
}: ProductDescriptionProps) => {
  console.log(review);

  const averageRating = useCallback(() => {
    let total = 0;
    review?.forEach((ele: any) => {
      total += ele.reviewStar ?? 0;
    });
    return Math.round(total / review?.length);
  }, [review]);

  return (
    <div>
      <HeadingTypo className="text-2xl font-semibold mb-3 underline">
        Product Description
      </HeadingTypo>
      <ParaTypo className="opacity-75">{description}</ParaTypo>

      <HeadingTypo className="text-2xl font-semibold my-5 underline">
        Specification
      </HeadingTypo>
      <ul className="list-disc ml-9 text-xl">
        {features?.map((feature, index) => {
          return <li key={index}>{feature}</li>;
        })}
      </ul>
      <HeadingTypo className="text-2xl font-semibold my-5 underline">
        Rating and Reviews
      </HeadingTypo>
      <div className="flex items-center gap-x-10 w-full max-w-[70%] mb-3">
        <div>
          <ParaTypo className="text-4xl font-semibold">
            {averageRating()}/5
          </ParaTypo>
          <div className="flex items-center my-3">
            {Array(5)
              .fill(null)
              .map((_, index) => {
                return (
                  <StarIcon
                    key={index}
                    color={index < averageRating() ? "orange" : "black"}
                    fill={index < averageRating() ? "orange" : "transparent"}
                  />
                );
              })}
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row w-full gap-x-5">
          <div>
            {Array(5)
              .fill(null)
              .map((_, index) => {
                return (
                  <div key={index} className="flex items-center gap-x-2">
                    {Array(index + 1)
                      .fill(null)
                      .map((_, index) => {
                        return (
                          <StarIcon key={index} fill="orange" color="orange" />
                        );
                      })}
                  </div>
                );
              })}
          </div>
          <div className=" w-full sm:max-w-[40%]">
            {Array(5)
              .fill(null)
              .map((_, index) => {
                return (
                  <div className="w-full items-center flex gap-3" key={index}>
                    <div className="w-[90%] my-1 h-[10px] border-2 border-orange-500 rounded-md  ">
                      <div
                        className={`w-[${index * 10}%] h-[8px] rounded-md bg-orange-500`}
                      ></div>
                    </div>
                    <span>123</span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <hr />
      {review &&
        review.map((ele: any, index: number) => {
          return (
            Object.keys(ele).length > 0 && (
              <ReviewComponent key={index} flag={false} info={ele} />
            )
          );
        })}
      <hr />
    </div>
  );
};

export default ProductDescription;
