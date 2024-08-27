import { Send } from "lucide-react";
import Input from "../../../../components/common/Input";
import MessageCard, { message } from "../../../popup/MessageCard";
import { useState } from "react";
import { useContextProvider } from "../../../../context/Context";

const Message = () => {
  const [text, setText] = useState("");
  const { socketServer } = useContextProvider();

  const clickHandler = () => {
    console.log("click");
    console.log(socketServer);
  };
  console.log(text);
  return (
    <div className="flex w-full border-2 gap-x-2">
      <div className="flex flex-col gap-y-1 w-full max-w-[300px] border-2 border-gray-500 rounded-md p-2">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-x-2 border-2 border-gray-500 rounded-md p-2 cursor-pointer"
            >
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <p className="text-sm font-semibold">Madan Panipuri Pasal</p>
                <p>online</p>
              </div>
            </div>
          ))}
      </div>
      <div className="w-full border-2 border-gray-500 rounded-md p-2">
        <div className="flex flex-col gap-y-2 h-[400px] overflow-y-auto ">
          {message.map((msg, index) => (
            <MessageCard
              key={index}
              message={msg.message}
              messageType={msg.messageType}
              user={msg.user}
            />
          ))}
        </div>
        <div className="flex items-center gap-x-2">
          <Input
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Enter your message"
            className="w-full my-2"
            type="text"
          />
          <Send onClick={clickHandler} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Message;
