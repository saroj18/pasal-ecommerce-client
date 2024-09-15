import React, { useEffect, useState } from "react";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import ParaTypo from "../../../../components/common/ParaTypo";
import { RefreshCcw, Star, X } from "lucide-react";
import TextArea from "../../../../components/common/TextArea";
import Button from "../../../../components/common/Button";
import { useMutation } from "../../../../hooks/useMutation";

type reviewFormProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  reviewInfo: any;
};

const ReviewForm = ({ setOpen, reviewInfo }: reviewFormProps) => {
  const [reviewText, setReviewText] = useState<string>("");
  const { mutate, data, response } = useMutation<any>();
  const [star, setStar] = useState(Array(5).fill(null));
  const [block, setBlock] = useState(false);
  const [starCount, setStarCount] = useState(0);

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value);
  };

  const clickHandler = (id: string, orderId: string) => {
    mutate("/review", "POST", { reviewText, id, orderId, star: starCount });
  };

  useEffect(() => {
    if (response && response.success) {
      setOpen(false);
    }
  }, [data]);

  const mouseEnterHandler = (index: number) => {
    if (block) return;
    setStar((prv) => {
      let data = [...prv];
      for (let i = 0; i <= index; i++) {
        data[i] = i;
      }
      return data;
    });
  };

  const mouseLeaveHandler = (index: number) => {
    if (block) return;
    setStar((prv) => {
      let data = [...prv];
      for (let i = 0; i <= index; i++) {
        data[i] = null;
      }
      return data;
    });
  };

  const starClickHandler = (index: number) => {
    console.log(index);
    setStar((prv) => {
      let data = [...prv];
      for (let i = 0; i <= index; i++) {
        data[i] = i;
      }
      return data;
    });
    setBlock(true);
    setStarCount(index + 1);
    console.log(star);
  };
  return (
    <div className="relative">
      <HeadingTypo className="text-center bg-orange-500 text-xl py-3 text-white">
        Give Your Review
      </HeadingTypo>
      <X
        onClick={() => setOpen(false)}
        color="white"
        className="absolute cursor-pointer left-[94%] top-2"
      />
      <ParaTypo className="text-center my-3">
        Click star to rate the product
      </ParaTypo>
      <div className="flex items-center w-fit mx-auto gap-x-5 my-6">
        {star.map((ele, index) => {
          return (
            <Star
              color={`${ele == index ? "orange" : "black"}`}
              fill={`${ele == index ? "orange" : null}`}
              key={index}
              onMouseEnter={() => mouseEnterHandler(index)}
              onMouseLeave={() => mouseLeaveHandler(index)}
              onClick={() => starClickHandler(index)}
              size={40}
              strokeWidth={1}
              className="cursor-pointer"
            />
          );
        })}
      </div>
      <RefreshCcw
        color="green"
        onClick={() => {
          setStar(Array(5).fill(null)), setBlock(false), setStarCount(0);
        }}
        className="mx-auto cursor-pointer"
      />
      <ParaTypo className="text-center">
        Share your review about this product
      </ParaTypo>
      <TextArea
        onChange={changeHandler}
        value={reviewText}
        className=" w-full max-w-[95%] mx-auto block h-[150px] p-2 my-4"
      ></TextArea>
      <div className="w-full max-w-xs  mx-auto items-center flex flex-col border-2 border-gray-500 rounded-md p-2">
        <img className="w-[20%]" src={reviewInfo.product[0].images[0]} alt="" />
        <ParaTypo
          title={reviewInfo?.product[0].name}
          className="text-xs p-2 max-w-xs sm:text-base truncate"
        >
          {reviewInfo?.product[0].name}
        </ParaTypo>
      </div>
      <Button
        onClick={() => clickHandler(reviewInfo.product[0]._id, reviewInfo._id)}
        className=" w-full max-w-[30%] block mx-auto rounded-md bg-black py-3 px-2 my-3 text-white text-sm sm:text-xl"
      >
        Submit Review
      </Button>
    </div>
  );
};

export default ReviewForm;
