import React from "react";
import ParaTypo from "../../../components/common/ParaTypo";
import Button from "../../../components/common/Button";

type Card = {
  name: string;
  id: string;
  result: string;
  image?:string
};

const MostSellingProductCard = ({ name, id, result,image }: Card) => {
  return (
    <div className="flex justify-between my-2 shadow-md border-2  px-2 py-1 items-center">
      <img
        className="w-[10%] rounded-md"
        src={image || 'http://localhost:5173/src/assets/logo.jpg'}
        alt=""
      />
      <div>
        <ParaTypo title={name} className="text-base">{name}</ParaTypo>
        <ParaTypo className="text-gray-400 text-xs">{id}</ParaTypo>
      </div>
      <Button className="border-2 rounded-md p-2 text-sm">{result}</Button>
    </div>
  );
};

export default MostSellingProductCard;
