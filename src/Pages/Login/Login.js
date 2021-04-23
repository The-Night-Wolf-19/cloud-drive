import React, { useState } from "react";
import "./Login.css";
import loginbg from "./loginbg.png";
import sarvvid from "../../Asset/sarvvid.png";
// import loginbg from "./loginbg1.jpg";

// 3 columns
// enter your userid
// button->get details

// 1field->enter auth token
// enter p_id

// login button

const Login = (props) => {
  const [userId, setUserId] = useState("");
  const [disableUserId, setDisableUserId] = useState(false);
  const [showGetDetails, setShowGetDetails] = useState(true);
  const [showLoginContainer, setShowLoginContainer] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [pId, setPId] = useState("");
  return (
    <div className="LoginPage">
      <img className="loginBg" src={loginbg} alt=""></img>
      <img className="loginLogo" src={sarvvid} alt="Sarvvid AI" />
      <div className="login_form">
        <div className="form">
          {disableUserId ? (
            <input
              type="text"
              name="User Id"
              required
              autoCapitalize={false}
              autoComplete="off"
              value={userId}
              disabled
            />
          ) : (
            <input
              type="text"
              name="User Id"
              required
              autoCapitalize={false}
              autoComplete="off"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          )}
          <label htmlFor="User Id" className="label">
            <span className="login_content">User ID</span>
          </label>
        </div>
        {showGetDetails ? (
          <button
            className="login_button"
            onClick={() => {
              setShowLoginContainer(true);
              setDisableUserId(true);
              setShowGetDetails(false);
            }}
          >
            Get Details
          </button>
        ) : (
          ""
        )}
        {showLoginContainer
          ? [
              <div className="form">
                <input
                  type="text"
                  name="Auth Token"
                  required
                  autoCapitalize={false}
                  autoComplete="off"
                  value={authToken}
                  onChange={(e) => setAuthToken(e.target.value)}
                />
                <label htmlFor="Auth Token" className="label">
                  <span className="login_content">Auth Token</span>
                </label>
              </div>,
              <div className="form">
                <input
                  type="text"
                  name="P Id"
                  required
                  autoCapitalize={false}
                  autoComplete="off"
                  value={pId}
                  onChange={(e) => setPId(e.target.value)}
                />
                <label htmlFor="P Id" className="label">
                  <span className="login_content">P ID</span>
                </label>
              </div>,
              <button className="login_button" onClick={props.click}>
                Login
              </button>,
            ]
          : ""}
      </div>
    </div>
  );
};

export default Login;
