import ParaTypo from "../../../components/common/ParaTypo";
import Button from "../../../components/common/Button";

type Card = {
  name: string;
  id?: string;
  result: string;
  image?: string;
};

const MostSellingProductCard = ({ name, id, result, image }: Card) => {
  return (
    <div className="flex justify-between my-2 shadow-md border-2  px-2 py-1 items-center">
      <img
        className="w-[10%] rounded-md"
        src={image || `${import.meta.env.VITE_LOCALHOST}/src/assets/logo.jpg`}
        alt=""
      />
      <div>
        <ParaTypo title={name} className="text-sm">
          {name?.slice(0, 15)}...
        </ParaTypo>
        <ParaTypo title={id} className="text-gray-400 text-xs">
          {id?.slice(0, 15)}
        </ParaTypo>
      </div>
      <Button className="border-2 rounded-md p-1 text-sm">{result}</Button>
    </div>
  );
};

export default MostSellingProductCard;
