import React from "react";
import { Route, Link } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
