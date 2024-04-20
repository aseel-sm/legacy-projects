import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class SideBar extends Component {
  state = {
    sidebarOption: [
      { option: "New Request", path: "/admin/new_request", badge: 2 },
      { option: "Request Data", path: "/admin/request_data", badge: null },
      { option: "Donors Data", path: "/admin/donor_data", badge: null },
      {
        option: "Local Admin Settings",
        path: "/admin/local_admin_setup",
        badge: null,
      },
    ],
  };
  render() {
    return (
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Admin Dashboard</div>
        <div className="list-group list-group-flush">
          {this.state.sidebarOption.map((options) => {
            return (
              <Link
                to={options.path}
                //onClick={() => window.location.reload()}
                className="list-group-item list-group-item-action bg-light"
              >
                {options.option}
                <span
                  style={{ marginLeft: "5px" }}
                  className=" badge badge-pill badge-primary"
                >
                  {options.badge}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SideBar;
