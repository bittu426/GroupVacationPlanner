// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";



export { default as Login } from "./components/Login";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
 
    <App />
  

  </BrowserRouter>,
 

  rootElement
);


