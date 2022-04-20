import React, { Component } from "react";
import search from "../../assets/images/search.png";
import("./SearchBar.css");

export default class SearchBar extends Component {
  render() {
    return (
      <div className="all_searchBar">
        <h3>BUSCANDO ALGO ESPECÍFICO?</h3>
        <div className="searchBar_div">
          <input
            type="text"
            className="searchBar_input"
            placeholder="Digite um modelo, marca ou ano"
          />
          <button className="searchBar_button">
            <img src={search} alt="Botão de pesquisa" />
          </button>
        </div>
      </div>
    );
  }
}
