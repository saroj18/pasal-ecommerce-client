import { MessageProps } from "./ChatPopup";

type MessageCardProps = {
  message: string | boolean;
  messageType: string | undefined;
  user: string;
  msg?: MessageProps;
};

const MessageCard = ({ message, messageType, user, msg }: MessageCardProps) => {
  return (
    <div
      className={`flex gap-x-2 ${messageType == msg?.receiver._id ? " self-end" : "self-start"}`}
    >
      <div className={`w-10 h-10 bg-gray-300 rounded-full ${messageType == msg?.receiver._id?'hidden':'block'}`}></div>
      <div className="flex flex-col gap-y-1">
        <p className="text-sm">{user}</p>
        <p
          className={` p-2 rounded-lg ${messageType == msg?.receiver._id ? "bg-blue-500 text-white" : "bg-gray-500 text-white"}`}
          // title={new Date(msg!.createdAt as string).toLocaleTimeString()}
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default MessageCard;

export const message = [
  {
    user: "seller",
    message: "Hello, how can I help you?",
    messageType: "incoming",
  },
  {
    user: "customer",
    message: "I want to buy this product",
    messageType: "outgoing",
  },
  {
    user: "seller",
    message: "Sure, I will help you",
    messageType: "incoming",
  },
  {
    user: "customer",
    message: "I want to buy this product",
    messageType: "outgoing",
  },
  {
    user: "seller",
    message: "Sure, I will help you",
    messageType: "incoming",
  },
  {
    user: "customer",
    message: "I want to buy this product",
    messageType: "outgoing",
  },
  {
    user: "seller",
    message: "Sure, I will help you",
    messageType: "incoming",
  },
  {
    user: "customer",
    message: "I want to buy this product",
    messageType: "outgoing",
  },
  {
    user: "seller",
    message: "Sure, I will help you",
    messageType: "incoming",
  },
  {
    user: "customer",
    message: "I want to buy this product",
    messageType: "outgoing",
  },
  {
    user: "seller",
    message: "Sure, I will help you",
    messageType: "incoming",
  },
  {
    user: "customer",
    message: "I want to buy this product",
    messageType: "outgoing",
  },
  {
    user: "seller",
    message: "Sure, I will help you",
    messageType: "incoming",
  },
];
