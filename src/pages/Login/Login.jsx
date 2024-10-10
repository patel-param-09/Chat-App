import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";
import { signUp, login } from "../../config/firbase";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handelSubmit(e) {
    e.preventDefault();
    if (currentState === "Sign up") {
      signUp(userName, email, password);
    } else {
      login(email, password);
    }
  }

  return (
    <div className="login">
      <img src={assets.logo_big} className="logo" alt="" />
      <form className="login-form" onSubmit={handelSubmit}>
        <h2>{currentState}</h2>
        {currentState === "Sign up" ? (
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            placeholder="Enter Username"
            className="form-input"
            required
            value={userName}
          />
        ) : (
          ""
        )}
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Enter Email"
          className="form-input"
          required
          value={email}
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Enter Password"
          className="form-input"
          required
          value={password}
        />
        <button type="submit">
          {currentState === "Sign up" ? "Create Account" : "Login Now"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree To The Terms Of Use & Privacy Policy.</p>
        </div>
        <div className="login-forgot">
          {currentState === "Sign up" ? (
            <p className="login-toggle">
              Already Have An Account
              <span
                onClick={() => {
                  setCurrentState("Login");
                }}
              >
                Login Here
              </span>
            </p>
          ) : (
            <p className="login-toggle">
              Create An Account
              <span
                onClick={() => {
                  setCurrentState("Sign up");
                }}
              >
                Click Here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
