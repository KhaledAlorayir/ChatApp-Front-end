import React, { useRef, useEffect } from "react";
import Message from "./Message";

const MessagesContainer = ({ Messages, name }) => {
  let Parsed = name.trim().toLowerCase();
  const ScrollRef = useRef();

  useEffect(() => {
    ScrollRef.current.scrollIntoView();
  }, [Messages]);

  return (
    <div className="bg-slate-50 w-5/6 overflow-y-auto">
      {Messages.map((m, i) => (
        <Message key={i} m={m} isMe={Parsed === m.user} />
      ))}
      <div ref={ScrollRef}></div>
    </div>
  );
};

export default MessagesContainer;
