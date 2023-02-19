import React from "react";
import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <span className="birthdayImg">🎁</span>
          <span className="birthdayText">
            <b>Tom Holland</b> and <b>5 others</b> have birthdays today
          </span>
        </div>
        <img
          src="https://mcdonaldsblog.in/wp-content/uploads/2021/12/food-is-theingredient-that-binds-us-together.jpg"
          alt="ad"
          className="rightbarAd"
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendlist">
          {Users.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">London</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">San Francisco</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="https://media.glamour.com/photos/633b5746584ad9bf0dd74e02/master/pass/278912009_515953116827707_5185185746624849249_n.jpg"
              alt="any"
              className="rightbarFollowingImg"
            />
            <span>Sabrina Carpenter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://media.glamour.com/photos/633b5746584ad9bf0dd74e02/master/pass/278912009_515953116827707_5185185746624849249_n.jpg"
              alt="any"
              className="rightbarFollowingImg"
            />
            <span>Sabrina Carpenter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://media.glamour.com/photos/633b5746584ad9bf0dd74e02/master/pass/278912009_515953116827707_5185185746624849249_n.jpg"
              alt="any"
              className="rightbarFollowingImg"
            />
            <span>Sabrina Carpenter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://media.glamour.com/photos/633b5746584ad9bf0dd74e02/master/pass/278912009_515953116827707_5185185746624849249_n.jpg"
              alt="any"
              className="rightbarFollowingImg"
            />
            <span>Sabrina Carpenter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://media.glamour.com/photos/633b5746584ad9bf0dd74e02/master/pass/278912009_515953116827707_5185185746624849249_n.jpg"
              alt="any"
              className="rightbarFollowingImg"
            />
            <span>Sabrina Carpenter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://media.glamour.com/photos/633b5746584ad9bf0dd74e02/master/pass/278912009_515953116827707_5185185746624849249_n.jpg"
              alt="any"
              className="rightbarFollowingImg"
            />
            <span>Sabrina Carpenter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
