import ParaTypo from "../../../../components/common/ParaTypo";
import jacket from '../../../../assets/jacket.png'

const UserCard = () => {
  return (
    <div className="flex gap-x-2 p-2 border-2 rounded-md my-2 cursor-pointer">
      <img className="w-[40px] h-[40px] rounded-full" src={jacket} alt="" />
      <div>
        <ParaTypo className="text-base">Saroj Aryal</ParaTypo>
        <ParaTypo className="text-sm">Msg:Hello how are you</ParaTypo>
      </div>
    </div>
  );
};

export default UserCard;
