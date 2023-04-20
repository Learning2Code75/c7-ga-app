import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { imgUrls } from "../imgs/imgUrls";
import { getChats } from "../redux/actions/chats";
import { getEvents } from "../redux/actions/events";
import { getPaths } from "../redux/actions/paths";
import { getUsers } from "../redux/actions/users";
const Home = () => {
  const s = () => {};
  const f = () => {};
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChats(s, f));
    dispatch(getEvents("", s, f));
    dispatch(getPaths("", s, f));
    dispatch(getUsers(s, f));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <img
        style={{
          borderRadius: "1rem",
          backgroundColor: "rgb(0,0,0)",
          opacity: "75%",
        }}
        src={imgUrls["home"]}
        alt="image"
        height="350"
        width="350"
      />
      <a href="https://icons8.com/icons/set/event">icons8.com</a>
      <div>Guest Activities</div>
    </div>
  );
};

export default Home;
