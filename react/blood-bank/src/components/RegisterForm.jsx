import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../css/container.css";
import axios from "axios";
import Axios from "axios";
class RegisterForm extends Component {
  state = {
    userType: "Donor",
    isAgeokay: true,
    isWeightOkay: true,

    isDiseaseOkay: true,
    password: "",
    username: "",
    age: "",
    fullName: "",
    gender: "",
    year: "",
    dept: "",
    bloodGroup: "",
    phoneNumber: "",
    email: "",
    lastDonateDate: new Date(),
    isUserNameExist: false,
    userData: [],
    departments: [
      "Select",
      "Computer Application",
      "Business Administration",
      "Commerce",
      "Physics",
      "Electronics",
      "Arabic",
      "English",
      "Psychology",
      "Bio Science",
      "Mathematics and Stastics",
      "Animation and Graphic Design",
      "Fashion Design and Management",
      "Logistic Management",
      "Industrial Instrumention and Automation",
      "Software Development and System Administration",
      "Human Resource Management",
    ],
    yr: ["Select", "UG-1", "UG-2", "UG-3", "PG-1", "PG-2"],
    bloodType: ["Select", "A+", "A-", "AB+", "AB-", "O+", "O-", "B+", "B-"],
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/user")
      .then((res) => res.data)
      .then((res) => {
        var users = [];
        for (let index = 0; index < res.length; index++) {
          users[index] = res[index].username;
        }
        this.setState({
          userData: users,
        });
        console.log(this.state.userData);
      });
  }
  handleChange = (e) => {
    console.log(e.target.value);
    let value = e.target.value;
    if (e.target.name == "username") {
      console.log();

      this.state.userData.includes(value)
        ? this.setState({
            isUserNameExist: true,
          })
        : this.setState({
            isUserNameExist: false,
          });
    }
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onCheck = (e) => {
    //  const names = e.name;
    console.log(this.state[e.target.name]);
    let status = this.state[e.target.name];
    this.setState({
      [e.target.name]: !status,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      username,
      age,
      fullName,
      gender,
      year,
      dept,
      bloodGroup,
      phoneNumber,
      email,
      lastDonateDate,
      userType,
      password,
    } = this.state;
    axios
      .post("http://localhost:5000/register/add", {
        username,
        age,
        fullName,
        gender,
        year,
        dept,
        bloodGroup,
        phoneNumber,
        email,
        lastDonateDate,
      })
      .then((res) => console.log(res.data));

    axios
      .post("http://localhost:5000/user/add", {
        username,
        password,
        userType,
      })
      .then((res) => console.log(res.data));
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        Register form
        <div className="container-sm bg-dark" style={{ width: "auto" }}>
          <div className="card my-3 p-3 text-center">
            <label>
              <input
                type="checkbox"
                checked={this.state.isAgeokay}
                onChange={this.onCheck}
                name="isAgeokay"
                id=""
              />
              I am above 18 years old
            </label>
            <label>
              <input
                type="checkbox"
                onChange={this.onCheck}
                checked={this.state.isWeightOkay}
                name="isWeightOkay"
                id=""
              />
              My weight is above 50 kg
            </label>
            <label>
              <input
                type="checkbox"
                onChange={this.onCheck}
                name="isDiseaseOkay"
                id=""
                checked={this.state.isDiseaseOkay}
              />
              I dont have any chronic disease
            </label>
          </div>
        </div>
        {this.state.isDiseaseOkay &&
        this.state.isAgeokay &&
        this.state.isWeightOkay ? (
          <form
            className="container-sm bg-dark"
            style={{ width: "auto" }}
            onSubmit={this.handleSubmit}
            autoComplete={true}
            action="/"
          >
            <div className="card p-3">
              <label className=" form-group has-float-label">
                <input
                  type="text"
                  placeholder=" "
                  name="fullName"
                  value={this.state.fullName}
                  onChange={this.handleChange}
                  required
                  className="form-control"
                />
                <span>Full Name</span>
              </label>
              <div className="form-inline">
                <label className="has-float-label">
                  <input
                    type="number"
                    placeholder=" "
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                    required
                    className="form-control"
                  />
                  <span>Age</span>
                </label>
                <div className="ml-3 form-inline">
                  <label className="ml-3">
                    <input
                      type="radio"
                      value="male"
                      onChange={this.handleChange}
                      name="gender"
                      required
                      id=""
                    />
                    Male
                  </label>
                  <label className="ml-3">
                    <input
                      type="radio"
                      value="female"
                      onChange={this.handleChange}
                      name="gender"
                      id=""
                      required
                    />
                    Female
                  </label>
                </div>
              </div>

              <div className="form-inline">
                Department
                <select
                  className="form-control"
                  id=""
                  value={this.state.dept}
                  onChange={this.handleChange}
                  name="dept"
                  id=""
                  required
                >
                  {this.state.departments.map((dept) => {
                    return (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="mt-3">
                Year
                <select
                  className="form-control"
                  id=""
                  name="year"
                  value={this.state.year}
                  required
                  onChange={this.handleChange}
                  id=""
                >
                  {this.state.yr.map((yr) => {
                    return (
                      <option key={yr} value={yr}>
                        {yr}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="form-group form-inline mt-3">
                <div className="">
                  Blood Group{" "}
                  <select
                    className="form-control"
                    id="bloodgroup"
                    required
                    name="bloodGroup"
                    value={this.state.bloodGroup}
                    onChange={this.handleChange}
                    id=""
                  >
                    {this.state.bloodType.map((bt) => {
                      return (
                        <option key={bt} value={bt}>
                          {bt}
                        </option>
                      );
                    })}
                  </select>
                  <div className="form-inline mt-3">
                    {" Last date of Donation "}
                    <input
                      type="date"
                      value={this.state.lastDonateDate}
                      onChange={this.handleChange}
                      name="lastDonateDate"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-3 mt-3 mb-3">
              <label className=" form-group has-float-label">
                <input
                  type="text"
                  placeholder=" "
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  className="form-control"
                  required
                />
                <span>Username</span>
              </label>
              {this.state.isUserNameExist ? (
                <small style={{ color: "red" }} className="">
                  Username already taken
                </small>
              ) : null}
              <label className=" form-group has-float-label">
                <input
                  type="password"
                  name="password"
                  placeholder=" "
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="form-control"
                  required
                />
                <span>Password</span>
              </label>
            </div>
            <div className="card p-3 mt-3 mb-3">
              <label className=" form-group has-float-label">
                <input
                  type="text"
                  required
                  placeholder=" "
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                  name="phoneNumber"
                  className="form-control"
                />
                <span>Mobile Number</span>
              </label>
              <label className=" form-group has-float-label">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  value={this.state.email}
                  onChange={this.handleChange}
                  className="form-control"
                  required
                />
                <span>E-mail</span>
              </label>
            </div>
            <input
              type="submit"
              disabled={this.state.isUserNameExist}
              className="btn btn-primary  mb-3"
              value="Register"
            />
          </form>
        ) : (
          <div
            style={{ color: "white" }}
            className=" container-sm card p-3 mt-3 mb-3 h-20 bg-danger "
          >
            Agree Above Conditions to register
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(RegisterForm);
