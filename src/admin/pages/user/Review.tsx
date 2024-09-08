import Shimmer from "../../../components/common/Shimmer";
import { ReviewComponent } from "../../../customer/pages/account/page/ReviewHistory";
import { useQuery } from "../../../utils/useQuery";

const Review = () => {
  const id = window.location.pathname.split("/")[3];
  const { data,loading } = useQuery<any>("/review/" + id);
  return (
    <div>
      {loading?<Shimmer count={4} shape="rectange"/>:
        data?.map((ele: any, index: number) => {
          return <ReviewComponent key={index} info={ele} flag={false} />;
        })}
    </div>
  );
};

export default Review;
