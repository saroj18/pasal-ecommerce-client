
type MessageCardProps = {
  message: string;
  messageType: string;
  user:string
};

const MessageCard = ({ message, messageType,user }: MessageCardProps) => {
  return (
    <div className={`flex gap-x-2 ${messageType=='incoming'?" self-end":"self-start"}`}>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="flex flex-col gap-y-1">
            <p className="text-sm">{user}</p>
            <p className={` p-2 rounded-lg ${messageType=="incoming"?"bg-gray-500 text-white":"bg-blue-500 text-white"}`}>{message}</p>
          </div>
        </div>
  );
};

export default MessageCard;

// give me dummy message data where include user,message,messagetype like incomming outgoin

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
