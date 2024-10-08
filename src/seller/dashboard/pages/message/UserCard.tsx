import ParaTypo from "../../../../components/common/ParaTypo";
import { MouseEventHandler } from "react";
import male from "../../../../assets/male.webp";
import female from "../../../../assets/female.webp";
import { twMerge } from "tailwind-merge";

const UserCard = ({
  onClick,
  info,
  sender,
  lastmessage,
  className,
}: {
  onClick: MouseEventHandler<HTMLDivElement>;
  info: any;
  sender: string;
  receiver: string;
  lastmessage: string;
  className: string;
}) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        "flex gap-x-2 p-2 border-2 rounded-md my-2 cursor-pointer bg-gray-100 shadow-md",
        className,
      )}
    >
      <img
        className="w-[40px] h-[40px] rounded-full"
        src={info.sender.gender === "male" ? male : female}
        alt=""
      />
      <div>
        <ParaTypo className="text-base">{sender}</ParaTypo>
        <ParaTypo className="text-sm">
          Msg:<span className="font-semibold">{lastmessage}</span>
        </ParaTypo>
      </div>
    </div>
  );
};

export default UserCard;
