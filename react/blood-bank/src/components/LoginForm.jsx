import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "../css/checkmark.css";
import "../css/container.css";
class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    users: [],
    isInvalidUser: false,
    message: "",
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/user")

      .then((res) => {
        this.setState({
          users: res.data,
        });

        console.log(this.state.users);
      });
  }
  submitHandle = (e) => {
    e.preventDefault();
    var flag = 0;
    for (let index = 0; index < this.state.users.length; index++) {
      if (this.state.username === this.state.users[index].username) {
        flag = 1;
        if (this.state.password === this.state.users[index].password) {
          flag = 2;
          console.log(this.state.users[index].userType);
          if (this.state.users[index].userType == "Admin") {
            this.props.history.push("/admin");
          } else if (this.state.users[index].userType == "Donor") {
            window.location = "/donor_profile";
            break;
          } else {
            this.props.history.push("/local_admin");
          }
        }
      }

      console.log(this.state.users[index].username, this.state.message);
    }
    if (flag == 0)
      this.setState({ message: "Invalid Username", isInvalidUser: true });
    if (flag == 1)
      this.setState({ message: "Incorrect password", isInvalidUser: true });
  };
  changeHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="container-sm card mt-3 " style={{ width: "auto%" }}>
        <form onSubmit={this.submitHandle}>
          <legend className="text-center">Sign Up</legend>
          <label className=" form-group has-float-label">
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              value={this.state.username}
              onChange={this.changeHandle}
              className="form-control"
            />
            <span>Username</span>
          </label>
          <label className=" form-group has-float-label">
            <input
              required
              type="text"
              placeholder="Password"
              className="form-control"
              name="password"
              value={this.state.password}
              onChange={this.changeHandle}
            />
            <span>Password</span>
          </label>
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <br />
          <div className="text-center">
            <input
              type="submit"
              className="btn btn-danger mb-5 "
              value="Log In"
            />
          </div>
          {this.state.isInvalidUser ? (
            <small style={{ color: "red" }} className="">
              {this.state.message}
            </small>
          ) : null}
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
