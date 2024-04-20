import React, { Component } from "react";
class RequestData extends Component {
  state = {};
  render() {
    return (
      <div>
        RequestData
        <table class="table table-striped table-bordered table-hover table-responsive">
          <thead class="thead">
            <tr>
              <th>Requester</th>
              <th>Patient Name</th>
              <th>Hospital</th>
              <th>Mobile No</th>
              <th>Blood Group</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">Aseel Abdulla</td>
              <td>Sheza</td>
              <td>Manjeri Medical College,Malapuram,Kelala</td>
              <td>9207418150</td>
              <td>O+</td>

              <td>
                <button className="btn btn-success">Verified</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default RequestData;
