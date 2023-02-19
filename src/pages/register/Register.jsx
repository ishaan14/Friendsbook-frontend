import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FriendsBook</h3>
          <span className="loginDesc">Connect with people and friends.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" type="text" className="loginInput" />
            <input placeholder="Email" type="email" className="loginInput" />
            <input
              placeholder="password"
              type="password"
              className="loginInput"
            />
            <input
              placeholder="Confirm your password"
              type="password"
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Login To Your account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
