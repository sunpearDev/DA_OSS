import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { burgerReponsive } from "../animation/navbar";

export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.logOut=this.logOut.bind(this)
    this.state = {
      username: ""
    }
  }
  logOut(){
    sessionStorage.clear();
    window.location='/'
  }
  componentDidMount() {
    if (sessionStorage && sessionStorage.getItem("username")) {
      this.setState({
        username: sessionStorage.getItem("username")
      })
    }
  }
  render() {
    return (
      <header>
        <nav>
          <Link to="/">
            <img className="logo" src="logo.png" alt="logo" />
          </Link>
          <a className="burger" onClick={burgerReponsive}>
            <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
          </a>
          <ul className="nav_links">
            <li>
              <Link to="/">Store</Link>
            </li>
            <li>
              <Link to="/browser">Browser</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
              <a href="https://www.facebook.com/sun.pear.7/">Contact</a>
            </li>
          </ul>
          <ul className="reponsive_nav_links">
            <li>
              <Link onClick={burgerReponsive} to="/">Store</Link>
            </li>
            <li>
              <Link onClick={burgerReponsive} to="/browser">Browser</Link>
            </li>
            <li>
              <Link onClick={burgerReponsive} to="/library">Library</Link>
            </li>
            {this.state.username === "" ? (<><li>
              <Link onClick={burgerReponsive} to="/register">Register</Link>
            </li>
              <li>
                <Link onClick={burgerReponsive} to="/login">Login</Link>
              </li></>) : (<><li><a className="Account">{this.state.username}</a></li><li><a onClick={this.logOut}>Logout</a></li></>)}

            <li>
              <a onClick={burgerReponsive} href="https://www.facebook.com/sun.pear.7/">Contact</a>
            </li>
          </ul>
          <div className="reg_signin_zone" >
            {this.state.username === "" ? (<><Link className="btn" to="/register">Register</Link>
              <Link className="btn" to="/login">Login</Link></>) : (<><div className="Account">{this.state.username}</div><a onClick={this.logOut}><i className="fa fa-sign-out fa-2x" aria-hidden="true"></i></a></>)}
 
          </div>
        </nav>
      </header>
    );
  }
}
