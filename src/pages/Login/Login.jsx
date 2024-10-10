import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign up");

  return (
    <div className="login">
      <img src={assets.logo_big} className="logo" alt="" />
      <form className="login-form">
        <h2>{currentState}</h2>
        {currentState === "Sign up" ? (
          <input
            type="text"
            placeholder="Enter Username"
            className="form-input"
            required
          />
        ) : (
          ""
        )}
        <input
          type="email"
          placeholder="Enter Email"
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="form-input"
          required
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
