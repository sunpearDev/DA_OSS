import React, { Component } from "react"
import "../css/Register_Login_Form.css"
import axios from "axios"


export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.Register = this.Register.bind(this);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value,
    });
  }
  resetInput() {
    this.setState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
  }
  checkStandardInput() {
    let error = "";
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    if (this.state.username.length < 6) {
      error += "Username must be at least 6 characters\n";
    }
    if (this.state.password !== this.state.confirmPassword) {
      error += "Password is not math confirm password \n";
    }
    if (!pattern.test(this.state.password) || !pattern.test(this.state.confirmPassword)) {
      error += "Password must be at least 8 characters and have at least a lowcase, a uppercase, a number\n";
    }
    return error
  }
  async Register(e) {
    e.preventDefault();
    let standard = this.checkStandardInput();
    if (standard.length > 0) {
      alert(standard)
    }
    else {
      let user = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      }

      let result = await axios.post("https://amadas.herokuapp.com/accounts", user).then()
        .catch(err => { alert("Sign up fail\n" + err + "\n") })
      console.log(result.data)
      if (result.data.id !== undefined) {
        await sessionStorage.setItem('username', result.data.username)
        await sessionStorage.setItem('id', result.data.id)
        await sessionStorage.setItem('library', JSON.stringify([]))
        alert("Sign up successfully.")
        window.location.reload()
        window.location = '/'
      }
      else {
        this.setState({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        })
        alert("Sign up fail.\nUser already.")
      }
    }
  }

  render() {
    return (
      <form id="RegisterForm" onSubmit={this.Register}>
        <label >Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={this.onChangeUsername}
          value={this.state.username}
        />
        <label >Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={this.onChangeEmail}
          value={this.state.email}
        />
        <label >Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={this.onChangePassword}
          value={this.state.password}
        />
        <label >Confirm password</label>
        <input
          type="password"
          placeholder="Confirm password"
          name="confirmpassword"
          onChange={this.onChangeConfirmPassword}
          value={this.state.confirmPassword}
        />
        <button type="submit">Register</button>
      </form>
    )
  }
}
