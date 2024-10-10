import React from "react";
import "./ChatBox.css";
import assets from "../../assets/assets";

const ChatBox = () => {
  return (
    <div className="chat-box">
      {/* ------------------------Top-Section------------------------- */}
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>
          Sam <img src={assets.green_dot} className="dot" alt="" />
        </p>
        <img src={assets.help_icon} className="help" alt="" />
      </div>
      {/*-------------------------Chat Section------------------------- */}
      <div className="chat-msg">
        {/* s-msg => sender's Message */}
        <div className="s-msg">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>
        <div className="s-msg">
          <img src={assets.pic1} className="msg-img" alt="" />
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>
        <div className="r-msg">
          {" "}
          {/*r-msg => Receiver's msg*/}
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>
      </div>
      {/* --------------------------Bottom-Section----------------------- */}
      <div className="chat-input">
        <input type="text" placeholder="Send A Message" />
        <input type="file" id="image" accept="image/png, image/jpeg" hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  );
};

export default ChatBox;
