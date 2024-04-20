import React, { Component } from "react";
import $ from "jquery";
import { Link, Router } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="collapsibleNavId">
          <Link to="/request" className=" nav-item nav-link">
            Request
          </Link>
          <Link to="/register" className=" nav-item nav-link">
            Register
          </Link>
          <Link to="/login" className=" nav-item nav-link">
            Login
          </Link>
        </div>
      </nav>
    );
  }
}
export default Navbar;
