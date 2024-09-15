import Popup from "reactjs-popup";
import ParaTypo from "../../components/common/ParaTypo";
import jacket from "../../assets/jacket.png";
import Input from "../../components/common/Input";
import { Send } from "lucide-react";
import MessageCard, { message } from "./MessageCard";
import { useEffect, useRef, useState } from "react";
import { useContextProvider } from "../../context/Context";
import { useQuery } from "../../hooks/useQuery";

type ChatPopupProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
  product: string;
};

export type MessageProps = {
  sender?: string;
  receiver: string;
  message: string | boolean;
  type: string;
  createdAt?: string;
};

const ChatPopup = ({ userId, open, setOpen, product }: ChatPopupProps) => {
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);
  const [chat, setChat] = useState<MessageProps[]>([]);
  const { socketServer } = useContextProvider();
  const messageBodyRef = useRef<HTMLDivElement | null>(null);
  const { data } = useQuery<any[]>("/chats?id=" + userId);
  console.log("sora", userId);

  const clickhandler = () => {
    socketServer?.send(
      JSON.stringify({
        receiver: userId,
        message: text,
        type: "customer_and_vendor_chat",
        product,
      }),
    );
    const value = {
      receiver: userId,
      message: text,
      type: "customer_and_vendor_chat",
    };
    setChat((prv) => [...prv, value]);
  };

  const focusHandler = () => {
    socketServer?.send(
      JSON.stringify({
        receiver: userId,
        message: true,
        type: "typing",
      }),
    );
  };

  const blurHandler = () => {
    socketServer?.send(
      JSON.stringify({
        receiver: userId,
        message: false,
        type: "typing",
      }),
    );
  };

  useEffect(() => {
    if (socketServer) {
      socketServer.onmessage = (info) => {
        const serverData = JSON.parse(info.data);
        if (serverData.type == "typing") {
          setTyping(serverData.message);
        }
        if (serverData.type == "customer_and_vendor_chat") {
          setChat((prv) => [...prv, serverData]);
        }
      };
    }
  }, [socketServer]);

  useEffect(() => {
    if (messageBodyRef.current) {
      messageBodyRef.current.scrollTo({
        top: messageBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chat, typing]);

  useEffect(() => {
    if (data) {
      setChat([...data]);
    }
  }, [data]);

  return (
    <Popup
      lockScroll={true}
      contentStyle={{ width: "100%", maxWidth: "500px", borderRadius: "5px" }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <ParaTypo className="text-center text-2xl">Chat Box</ParaTypo>
      <div className=" rounded-md p-1">
        <div className="flex my-3 items-center gap-x-3 bg-green-500 rounded-md p-1 text-white">
          <img className="w-[40px] h-[40px] rounded-full" src={jacket} alt="" />
          <div>
            <ParaTypo className="text-sm">Madan Panipuri Pasal</ParaTypo>
            <span>online</span>
          </div>
        </div>

        <div
          ref={messageBodyRef}
          className="flex flex-col w-full h-[330px] overflow-y-auto"
        >
          {chat.map((msg, index) => (
            <MessageCard
              key={index}
              user={"chola"}
              message={msg.message}
              messageType={userId}
              msg={msg}
            />
          ))}
          {typing && (
            <ParaTypo className="text-center text-sm text-green-500">
              typing.....
            </ParaTypo>
          )}
        </div>

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
    </Popup>
  );
};

export default ChatPopup;
