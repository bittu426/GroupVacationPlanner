import React, { useState, useEffect } from "react";
import Home from "./Home";
import { Component } from "react";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";
import Login from "./Login";
import APIService from './APIService'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Register from "./Register";


const apiservice = new APIService() ;

  class App extends Component {
    render() {
      return (
        <div id="App">
            <h2>Welcome to React Router Tutorial</h2>
            
            <Routes>
                <Route path="/" element={<NavMenu />} />
                    <Route path="/login" element={<Login apiservice = {apiservice}  />} />
                    <Route path="/register" element={<Register apiservice = {apiservice} />} />
                
            </Routes>

            
            
        </div>
      );
    }
  }
  export default App;