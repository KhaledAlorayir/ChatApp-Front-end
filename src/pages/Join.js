import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const [InputValue, setInputValue] = useState({ name: "", room: "" });
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const ChangeHandler = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setInputValue((state) => ({ ...state, [key]: value }));
  };

  const SubmitHandler = () => {
    if (InputValue.name.trim() === "" || InputValue.room.trim() === "")
      return alert("Please enter all values!");

    if (InputValue.name.length > 10)
      return alert("the name should be less than 11 characters");

    dispatch({ type: "SET", payload: InputValue });
    Navigate("/chat");
  };

  return (
    <div className="flex h-full justify-center items-center bg-gray-600 text-zinc-900 ">
      <div className="bg-gray-800  h-1/2 text-center py-2 px-4 rounded-md flex flex-col justify-evenly w-5/6 2xl:w-1/4 lg:w-1/2 md:w-1/2  ">
        <h1 className="text-2xl font-bold text-neutral-300">
          Join a Chat room!
        </h1>
        <div className="text-zinc-900">
          <input
            type="text"
            className="block w-full mb-10 rounded h-8 px-2"
            placeholder="Name"
            onChange={ChangeHandler}
            name="name"
            value={InputValue.name}
          />
          <input
            type="text"
            className="block w-full rounded h-8 px-2"
            placeholder="Room"
            onChange={ChangeHandler}
            name="room"
            value={InputValue.room}
          />
        </div>
        <button
          to="/chat"
          className="bg-gray-400 text-gray-800 text-lg rounded-full font-bold p-2 hover:bg-gray-500"
          onClick={SubmitHandler}
        >
          Join!
        </button>
      </div>
    </div>
  );
};

export default Join;
