import React, { Component } from "react";
import RegisterForm from "../components/RegisterForm";
import "../css/Register_Login_Page.css";

export default class RegisterPage extends Component {
  render() {
    return (
      <div id="RegisterPage">
        <h2>Sign Up</h2>
        <small>
          Please enter your details to sign up and be part of our great
          community.
        </small>
        <RegisterForm />
      </div>
    );
  }
}
