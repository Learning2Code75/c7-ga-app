import { Button, Divider } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatCard from "../components/Chat/ChatCard";

const Chat = () => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state?.chats);
  const [state, setState] = useState({
    chat: "",
  });
  const [publicChat, setPublicChat] = useState({
    chat: "",
  });
  const s = () => {
    console.log("chat sent");
  };
  const f = (m) => {
    console.log(m);
  };
  return (
    <div className="PageContainer">
      <h4
        style={{
          marginLeft: ".5rem",
        }}
      >
        Personal
      </h4>
      <div className="LoginContainer">
        <textarea
          color="neutral"
          disabled={false}
          placeholder="Send your blessings to the bride and the groom"
          size="md"
          variant="outlined"
          onChange={(e) => {
            setState({ ...state, chat: e.target.value });
          }}
          value={state.chat}
        />
        <div
          style={{
            fontSize: ".8rem",
            fontWeight: "bold",
          }}
        >
          Only bride and the groom will be able to read the message.
        </div>
        <div>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              console.log("chat sent");
              setState({
                chat: "",
              });
            }}
          >
            Send
          </Button>
        </div>
      </div>
      <Divider />
      <h4
        style={{
          marginLeft: ".5rem",
        }}
      >
        Public
      </h4>
      <div className="LoginContainer">
        <textarea
          color="neutral"
          disabled={false}
          placeholder="Send your blessings to the bride and the groom"
          size="md"
          variant="outlined"
          onChange={(e) => {
            setPublicChat({ ...publicChat, chat: e.target.value });
          }}
          value={publicChat.chat}
        />
        <div
          style={{
            fontSize: ".8rem",
            fontWeight: "bold",
          }}
        >
          Everyone will be able to read the message.
        </div>
        <div>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              console.log("public chat sent");
              setPublicChat({
                chat: "",
              });
            }}
          >
            Send
          </Button>
        </div>
      </div>
      <Divider />

      <h4
        style={{
          marginLeft: ".5rem",
        }}
      >
        Blessings Wall
      </h4>
      <div className="LoginContainer">
        {chats.map((c) => (
          <ChatCard c={c} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
