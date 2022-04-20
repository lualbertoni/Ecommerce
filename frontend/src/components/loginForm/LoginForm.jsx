import React, { Component } from "react";
import PostUserLogin from "../api/PostUserLogin";
import("./LoginForm.css");

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    PostUserLogin(username, password)
  };

  render() {
    return (
      <div className="LoginForm_div">
        <form className="LoginForm_form" onSubmit={this.handleSubmit}>
          <div className="LoginForm_form_div">
            <label className="LoginForm_form_div_label">Usuário:</label>
            <input
              className="LoginForm_form_div_input"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="LoginForm_form_div">
            <label className="LoginForm_form_div_label">Senha:</label>
            <input
              className="LoginForm_form_div_input"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="LoginForm_form_div">
            <button className="LoginForm_form_div_button">Entrar</button>
          </div>
        </form>
      </div>
    );
  }
}
