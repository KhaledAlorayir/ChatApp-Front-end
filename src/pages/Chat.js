import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import Bar from "../components/Bar";
import MessagesContainer from "../components/MessagesContainer";
import Input from "../components/Input";
import UsersContainer from "../components/UsersContainer";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const { name, room } = useSelector((state) => state.chat);
  const ENDPOINT = "https://chatapp-sa-api.herokuapp.com";
  const Socket = useRef(io(ENDPOINT));

  const [Messages, setMessages] = useState([]);
  const [Users, setUsers] = useState([]);
  const [userInput, setUserInput] = useState("");

  const navigate = useNavigate();

  //join
  useEffect(() => {
    Socket.current.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
        return navigate("/");
      }
    });
  }, [ENDPOINT, name, room, navigate]);

  //getMessage & users
  useEffect(() => {
    Socket.current.on("message", (message) => {
      setMessages((state) => [...state, message]);
    });

    Socket.current.on("getUsers", (users) => {
      setUsers(users);
    });
  }, []);

  //sendMessages send
  const SendMessageHandler = () => {
    if (userInput.trim() !== "") {
      Socket.current.emit("send", userInput, () => {});
      setUserInput("");
    }
  };

  return (
    <div className="flex h-full justify-center items-center bg-gray-600">
      <div className="bg-gray-800 h-3/4 w-5/6 2xl:w-1/2 flex flex-col">
        <Bar room={room} name={name} />
        <div className="flex-1 flex overflow-hidden">
          <MessagesContainer Messages={Messages} name={name} />
          <UsersContainer Users={Users} />
        </div>
        <Input
          userInput={userInput}
          setUserInput={setUserInput}
          onClick={SendMessageHandler}
        />
      </div>
    </div>
  );
};

export default Chat;
