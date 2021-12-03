import React from "react";
import logo from './images/logo.png';

const Header = () => {

  return (
    <>
        <div className="header">
            <img alt="logo" src={logo} width="50" height="40"/>&nbsp;&nbsp;&nbsp;
            <span className="header_text">  Keep</span>
        </div>

    </>
  )
}

export default Header;