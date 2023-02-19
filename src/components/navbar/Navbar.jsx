import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="logo">FriendsBook</span>
      </div>
      <div className="navbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search for posts and friends"
            className="searchInput"
          />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink">Home</span>
          <span className="navbarLink">TimeLine</span>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <Person />
            <span className="navbarBadge">1</span>
          </div>
          <div className="navbarIconItem">
            <Chat />
            <span className="navbarBadge">1</span>
          </div>
          <div className="navbarIconItem">
            <Notifications />
            <span className="navbarBadge">1</span>
          </div>
        </div>
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-926895120.jpg"
          alt="profilePic"
          className="navbarImage"
        />
      </div>
    </div>
  );
};

export default Navbar;
