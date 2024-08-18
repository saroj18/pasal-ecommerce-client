import { useQuery } from "../../../../utils/useQuery";
import { useParams } from "react-router-dom";
import { ReviewComponent } from "../../../../customer/pages/account/page/ReviewHistory";

const Reviews = () => {
  const { id } = useParams();
  const { data } = useQuery<any>(`/review/vendorreview?id=${id}`);
  return (
    <div>
      {data &&
        data.map((ele: any, index: number) => {
          return <ReviewComponent key={index} info={ele} flag={false} />;
        })}
    </div>
  );
};

export default Reviews;
