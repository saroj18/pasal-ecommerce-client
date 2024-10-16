import Popup from "reactjs-popup";
import ParaTypo from "../../components/common/ParaTypo";
import jacket from "../../assets/jacket.png";
import { Send } from "lucide-react";
import MessageCard from "./MessageCard";
import React, { useEffect, useRef, useState } from "react";
import { useContextProvider } from "../../context/Context";
import { useQuery } from "../../hooks/useQuery";
import { ChatType } from "../../types/ChatType";
import Input from "@/components/common/Input";

type ChatPopupProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
  product: string;
};

export type MessageProps = {
  sender?: any;
  receiver: any;
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
  const { data } = useQuery<ChatType[]>("/chats?id=" + userId);
  console.log("sora", userId);

  const clickhandler = (
    e:
      | React.MouseEvent<HTMLOrSVGElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.nativeEvent instanceof KeyboardEvent) {
      if (e.nativeEvent.key == "Enter") {
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
        setText("");
        return;
      }
    } else {
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
      setText("");
    }
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
      setChat([...(data as ChatType[])]);
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
          {chat &&
            chat.map((msg, index) => {
              if (!msg.message) return;
              return (
                <MessageCard
                  key={index}
                  user={msg.sender?.fullname}
                  message={msg.message}
                  messageType={userId}
                  msg={msg}
                />
              );
            })}
          {typing && (
            <ParaTypo className="text-center text-sm text-green-500">
              typing.....
            </ParaTypo>
          )}
        </div>

        <div className="flex items-center gap-x-1">
          <Input
            onKeyUp={clickhandler}
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
