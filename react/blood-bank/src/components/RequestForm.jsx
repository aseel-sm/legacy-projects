import React, { Component } from "react";
import "../css/container.css";
class RequestForm extends Component {
  state = {
    bloodType: ["A+", "A-", "AB+", "AB-", "O+", "O-", "B+", "B-"],
  };
  render() {
    return (
      <div>
        Request Form
        <form class="container-sm" style={{ width: "auto" }} action="">
          <div className="card mb-3 p-3 text-center">
            <label className=" form-group has-float-label">
              <input
                type="text"
                placeholder=" "
                name="requesterName"
                className="form-control"
              />
              <span>Requester Name</span>
            </label>
            <label className=" form-group has-float-label">
              <input
                type="text"
                placeholder=" "
                name="patientName"
                className="form-control"
              />
              <span>Patient Name</span>
            </label>
            <label className=" form-group has-float-label">
              <input
                type="text"
                placeholder=" "
                name="hospital"
                className="form-control"
              />
              <span>Hospital Address</span>
            </label>
            <label className=" form-group has-float-label">
              <input
                type="text"
                placeholder=" "
                name="mobileNumber"
                className="form-control"
              />
              <span>Mobile Number</span>
            </label>

            <div className="form-inline mb-3">
              <label htmlFor="bg" className="mr-3">
                Blood Group
              </label>
              <select
                className="form-control"
                id="bloodgroup"
                name="requiredBlood"
                id="bg"
              >
                {this.state.bloodType.map((bt) => {
                  return <option value={bt}>{bt}</option>;
                })}
              </select>
            </div>

            <label className="form-group has-float-label">
              <input
                type="number"
                placeholder="No.of unit"
                name=""
                className="form-control"
              />
              <span>Amount Required</span>
            </label>

            <label className=" form-group has-float-label">
              <input
                type="date"
                placeholder=" "
                name=""
                className="form-control"
              />
              <span>Date of Requirment</span>
            </label>
          </div>
          <input
            type="submit"
            className="btn btn-primary mb-3"
            value="Request"
          />
        </form>
      </div>
    );
  }
}

export default RequestForm;
