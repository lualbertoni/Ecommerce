import React, { Component } from "react";
import PostUserRegister from "../api/PostUserRegister";
import ProductForm from "./forms/ProductForm";
import("./AddForm.css");

export default class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userForm: false,
      productForm: false,
      userName: "",
      userPassword: "",
      productName: "",
      productCategory: "",
      productPrice: 0,
      productImages: [],
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSelectChange = (e) => {
    if (e.target.value === "user") {
      this.setState({
        userForm: true,
        productForm: false,
      });
    } else {
      this.setState({
        userForm: false,
        productForm: true,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.userForm) {
      PostUserRegister(this.state.userName, this.state.userPassword);
    }
  };

  render() {
    return (
      <div className="addForm_all">
        <form className="addForm_form">
          <label className="addForm_form_div_label">
            <p>O que você deseja adicionar?</p>
          </label>
          <select
            className="addForm_form_div_select"
            onChange={this.onSelectChange}
          >
            <option value="">Selecione</option>
            <option value="user">Usuário</option>
            <option value="product">Produto</option>
          </select>
        </form>

        {/* Formulário de usuário */}
        {this.state.userForm ? (
          <form className="addForm_userForm" onSubmit={this.handleSubmit}>
            <label className="addForm_userForm_form_div_label">
              <p>Nome de usuário</p>
            </label>
            <input
              className="addForm_userForm_form_div_input"
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange}
              required
            />
            <label className="addForm_userForm_form_div_label">
              <p>Senha</p>
            </label>
            <input
              className="addForm_userForm_form_div_input"
              type="password"
              name="userPassword"
              value={this.state.userPassword}
              onChange={this.handleChange}
              required
            />
            <button className="addForm_userForm_button">Adicionar</button>
          </form>
        ) : null}

        {/* Formulário de produtos */}
        {this.state.productForm ? <ProductForm /> : null}
      </div>
    );
  }
}
