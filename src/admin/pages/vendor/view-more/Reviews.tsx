import { useQuery } from "../../../../hooks/useQuery";
import { useParams } from "react-router-dom";
import { ReviewComponent } from "../../../../customer/pages/account/page/ReviewHistory";
import Shimmer from "../../../../components/common/Shimmer";
import { ReviewType } from "../../../../types/ReviewType";

const Reviews = () => {
  const { id } = useParams();
  const { data, loading } = useQuery<ReviewType>(`/review/vendorreview?id=${id}`);
  return (
    <div>
      {loading ? (
        <Shimmer count={3} shape="rectange" />
      ) : (
        (data as ReviewType[])?.map((ele: any, index: number) => {
          return <ReviewComponent key={index} info={ele} flag={false} />;
        })
      )}
    </div>
  );
};

export default Reviews;
