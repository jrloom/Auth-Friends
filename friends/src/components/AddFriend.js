import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = props => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const friend = {
      name: name,
      age: age,
      email: email
    };
    axiosWithAuth()
      .post("/friends", friend)
      .then(res => {
        setName("");
        setAge("");
        setEmail("");
      })
      .catch(err => console.log("bad things --> ", err));
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="form__input"
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={age}
        onChange={e => setAge(e.target.value)}
        className="form__input"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="form__input"
      />
      <button className="form__button" type="submit">
        send
      </button>
    </form>
  );
};

export default AddFriend;
