import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import "./App.scss";
import Login from "./components/Login";
import FriendList from "./components/FriendList";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink className="nav__link" exact to="/">
          Home
        </NavLink>
        <NavLink className="nav__link" to="/login">
          Login
        </NavLink>
        <NavLink className="nav__link" to="/friends">
          Friends
        </NavLink>
      </nav>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/friends" component={FriendList} />
      </Switch>
    </div>
  );
}

export default App;
