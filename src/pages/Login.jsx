import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateAuth } from "../redux/actions/auth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.auth);
  const [state, setState] = useState({
    name: "",
  });
  const s = () => {
    console.log("login successfull");
  };
  const f = (m) => {
    console.log(m);
  };
  return (
    <div className="LoginContainer">
      <input
        id="login"
        color="neutral"
        disabled={false}
        placeholder="Enter your username"
        size="md"
        variant="outlined"
        onChange={(e) => {
          setState({ ...state, name: e.target.value });
        }}
      />
      <div
        style={{
          fontSize: ".8rem",
          fontWeight: "bold",
        }}
      >
        You can find your username in the digital invite.
      </div>
      <div>
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            let new_auth = { ...auth };
            new_auth.user.name = state.name;
            dispatch(updateAuth(new_auth, s, f));
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
