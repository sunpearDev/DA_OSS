import React, { Component } from "react";
import "../css/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="top_footer">
          <div className="footer_about">
            <h4>About Amadas</h4>
            <a>About amadas</a>
            <a>Staff</a>
            <a>Physical store</a>
          </div>
          <div className="footer_account">
            <h4>My Account</h4>
            <a>Profile</a>
            <a>Account</a>
            <a>Purchases</a>
          </div>
          <div className="footer_social">
            <h4>Social</h4>
            <a>Facebook</a>
            <a>Instagram</a>
            <a>Twitter</a>
          </div>
          <div className="footer_service">
            <h4>Service</h4>
            <a>Feed back</a>
            <a>Bug Report</a>
            <a>VIP Service</a>
          </div>
        </div>
        <hr />
        <img id="branch_name" src="branch_name.png" alt="logo" />
        <div className="footer_legal">
          <div className="footer_copyright">
            <i className="fa fa-copyright" aria-hidden="true"></i>
            &nbsp; Copyright 2020 Amadas Inc. All rights reserved
          </div>
          <img id="small_logo" src="small_logo.png" alt="logo" />
        </div>
      </div>
    );
  }
}
