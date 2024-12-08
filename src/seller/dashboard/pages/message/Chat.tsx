import { Send } from "lucide-react";
import Sidebar from "./Sidebar";
import Input from "../../../../components/common/Input";
import MessageCard from "../../../../customer/popup/MessageCard";
import ParaTypo from "../../../../components/common/ParaTypo";
import jacket from "../../../../assets/jacket.png";
import React, { useEffect, useRef, useState } from "react";
import { useContextProvider } from "../../../../context/Context";
import { MessageProps } from "../../../../customer/popup/ChatPopup";
import { useAuth, UserType } from "../../../../context/AuthProvider";

const Chat = () => {
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);
  const [chat, setChat] = useState<MessageProps[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { socketServer } = useContextProvider();
  const chatBodyRef = useRef<HTMLDivElement | null>(null);
  const [id, setId] = useState("");
  const [client, setClient] = useState("");

  const [product, setProduct] = useState<{ sender: string; product: any }>({
    sender: "",
    product: "",
  });

  const { data } = useAuth();

  useEffect(() => {
    if (id) {
      getUser();
    }
    async function getUser() {
      try {
        setLoading(true);
        const resp = await fetch(
          import.meta.env.VITE_HOST + "/chats?id=" + id,
          {
            method: "GET",
            credentials: "include",
          },
        );
        const info = await resp.json();
        console.log(info);
        setChat([...info.data]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }, [id]);

  const clickhandler = (
    e:
      | React.MouseEvent<HTMLOrSVGElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.nativeEvent instanceof KeyboardEvent) {
      if (e.nativeEvent.key == "Enter") {
        socketServer?.send(
          JSON.stringify({
            receiver: id,
            message: text,
            type: "customer_and_vendor_chat",
          }),
        );
        const value = {
          receiver: id,
          message: text,
          sender: (data as UserType)._id,
          type: "customer_and_vendor_chat",
        };
        setChat((prv) => [...prv, value]);
        setText("");
        return;
      }
    } else {
      socketServer?.send(
        JSON.stringify({
          receiver: id,
          message: text,
          type: "customer_and_vendor_chat",
        }),
      );
      const value = {
        receiver: id,
        message: text,
        sender: (data as UserType)._id,
        type: "customer_and_vendor_chat",
      };
      setChat((prv) => [...prv, value]);
      setText("");
    }
  };

  const focusHandler = () => {
    socketServer?.send(
      JSON.stringify({
        receiver: id,
        message: true,
        type: "typing",
      }),
    );
  };

  const blurHandler = () => {
    socketServer?.send(
      JSON.stringify({
        receiver: id,
        message: false,
        type: "typing",
      }),
    );
  };

  useEffect(() => {
    const handleMessage = async (info: MessageEvent) => {
      const serverData = JSON.parse(info.data);
      if (serverData.type == "typing") {
        setTyping(serverData.message);
      }

      if (
        serverData.type == "error" &&
        serverData.errorName == "chatWithVendorAndCustomer"
      ) {
        setError(serverData.message);
      }
    };

    if (socketServer) {
      socketServer.addEventListener("message", handleMessage);
    }

    return () => {
      if (socketServer) {
        socketServer.removeEventListener("message", handleMessage);
      }
    };
  }, [socketServer]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [typing, chat]);

  console.log(chat);

  return (
    <div className="flex gap-x-2">
      <Sidebar setId={setId} setClient={setClient} />
      <div className="rounded-md p-1 w-full border-2">
        {id && (
          <div className="flex my-3 items-center gap-x-3 bg-green-500 rounded-md p-1 text-white">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={jacket}
              alt=""
            />
            <div>
              <ParaTypo className="text-sm">{client}</ParaTypo>
              {typing && (
                <ParaTypo className="text-center text-sm text-white-500">
                  typing....
                </ParaTypo>
              )}
            </div>
          </div>
        )}

        <div
          ref={chatBodyRef}
          className="flex flex-col w-full h-[550px] overflow-y-auto"
        >
          {loading ? (
            <ParaTypo className="text-3xl text-red-500 text-center">
              Loading....
            </ParaTypo>
          ) : (
            chat.map(
              (msg, index) =>
                (msg.receiver?._id == id ||
                  msg.sender?._id == id ||
                  msg.sender == id ||
                  msg.receiver == id) &&
                msg.message && (
                  <MessageCard
                    key={index}
                    user={msg.sender?.fullname}
                    message={msg.message}
                    messageType={id}
                    msg={msg}
                    error={error}
                  />
                ),
            )
          )}
          {product.product && product.sender == id && (
            <>
              <ParaTypo className="text-center">Selected Product</ParaTypo>
              <img
                title={product?.product?.name}
                className="w-[150px] mx-auto border-2 border-gray-500 rounded-md shadow-md p-1"
                src={product?.product?.images?.[0]}
                alt=""
              />
              <ParaTypo className="text-center text-sm">
                Rs {product?.product?.priceAfterDiscount}
              </ParaTypo>
              <ParaTypo className="text-center text-sm">
                Discount {product?.product?.discount}%
              </ParaTypo>
            </>
          )}

          {!id && (
            <ParaTypo className="text-center mt-10 text-3xl font-semibold">
              Select Chat Person
            </ParaTypo>
          )}
        </div>

        {id && (
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
        )}
      </div>
    </div>
  );
};

export default Chat;
