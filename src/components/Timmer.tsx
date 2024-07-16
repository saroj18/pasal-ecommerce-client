import React from "react";

const Timmer = () => {
  return (
    <div className="lg:flex gap-3 border-2 px-2 border-red-50 rounded-sm hidden">
      <div className="flex items-center justify-center flex-col">
        <p className="text-xl font-semibold">Days</p>
        <p className="font-semibold text-4xl">03</p>
      </div>
      <div className="flex items-center justify-center flex-col">
        <p className="text-xl font-semibold">Hours</p>
        <p className="font-semibold text-4xl">01</p>
      </div>
      <div className="flex items-center justify-center flex-col">
        <p className="text-xl font-semibold">Minute</p>
        <p className="font-semibold text-4xl">33</p>
      </div>
      <div className="flex items-center justify-center flex-col">
        <p className="text-xl font-semibold">Second</p>
        <p className="font-semibold text-4xl">43</p>
      </div>
    </div>
  );
};

export default Timmer;
