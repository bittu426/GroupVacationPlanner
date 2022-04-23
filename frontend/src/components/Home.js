import React, { Component } from "react";
import Calender from "./fullcalender";
import Header from "./Header";

import {
  Form,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";

import "../styles/Home.css";

export class Home extends Component {
  static displayName = Home.name;

  

  render() {
    console.log(this.props)
    return (
      <div>
        <Header />
        <div class="home-container">
          <div className="greeting">
            <h1 className="welcome">
              Welcome Username! Plan your upcoming trip!
            </h1>
          </div>
          <div className="calender">
            <Calender {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
