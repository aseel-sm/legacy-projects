import React, { Component } from "react";

class LocalAdminSetup extends Component {
  state = {};
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Add local admin
        </button>

        <div
          className="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Add New Local Admin
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="" method="post">
                  <div class="form-group">
                    <label for="">Username</label>
                    <input
                      type="email"
                      class="form-control"
                      name=""
                      id=""
                      aria-describedby="emailHelpId"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group">
                    <label for="">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      name=""
                      id=""
                      placeholder=""
                    />
                  </div>

                  <button
                    type="button"
                    className="btn btn-secondary mr-2"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary">
                    Add
                  </button>
                </form>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>

        <table class="table table-striped table-bordered table-responsive mt-3">
          <thead class="thead">
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>Dept</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">asdf@gmail.com</td>
              <td>123456</td>
              <td>Computer Application</td>
              <td>
                <button className="btn btn-danger">Remove</button>
              </td>
            </tr>
            <tr>
              <td scope="row">asdf@gmail.com</td>
              <td>123456</td>
              <td>Computer Application</td>
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

export default LocalAdminSetup;
