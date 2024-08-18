import { ReviewComponent } from "../../../customer/pages/account/page/ReviewHistory";
import { useQuery } from "../../../utils/useQuery";

const Review = () => {
  const id = window.location.pathname.split("/")[3];
  const { data } = useQuery<any>("/review/" + id);
  return (
    <div>
      {data &&
        data.map((ele: any, index: number) => {
          return <ReviewComponent key={index} info={ele} flag={false} />;
        })}
    </div>
  );
};

export default Review;
