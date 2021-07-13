import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Nav.css";
const Nav = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netlix"
          className="nav__logo"
        />
        <img
          onClick={() => history.push("/profile")}
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
          alt="avatar"
          className="nav__avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
