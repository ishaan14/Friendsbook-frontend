import React from "react";
import "./Profile.css";
import Navbar from "../../components/navbar/Navbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://wallpapers.com/images/featured/wnxju2647uqrcccv.jpg"
                alt="any"
              />
              <img
                className="profileUserImg"
                src="https://i.pinimg.com/originals/a8/71/70/a871709cc70697843336f544cdf5d4f7.jpg"
                alt="any"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Ashton Kutcher</h4>
              <span className="profileInfoDesc">Hello My Friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
