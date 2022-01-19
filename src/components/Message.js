import React from "react";

const Message = ({ m, isMe }) => {
  if (isMe) {
    return (
      <div className=" flex items-center justify-end px-4 py-2 ">
        <p className="bg-blue-600 text-slate-100 py-3 px-4 rounded-lg font-medium break-all">
          {m.text}
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center px-4 py-2 ">
      <p className="bg-slate-300 py-3 px-4 rounded-lg font-medium mr-2 break-all">
        {m.text}
      </p>
      <p className="font-normal">{m.user}</p>
    </div>
  );
};

export default Message;
