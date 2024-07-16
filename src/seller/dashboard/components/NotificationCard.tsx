import React from "react";
import ParaTypo from "../../../components/common/ParaTypo";
import HeadingTypo from "../../../components/common/HeadingTypo";
import { AlarmClock } from "lucide-react";

type notificationProps = {
  heading: string;
};

const NotificationCard = ({ heading }: notificationProps) => {
  return (
    <div className="border-2 border-gray-200 shadow-md rounded-md mt-3 p-3">
      <div className="flex justify-between items-center">
        <ParaTypo className="bg-green-500 text-white rounded-md text-sm px-3 py-[3px]">
          {heading}
        </ParaTypo>
        <ParaTypo className="opacity-75 flex items-center gap-x-2 text-sm">
          <AlarmClock /> 24 Nov 2021 at 01:11 PM
        </ParaTypo>
      </div>
      <HeadingTypo className="font-semibold mt-2 text-sm md:text-base">
        By Saroj Aryal
      </HeadingTypo>
      <ParaTypo className="opacity-75 text-sm md:text-base">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
        harum nostrum ?
      </ParaTypo>
    </div>
  );
};

export default NotificationCard;
