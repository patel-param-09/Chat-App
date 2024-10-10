import React from "react";
import "./RightSideBar.css";
import assets from "../../assets/assets";
import { logOut } from "../../config/firbase";

const RightSideBar = () => {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>
          Sam <img src={assets.green_dot} className="dot" alt="" />
        </h3>
        <p>Hey, There I am Sam Using Chat App</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
        </div>
      </div>
      <button onClick={() => logOut()}>Logout</button>
    </div>
  );
};

export default RightSideBar;
