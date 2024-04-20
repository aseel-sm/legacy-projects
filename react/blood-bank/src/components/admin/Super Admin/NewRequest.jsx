import React, { Component } from "react";
class NewRequest extends Component {
  state = {};

  request = () => {
    return (
      <div class="card">
        <img class="card-img-top" src="holder.js/100x180/" alt="" />
        <div class="card-body">
          <h4 class="card-title">Requester: Aseel SM</h4>
          <p class="card-text">Mobile:9207418150 </p>

          <p> Required Blood: A+</p>

          <p> Hospital:Sm Hospital</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-success">Verify</button>
          <button className="btn btn-danger ml-2">Reject</button>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div>
        <div class="card-columns mt-3">
          {this.request()}
          {this.request()}
          {this.request()}
          {this.request()}
          {this.request()}
          {this.request()}
          {this.request()}
        </div>
      </div>
    );
  }
}

export default NewRequest;
