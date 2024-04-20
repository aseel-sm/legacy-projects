import React, { Component } from "react";
import hour from "../images/hur.jpg";
import little from "../images/little.jpg";
import onetime from "../images/onetime.jpeg";
import savelife from "../images/savelife.jpg";
import "../css/honeycomb.css";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul id="hexGrid">
          <li class="hex">
            <a class="hexIn" href="#">
              <img src={onetime} alt="" />
              <p style={{ color: "white" }}>
                It Doesn’t Have to be a One-Time Gift
              </p>
            </a>
          </li>
          <li class="hex">
            <a class="hexIn" href="#">
              <img src={hour} alt="" />
              <p style={{ color: "white" }}>It’s Only an Hour of Your Time</p>
            </a>
          </li>
          <li class="hex">
            <a class="hexIn" href="#">
              <img src={savelife} alt="" />
              <p style={{ color: "white" }}>It Saves Lives</p>
            </a>
          </li>
          <li class="hex">
            <a class="hexIn" href="#">
              <img src={little} alt="" />
              <p style={{ color: "white" }}>There’s Little Pain Involved</p>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
