import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Bar = ({ name, room }) => {
  return (
    <div className="w-full flex justify-between items-center px-5 py-2 bg-gray-400">
      <div className="font-semibold">{room}</div>
      <div className="hover:cursor-pointer hover:text-red-400 text-2xl">
        <a href="/">
          <AiOutlineCloseCircle />
        </a>
      </div>
    </div>
  );
};

export default Bar;
