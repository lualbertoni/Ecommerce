import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import("./AdminNavBar.css");

export default class AdminNavBar extends Component {
  onLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/login";
  };

  render() {
    return (
      <div className="adminNavBar_div">
        <img src={logo} alt="logo" className="adminNavBar_div_logo" />
        <button onClick={this.onLogout} className="adminNavBar_div_logout">
          Sair
        </button>
      </div>
    );
  }
}
