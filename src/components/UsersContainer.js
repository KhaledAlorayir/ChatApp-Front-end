import React from "react";

const UsersContainer = ({ Users }) => {
  return (
    <div className="bg-slate-300 w-1/6 overflow-y-auto py-2 px-1 md:px-8 ">
      <ul className="md:list-disc text-zinc-800 font-semibold">
        {Users.map((u, i) => (
          <li key={i} className="mb-1">
            {u}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersContainer;
