import React, { Component } from "react";
import addButton from "../../assets/images/addButton.png";
import closeButton from "../../assets/images/closeButton.png";
import AddForm from "./AddForm";
import("./AddButton.css");

export default class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addForm: false,
      addOrCloseButton: addButton,
    };
  }

  onClick = () => {
    if (this.state.addForm === false) {
      this.setState({
        addForm: true,
        addOrCloseButton: closeButton,
      });
    } else {
      this.setState({
        addForm: false,
        addOrCloseButton: addButton,
      });
    }
  };

  render() {
    return (
      <div>
        <div className="addButton_div">
          <button className="addButton_div_button" onClick={this.onClick}>
            <img
              src={this.state.addOrCloseButton}
              alt="Botão para abrir ou fechar o formulário"
              className="addButton_div_button_image"
            />
          </button>
        </div>
        {this.state.addForm ? (
          <div>
            <AddForm />
          </div>
        ) : null}
      </div>
    );
  }
}
