import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/actions/userAction";
import "../styles/signin.css";

function Signup() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    user: "",
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(data));
    console.log(data)
    setData({
      user: "",
      email: "",
      password: ""
    })
    window.location.href = "#/sign-in";
  };
  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <fieldset>
          <div className="input-grid">
          <h2 align="left">Sign Up</h2>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setData({ ...data, user: e.target.value });
              }}
            />
            <input
              placeholder="Email"
              type="email"
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            />
            <button className="signin-button" type="submit">Sign Up</button>
            <a href="#/sign-in">Already have an account? Sign In</a>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Signup;