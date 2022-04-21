import React, { Component } from 'react';
import Calender from './fullcalender';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Vacation Planner</h1>
        <p>Welcome to the Vacation planner!</p>
        <ul>
          <Calender></Calender>
         
        </ul>
        <p>Filler Text Here</p>
      </div>
    );
  }
}

export default Home;