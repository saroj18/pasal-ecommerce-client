import UserCard from "./UserCard";
import { useQuery } from "../../../../hooks/useQuery";
import React, { useState } from "react";
import ParaTypo from "../../../../components/common/ParaTypo";
import Shimmer from "../../../../components/common/Shimmer";
import HeadingTypo from "../../../../components/common/HeadingTypo";
import { ChatType } from "../../../../types/ChatType";

const Sidebar = ({
  setId,
  setClient,
}: {
  setId: React.Dispatch<React.SetStateAction<string>>;
  setClient: React.Dispatch<React.SetStateAction<string>>;
}) => {
  let { data, loading } = useQuery<ChatType[]>("/chats/getallcustomer");
  // data=data as ChatType
  const [current, setCurrent] = useState("");
  console.log(data);

  const clickhandler = (id: string, fullname: string, currentId: string) => {
    setId(id);
    setClient(fullname);
    setCurrent(currentId);
  };

  return (
    <aside className="w-full max-w-[300px] pt-3 border-2 rounded-md p-1">
      <ParaTypo className="text-2xl font-semibold text-center">
        Customers
      </ParaTypo>
      {loading ? (
        <Shimmer count={8} height="60px" shape="rectange" />
      ) : data && (data as ChatType[])?.length < 1 ? (
        <HeadingTypo className="text-center font-semibold text-xl">
          0 User Found
        </HeadingTypo>
      ) : (
        (data as ChatType[])?.map((ele: ChatType) => {
          return (
            <UserCard
              className={ele._id == current ? "bg-green-200" : ""}
              key={ele._id}
              onClick={() =>
                clickhandler(ele.sender._id, ele.sender.fullname, ele._id)
              }
              info={ele}
              sender={ele.sender.fullname}
              receiver={ele.receiver.fullname}
              lastmessage={ele.recentMsg}
            />
          );
        })
      )}
    </aside>
  );
};

export default Sidebar;
