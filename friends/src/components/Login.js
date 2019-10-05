import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/friends" />;
  }

  const onSubmit = e => {
    e.preventDefault();
    const credentials = {
      username: username,
      password: password
    };
    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(err => console.log("bad things --> ", err));
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <input
        type="text"
        name="name"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="username"
        autoComplete="off"
        className="form__input"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="password"
        autoComplete="off"
        className="form__input"
      />
      <button className="form__button" type="submit">
        send
      </button>
    </form>
  );
};

export default Login;
