import React from "react";
import ParaTypo from "../../../components/common/ParaTypo";
import Button from "../../../components/common/Button";

type Card = {
  name: string;
  id: string;
  result: string;
};

const MostSellingProductCard = ({ name, id, result }: Card) => {
  return (
    <div className="flex justify-between my-5 border-2  p-1 items-center">
      <img
        className="w-[20%] rounded-md"
        src="https://images.unsplash.com/photo-1473188588951-666fce8e7c68?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D"
        alt=""
      />
      <div>
        <ParaTypo>{name}</ParaTypo>
        <ParaTypo className="text-gray-400 text-xs">{id}</ParaTypo>
      </div>
      <Button className="border-2 rounded-md px-2 py-3">{result}</Button>
    </div>
  );
};

export default MostSellingProductCard;
