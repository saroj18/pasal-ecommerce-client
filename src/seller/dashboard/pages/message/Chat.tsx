import { Send } from "lucide-react";
import Sidebar from "./Sidebar";
import Input from "../../../../components/common/Input";
import MessageCard from "../../../../customer/popup/MessageCard";
import ParaTypo from "../../../../components/common/ParaTypo";
import jacket from "../../../../assets/jacket.png";
import { useEffect, useRef, useState } from "react";
import { useContextProvider } from "../../../../context/Context";
import { MessageProps } from "../../../../customer/popup/ChatPopup";
import { useQuery } from "../../../../hooks/useQuery";

const Chat = () => {
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);
  const [chat, setChat] = useState<MessageProps[]>([]);
  const { socketServer } = useContextProvider();
  const chatBodyRef = useRef<HTMLDivElement | null>(null);
  const [id, setId] = useState("");
  const { data, refetch } = useQuery<any[]>(`/chats?id=${id}`);
  const [client, setClient] = useState("");
  const [product, setProduct] = useState<{ sender: string; product: any }>({
    sender: "",
    product: "",
  });

  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id]);

  const clickhandler = () => {
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
      type: "customer_and_vendor_chat",
    };
    setChat((prv) => [...prv, value]);
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
    if (socketServer)
      socketServer.onmessage = (info) => {
        const serverData = JSON.parse(info.data);
        if (serverData.type == "typing") {
          setTyping(serverData.message);
        }
        if (serverData.type == "customer_and_vendor_chat") {
          setChat((prv) => [...prv, serverData]);
          if (product?.product?._id !== serverData.product._id) {
            setProduct({
              product: serverData.product,
              sender: serverData.sender,
            });
          }
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

  useEffect(() => {
    if (data) {
      setChat([...data]);
    }
  }, [data]);

  return (
    <div className="flex gap-x-2">
      <Sidebar setId={setId} setClient={setClient} />
      <div className="rounded-md p-1 w-full">
        <div className="flex my-3 items-center gap-x-3 bg-green-500 rounded-md p-1 text-white">
          <img className="w-[40px] h-[40px] rounded-full" src={jacket} alt="" />
          <div>
            <ParaTypo className="text-sm">{client}</ParaTypo>
            {typing && (
              <ParaTypo className="text-center text-sm text-white-500">
                typing....
              </ParaTypo>
            )}
          </div>
        </div>

        <div
          ref={chatBodyRef}
          className="flex flex-col w-full h-[550px] overflow-y-auto"
        >
          {chat.map(
            (msg, index) =>
              (msg.receiver == id || msg.sender == id) && (
                <MessageCard
                  key={index}
                  user={"bhola"}
                  message={msg.message}
                  messageType={id}
                  msg={msg}
                />
              ),
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
