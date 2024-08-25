import Popup from "reactjs-popup";
import ParaTypo from "../../components/common/ParaTypo";
import jacket from "../../assets/jacket.png";
import Input from "../../components/common/Input";
import { Send } from "lucide-react";
import MessageCard, { message } from "./MessageCard";

type ChatPopupProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatPopup = ({ open, setOpen }: ChatPopupProps) => {
  return (
    <Popup
    lockScroll={true}
      contentStyle={{ maxWidth: "500px", borderRadius: "5px"}}
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

        <div className="flex flex-col w-full max-h-[330px] overflow-y-auto">
          {message.map((msg, index) => (
            <MessageCard
              key={index}
              user={msg.user}
              message={msg.message}
              messageType={msg.messageType}
            />
          ))}
        </div>

        <div className="flex items-center gap-x-1">
          <Input
            placeholder="enter your message"
            type="text"
            className="w-full rounded-none mt-3"
          />
          <Send className="cursor-pointer" />
        </div>
      </div>
    </Popup>
  );
};

export default ChatPopup;
