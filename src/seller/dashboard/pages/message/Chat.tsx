import { Send } from "lucide-react";
import Sidebar from "./Sidebar";
import Input from "../../../../components/common/Input";
import MessageCard, { message } from "../../../../customer/popup/MessageCard";
import ParaTypo from "../../../../components/common/ParaTypo";
import jacket from "../../../../assets/jacket.png";
import { useEffect, useRef, useState } from "react";
import { useContextProvider } from "../../../../context/Context";
import { MessageProps } from "../../../../customer/popup/ChatPopup";

const Chat = () => {
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);
  const [chat, setChat] = useState<MessageProps[]>([]);
  const { socketServer } = useContextProvider();
  const chatBodyRef = useRef<HTMLDivElement | null>(null);

  const clickhandler = () => {
    socketServer?.send(
      JSON.stringify({
        receiver: "66bb977e3d027fee0c03fd7f",
        message: text,
        type: "customer_and_vendor_chat",
      }),
    );
    const value = {
      receiver: "66bb977e3d027fee0c03fd7f",
      message: text,
      type: "customer_and_vendor_chat",
    };
    setChat((prv) => [...prv, value]);
  };

  const focusHandler = () => {
    console.log("focus");
    socketServer?.send(
      JSON.stringify({
        receiver: "66bb977e3d027fee0c03fd7f",
        message: true,
        type: "typing",
      }),
    );
  };

  const blurHandler = () => {
    socketServer?.send(
      JSON.stringify({
        receiver: "66bb977e3d027fee0c03fd7f",
        message: false,
        type: "typing",
      }),
    );
  };

  useEffect(() => {
    if (socketServer)
      socketServer.onmessage = (info) => {
        const serverData = JSON.parse(info.data);
        if (serverData.type == "typing") {
          setTyping(serverData.message);
        }
        if (serverData.type == "customer_and_vendor_chat") {
          setChat((prv) => [...prv, serverData]);
        }
      };
  }, []);

  useEffect(() => {
    if (text && chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [typing, chat]);
  return (
    <div className="flex gap-x-2">
      <Sidebar />
      <div className=" rounded-md p-1 w-full">
        <div className="flex my-3 items-center gap-x-3 bg-green-500 rounded-md p-1 text-white">
          <img className="w-[40px] h-[40px] rounded-full" src={jacket} alt="" />
          <div>
            <ParaTypo className="text-sm">Madan Panipuri Pasal</ParaTypo>
            <span>online</span>
          </div>
        </div>

        <div
          ref={chatBodyRef}
          className="flex flex-col w-full h-[550px] overflow-y-auto"
        >
          {chat.map((msg, index) => (
            <MessageCard
              key={index}
              user={"bhola"}
              message={msg.message}
              messageType={msg?.sender}
            />
          ))}
        </div>
        {typing && <ParaTypo className="text-center text-sm text-green-500">typing....</ParaTypo>}

        <div className="flex items-center gap-x-1">
          <Input
            onBlur={blurHandler}
            onFocus={focusHandler}
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="enter your message"
            type="text"
            className="w-full rounded-none mt-3"
          />
          <Send onClick={clickhandler} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
