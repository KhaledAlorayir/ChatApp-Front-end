import React from "react";
import { useSelector } from "react-redux";

const UsersContainer = ({ Users }) => {
  const { name } = useSelector((state) => state.chat);
  let parsed = name.trim().toLowerCase();

  return (
    <div className="bg-slate-300 w-1/6 overflow-y-auto py-2 px-1 md:px-8 text-sm md:text-base">
      <ul className="md:list-disc text-zinc-800 font-semibold">
        {Users.map((u, i) => {
          let isMe = parsed === u;
          return (
            <li key={i} className={`mb-1 ${isMe ? "text-green-700" : ""}`}>
              {u}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersContainer;
