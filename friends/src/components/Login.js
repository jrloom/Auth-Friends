import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    const credentials = {
      username: username,
      password: password
    };
    console.log(credentials);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" value={username} onChange={e => setUsername(e.target.value)} autoComplete="off" />
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="off" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
