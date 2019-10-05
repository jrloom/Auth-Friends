import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from "./AddFriend";
import Friend from "./Friend";

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => setFriends(res.data))
      .catch(err => console.log("bad things from friendslist --> ", err));
  });

  return (
    <div className="allthefriends">
      <AddFriend />
      <div className="friends">
        <h1 className="friends__title">You have friends!</h1>
        <ul className="friends__list">
          {friends.map(friend => (
            <li key={friend.id} className="friends__friend">
              <Friend friend={friend} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FriendList;
