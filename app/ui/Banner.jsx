import React from "react";
import { IoMdTimer, IoMdCheckmarkCircleOutline } from "react-icons/io";

const Banner = () => {
  return (
    <div className="w-[95%] py-4 bg-teal-500 flex justify-center items-center text-2xl font-bold mx-auto mt-2 rounded-full shadow-xl">
      <div className="w-1/2 flex justify-between items-center text-white">
        <IoMdCheckmarkCircleOutline/>
        <h1 className="text-white">Your Todo App</h1>
        <IoMdTimer />
      </div>
    </div>
  );
};

export default Banner;
