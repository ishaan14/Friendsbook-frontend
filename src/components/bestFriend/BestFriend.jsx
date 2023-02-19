import React from "react";
import "./BestFriend.css";

const BestFriend = ({ user }) => {
  return (
    <li className="leftbarFriend">
      <img
        className="leftbarFriendImg"
        src={user.profilePicture}
        alt="BestFriend"
      />
      <span className="leftbarFriendName">{user.username}</span>
    </li>
  );
};

export default BestFriend;
