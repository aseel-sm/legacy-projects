import React, { Component } from "react";
class DonorData extends Component {
  state = {};
  render() {
    return (
      <div>
        Donor Data
        <table class="table table-striped table-bordered table-hover table-responsive">
          <thead class="thead">
            <tr>
              <th>Name</th>
              <th>Dept</th>
              <th>Year</th>
              <th>Mobile No</th>
              <th>Blood Group</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">Aseel Abdulla</td>
              <td>Computer Application</td>
              <td>2</td>
              <td>9207418150</td>
              <td>O+</td>
              <td>Availiable</td>
              <td>
                <button className="btn btn-danger">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DonorData;
