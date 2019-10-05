import React from "react";

const Friend = ({ friend }) => {
  return (
    <>
      {friend.name} is {friend.age} years old -- contact: {friend.email}
    </>
  );
};

export default Friend;
