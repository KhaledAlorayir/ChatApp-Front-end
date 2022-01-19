import React from "react";

const Input = ({ userInput, setUserInput, onClick }) => {
  const SubmitOnEnter = (e) => {
    if (e.code === "Enter") onClick();
  };

  return (
    <div className="bg-gray-400 flex px-5 py-4 items-center">
      <div className="w-3/4">
        <input
          type="text"
          className="w-full rounded rounded-r-none h-8 px-2"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          onKeyDown={SubmitOnEnter}
        />
      </div>
      <button
        className="w-1/4 bg-gray-600 font-semibold text-slate-200 h-8 rounded rounded-l-none"
        onClick={onClick}
      >
        Send
      </button>
    </div>
  );
};

export default Input;
