
type MessageCardProps = {
  message: string|boolean;
  messageType: string|undefined;
  user:string
};

const MessageCard = ({ message, messageType,user }: MessageCardProps) => {
  return (
    <div className={`flex gap-x-2 ${!messageType?" self-end":"self-start"}`}>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="flex flex-col gap-y-1">
            <p className="text-sm">{user}</p>
            <p className={` p-2 rounded-lg ${messageType?"bg-blue-500 text-white":"bg-gray-500 text-white"}`}>{message}</p>
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
