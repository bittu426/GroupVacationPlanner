// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";


export { default as Login } from "./components/Login";


const rootElement = document.getElementById("root");
ReactDOM.createRoot(
  <BrowserRouter>
  <Auth0Provider
    domain="dev-dm6nugc4.us.auth0.com"
    clientId="ECUr7U2H6cH2fdYno1UWDIOaRYwDwsA1"
    redirectUri={window.location.origin}
  >
    
    <App />
  
  </Auth0Provider>
  </BrowserRouter>,
 

  rootElement
);


