import React, { Component } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";

export default class HeaderSection extends Component {
  render() {
    return (
      <div className="HeaderSection_div">
        <NavBar />
        <Banner />
      </div>
    );
  }
}
