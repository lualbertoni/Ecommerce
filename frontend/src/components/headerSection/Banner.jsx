import React, { Component } from "react";
import SearchBar from "../searchBar";
import background_menu from "../../assets/images/background_menu.png";
import("./css/Banner.css");

export default class Banner extends Component {
  render() {
    return (
      <div className="Banner_div">
        <img
          href="/"
          src={background_menu}
          alt="banner"
          className="Banner_div_image"
        />

        <div className="Banner_div_searchBar">
          <SearchBar />
        </div>
      </div>
    );
  }
}
