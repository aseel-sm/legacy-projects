import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../css/admin.css";
import SideBar from "../components/admin/SideBar";
import PageContent from "../components/admin/PageContent";
import DonorData from "../components/admin/Super Admin/DonorData";
import RequestData from "../components/admin/Super Admin/RequestData";
import NewRequest from "../components/admin/Super Admin/NewRequest";

class Admin extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="d-flex" id="wrapper">
          <SideBar></SideBar>
          <PageContent></PageContent>
        </div>
      </Router>
    );
  }
}

export default Admin;
