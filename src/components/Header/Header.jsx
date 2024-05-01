import { Link, Navigate } from "react-router-dom";
import "./Header.scss";

import React from "react";

const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="left_side_wrapper">
        <Link to="/">
          <div className="img_wrapper">
            <img src="" alt="" />
          </div>
        </Link>
      </div>
      <div className="right_side_wrapper">
        <ul className="wrapper_list">
          <li className="header_item">
            {" "}
            <Link to="/about"> About</Link>
          </li>
          <li className="header_item">Profile</li>
          <li className="header_item">
            <Link to="/"> Main</Link>
          </li>
          <li className="header_item">Cart</li>
          <li className="header_item">Logout</li>
          <li className="header_item">Sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
