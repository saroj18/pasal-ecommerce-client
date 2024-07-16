import React from "react";
import NotificationCard from "../../components/NotificationCard";
import HeadingTypo from "../../../../components/common/HeadingTypo";

const Notification = () => {
  return (
    <div>
      <HeadingTypo className="text-3xl my-3">Notifications</HeadingTypo>
      <div>
        {Array(20)
          .fill(null)
          .map((_, index) => {
            return <NotificationCard key={index} heading="Review" />;
          })}
      </div>
    </div>
  );
};

export default Notification;
