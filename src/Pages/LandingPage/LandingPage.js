import React, { useState } from "react";
import App from "../../App";
import Login from "../Login/Login";

const LandingPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>{loggedIn ? <App /> : <Login click={() => setLoggedIn(true)} />}</div>
  );
};

export default LandingPage;
