import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import RequestForm from "./components/RequestForm";
import RegisterForm from "./components/RegisterForm";
import Admin from "./components/Admin";
import Home from "./components/Home";
import DonorProfile from "./components/DonorProfile";
function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar></Navbar>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/request" component={RequestForm}></Route>
          <Route path="/register" component={RegisterForm}></Route>
        </div>

        <Route path="/admin" component={Admin}></Route>
        <Route path="/donor_profile" component={DonorProfile}></Route>
      </Router>
    </div>
  );
}

export default App;
