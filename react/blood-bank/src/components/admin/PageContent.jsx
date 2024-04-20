import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import $ from "jquery";
import "../../css/admin.css";
import MainPage from "../admin/Super Admin/MainPage";
import DonorData from "../admin/Super Admin/DonorData";
import RequestData from "../admin/Super Admin/RequestData";
import NewRequest from "../admin/Super Admin/NewRequest";
import LocalAdminSetup from "../admin/Super Admin/LocalAdminSetup";
class PageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // print=()=>{
  //     this.state.p
  // }

  togglehandle = (e) => {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  };
  render() {
    return (
      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <button
            onClick={this.togglehandle}
            className="btn btn-primary"
            id="menu-toggle"
          >
            Menu
          </button>
        </nav>
        <div className="container-fluid">
          <Router>
            <Switch>
              <Route exact path="/admin" component={MainPage}></Route>
              <Route
                exact
                path="/admin/new_request"
                component={NewRequest}
              ></Route>
              <Route
                exact
                path="/admin/request_data"
                component={RequestData}
              ></Route>
              <Route
                exact
                path="/admin/local_admin_setup"
                component={LocalAdminSetup}
              ></Route>
              <Route
                exact
                path="/admin/donor_data"
                component={DonorData}
              ></Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default PageContent;
