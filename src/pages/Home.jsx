import React from "react";

const Home = () => {
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
        src="/imgs/home.png"
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
