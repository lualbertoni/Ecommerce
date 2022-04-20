import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import("./css/NavBar.css");

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar_div">
        <div className="NavBar_div_nav">
          <input type="checkbox" id="NavBar_div_nav-check" />
          <div className="NavBar_div_nav-header">
            <div className="NavBar_div_nav-title">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
          </div>
          <div className="NavBar_div_nav-btn">
            <label htmlFor="NavBar_div_nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="NavBar_div_nav-links">
            <a href="/" target="_blank">
              Home
            </a>
            <a href="/login" target="_blank">
              Login
            </a>
          </div>
        </div>
      </div>
    );
  }
}
