import React, { Component } from 'react';
import Calender from './fullcalender';
import Header from './Header';

import {
  Form,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";

import "./Home.css";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <Header />
        <div class="home-container">
          <div className="group-form-container">
            <Form>
              <FormGroup
                className="card-inside"
                controlId="grouptitle"
                size="lg"
              >
                <FormLabel className="input-label">Group title:</FormLabel>

                <FormControl
                  autoFocus
                  type="text"
                  className="input-filed"
                  // name="userid"
                  // value={username}
                  placeholder="Group title"
                  // onChange={(e) => setUserName(e.target.value)}
                />
              </FormGroup>

              <FormGroup
                className="card-inside"
                controlId="groupstatus"
                size="lg"
              >
                <FormLabel className="input-label">Group status:</FormLabel>

                <FormControl
                  autoFocus
                  type="text"
                  className="input-filed"
                  // name="userid"
                  // value={username}
                  placeholder="Group status"
                  // onChange={(e) => setUserName(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="card-inside" controlId="profile" size="lg">
                <FormLabel className="input-label">Profile:</FormLabel>

                <FormControl
                  autoFocus
                  type="text"
                  className="input-filed"
                  // name="userid"
                  // value={username}
                  placeholder="profile"
                  // onChange={(e) => setUserName(e.target.value)}
                />
              </FormGroup>
            </Form>
          </div>
          <div className="calender">
            <Calender />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
